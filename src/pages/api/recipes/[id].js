import { isBlank } from '@foundation/lib/util';

import { getSession } from '@atelierfabien/next-auth';

import { fetchRecipe } from '@shop/sanity/types/recipe';

import { defaultLocale } from '@root/i18n';

export default async (req, res) => {
  if (!isBlank(req.query.id)) {
    const session = await getSession({ req });
    const recipe = await fetchRecipe(req.query.id, {
      locale: req.query.locale ?? defaultLocale,
      userId: session?.user?.id,
    });
    if (recipe?.alias?.current === req.query.id) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ error: 'not found' });
    }
  } else {
    res.status(400).json({ error: 'invalid request' });
  }
};
