import groq from 'groq';

import { isBlank } from '@atelierfabien/next-foundation/lib/util';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import {
  publicRecipePredicate,
  recipeProjection,
} from '@shop/sanity/queries/recipe';

import { defaultLocale } from '@root/i18n';

const client = getClient(true);

const query = groq`*[_id == $id && ${publicRecipePredicate}][0]{ ${recipeProjection} }`;

export default async (req, res) => {
  if (!isBlank(req.query.id)) {
    const recipe = await client.fetch(query, {
      id: req.query.id,
      locale: req.query.locale ?? defaultLocale,
      defaultLocale,
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
