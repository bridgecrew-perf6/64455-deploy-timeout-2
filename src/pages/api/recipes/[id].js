import groq from 'groq';

import { isBlank } from '@atelierfabien/next-foundation/lib/util';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import { getSession } from '@atelierfabien/next-auth';

import init from '@atelierfabien/next-auth/account';

import {
  publicRecipePredicate,
  recipeProjection,
} from '@shop/sanity/queries/recipe';

import authConfig from '@app/config/auth';

import { defaultLocale } from '@root/i18n';

const client = getClient(true); // private client

const account = init(client);

const publicQuery = groq`*[_id == $id && ${publicRecipePredicate}][0]{ ${recipeProjection} }`;

async function fetchRecipe(id, options = {}) {
  const { userId, ...params } = options;
  if (!isBlank(userId)) {
    const recipe = await account.getDocument(id, {
      ...params,
      types: authConfig.referencedTypes,
      defaultLocale,
      userId,
    });
    return recipe ?? fetchRecipe(id, params);
  } else {
    return client.fetch(publicQuery, {
      ...params,
      id,
      defaultLocale,
    });
  }
}

export default async (req, res) => {
  if (!isBlank(req.query.id) && !req.query.id.startsWith('draft.')) {
    const session = await getSession({ req });
    const recipe = await fetchRecipe(req.query.id, {
      locale: req.query.locale ?? defaultLocale,
      userId: session?.user?.id,
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
