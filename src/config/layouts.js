import groq from 'groq';

import { pick, sortObjectsByIds, isBlank } from '@foundation/lib/util';

import { layoutResolvers } from '@base/config/layouts';

import { resolveReferences } from '@shop/components/Page/Regions';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import {
  nodeCoreProjection,
  productPredicate,
  baseProductProjection,
  categoryPredicate,
  categoryProjection,
} from '@base/sanity/queries';

const privateClient = getClient(true);

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

layoutResolvers.set('tips', (client, page, options) => {
  return resolveReferences(privateClient, page, {
    ...options,
    predicate: `_type == 'recipe'`,
    projection: `_id, title, alias, 'image': images[0]`,
  });
});

layoutResolvers.set('presentation', (client, page, options) => {
  return resolveReferences(client, page, {
    ...options,
    predicate: productPredicate,
    projection: `${baseProductProjection}, 'image': images[0]`,
    map: mapProduct,
  });
});

layoutResolvers.set('shopOverview', async (client, page, options) => {
  const { locale, defaultLocale, params = {} } = options;
  const { categoryPath = [] } = params;

  await resolveReferences(client, page, {
    ...options,
    predicate: `${categoryPredicate} && count(*[_type == 'product' && references(^._id)]) > 0`,
    projection: `${categoryProjection}, 'productCount': count(*[_type == 'product' && references(^._id)])`,
    filter: region => region.id === 'categories',
  });

  await resolveReferences(client, page, {
    ...options,
    predicate: productPredicate,
    projection: `${baseProductProjection}, 'image': images[0]`,
    filter: region => region.id === 'featured',
    map: mapProduct,
  });

  const category = isBlank(categoryPath)
    ? null
    : await client.fetch(
        groq`*[${categoryPredicate} && path.current == $path][0]{ ${categoryProjection} }`,
        {
          locale,
          defaultLocale,
          path: `/${categoryPath.join('/')}`,
        }
      );

  const predicate = category
    ? `${productPredicate} && references($categoryId)`
    : productPredicate;

  const products = await client.fetch(
    groq`*[${predicate}]{
      ${baseProductProjection}, 'image': images[0]
    }|order(name)`,
    {
      locale,
      defaultLocale,
      categoryId: category?._id ?? null,
    }
  );

  return { category, products: products.map(mapProduct) };
});

export { layoutResolvers };

export function mapProduct(product) {
  const data = pick(product, '_id', '_type', 'name', 'pricing', 'image');
  data.image = data.image ?? product.images[0];
  data.alias = product.alias?.current;
  data.intro = isBlank(product.content?.intro)
    ? product.description
    : product.content?.intro;
  data.category = product.category?.name;
  return data;
}
