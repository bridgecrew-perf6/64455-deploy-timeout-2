import { define, defineQuery } from '@atelierfabien/next-sanity';

import { defaultLocale } from '@root/i18n';

import { bundlePredicate, bundleProjection } from '@shop/sanity/queries/bundle';

const options = {
  predicate: bundlePredicate,
  projection: bundleProjection,
  defaultLocale,
};

// Required params: userId

const get = defineQuery('id', options);

const getByAlias = defineQuery('alias', options);

const fetch = defineQuery('all', options);

export default define({
  get,
  getByAlias,
  fetch,
});
