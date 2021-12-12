import groq from 'groq';

import { pick, sortObjectsByIds } from '@foundation/lib/util';

import { layoutResolvers } from '@base/config/layouts';

import {
  nodeCoreProjection,
  productPredicate,
  baseProductProjection,
} from '@base/sanity/queries';

const nodesProjection = groq`
'nodes': nodes[]->{ 
  ${nodeCoreProjection},
  'item': item->{
    _id, _type, alias,
    'content': { ...i18n[$defaultLocale].content, ...i18n[$locale].content }{
      title, subtitle, intro
    },
    'image': images[0]
  }
}`;

layoutResolvers.set('home', async (client, page, options) => {
  const { locale, defaultLocale } = options;

  const ids = page.regions.reduce((memo, region) => {
    if (
      region._type === 'region.products' &&
      Array.isArray(region.references)
    ) {
      region.references.forEach(({ _ref }) => memo.push(_ref));
    }
    return memo;
  }, []);

  const predicate =
    ids.length > 0 ? `${productPredicate} && _id in $ids` : productPredicate;

  const products = await client.fetch(
    groq`*[${predicate}]{
      ${baseProductProjection}, 
      'image': images[0]
    }|order(order)`,
    {
      ids,
      locale,
      defaultLocale,
    }
  );

  page.products = products.map(product => {
    const data = pick(product, '_id', '_type', 'name', 'pricing', 'image');
    data.alias = product.alias?.current;
    data.category = product.category?.name;
    return data;
  });

  page.products = sortObjectsByIds('_id', ids, page.products);
});

layoutResolvers.set('about', async (client, page, options) => {
  const { locale, defaultLocale } = options;
  page.nodes = await client.fetch(
    groq`*[_type == 'navigation.node' && i18n.nl.path.current == '/aanbod']{
      ${nodesProjection}
    }.nodes[]`,
    {
      locale,
      defaultLocale,
    }
  );
});

layoutResolvers.set('activities', async (client, page, options) => {
  const { node, locale, defaultLocale } = options;

  if (node) {
    page.nodes = await client.fetch(
      groq`*[_type == 'navigation.node' && _id == $id]{ ${nodesProjection} }.nodes[]`,
      {
        id: node._id,
        locale,
        defaultLocale,
      }
    );
  } else {
    page.nodes = [];
  }
});

export { layoutResolvers };
