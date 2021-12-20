import groq from 'groq';

import { isBlank } from '@foundation/lib/util';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import { resolveReferences } from '@shop/lib/server';

import {
  publicRecipePredicate,
  recipeProjection,
} from '@shop/sanity/queries/recipe';

import { defaultLocale } from '@root/i18n';

const client = getClient(true); // private client

const idsProjection = groq`{
  name,
  type,
  type == 'recipes' => {
    'items': recipes[]._ref
  },
  type == 'groups' => {
    'items': groups[].items[]._ref
  },
  type == 'days' => {
    'items': days[]{
      'refs': [
        breakfast._ref,
        lunch._ref,
        dinner._ref, 
        starter._ref,
        desert._ref,
        side._ref,
        snack._ref
      ]
    }.refs[]
  },
}.items[]`;

const userReferencesIdsQuery = groq`*[_type == 'user' && _id == $userId][].references[]._ref`;

const bundleRecipeIdsQuery = groq`*[_type == 'recipe.bundle' && _id in (${userReferencesIdsQuery})]${idsProjection}`;

const publicQuery = groq`*[alias.current == $alias && ${publicRecipePredicate}][0]{ ${recipeProjection} }`;

const sessionQuery = groq`*[
  _type == 'recipe' && alias.current == $alias && (_id in (${bundleRecipeIdsQuery}) || _id in (${userReferencesIdsQuery}))
][0]{ ${recipeProjection} }`;

export async function fetchRecipe(alias, options = {}) {
  const { userId, ...params } = options;
  const hasSession = !isBlank(userId);
  let recipe;
  if (hasSession) {
    recipe = await client.fetch(sessionQuery, {
      ...params,
      alias,
      userId,
      defaultLocale,
    });
    recipe = recipe ?? (await fetchRecipe(alias, params));
  } else {
    recipe = await client.fetch(publicQuery, {
      ...params,
      alias,
      defaultLocale,
    });
  }
  if (recipe?.alias?.current === alias) return resolveReferences(recipe);
}
