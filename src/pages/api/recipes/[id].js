import groq from 'groq';

import { isBlank } from '@foundation/lib/util';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import { getSession } from '@atelierfabien/next-auth';

import init from '@atelierfabien/next-auth/account';

import { resolveReferences } from '@shop/lib/server';

import {
  publicRecipePredicate,
  recipeProjection,
} from '@shop/sanity/queries/recipe';

import authConfig from '@app/config/auth';

import { defaultLocale } from '@root/i18n';

const client = getClient(true); // private client

const account = init(client);

const bundleRecipeIdsQuery = groq`
  *[_type == 'recipe.bundle' && _id == $bundleId && _id in (*[_type == 'user' && _id == $userId][].references[]._ref)]{
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
  }.items[]
`;

const publicQuery = groq`*[_id == $id && ${publicRecipePredicate}][0]{ ${recipeProjection} }`;

const bundleQuery = groq`*[_type == 'recipe' && _id == $id && _id in (${bundleRecipeIdsQuery})][0]{ ${recipeProjection} }`;

async function fetchRecipe(id, options = {}) {
  const { userId, bundleId, ...params } = options;
  const hasSession = !isBlank(userId);
  let recipe;
  if (hasSession && !isBlank(bundleId)) {
    recipe = await client.fetch(bundleQuery, {
      ...params,
      id,
      userId,
      bundleId,
      defaultLocale,
    });
    recipe = recipe ?? (await fetchRecipe(id, params));
  } else if (hasSession) {
    recipe = await account.getDocument(id, {
      ...params,
      types: authConfig.referencedTypes,
      defaultLocale,
      userId,
    });
    recipe = recipe ?? (await fetchRecipe(id, params));
  } else {
    recipe = await client.fetch(publicQuery, {
      ...params,
      id,
      defaultLocale,
    });
  }
  if (recipe?._id === id) return resolveReferences(recipe);
}

export default async (req, res) => {
  if (!isBlank(req.query.id) && !req.query.id.startsWith('draft.')) {
    const session = await getSession({ req });
    const recipe = await fetchRecipe(req.query.id, {
      locale: req.query.locale ?? defaultLocale,
      userId: session?.user?.id,
      bundleId: req.query.bundle,
    });
    if (recipe?._id === req.query.id) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ error: 'not found' });
    }
  } else {
    res.status(400).json({ error: 'invalid request' });
  }
};
