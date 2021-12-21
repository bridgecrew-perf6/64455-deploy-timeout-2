import { getClient } from '@atelierfabien/next-sanity/lib/server';

import init from '@app/sanity/types';

export const getProductPropsByAlias = async alias => {
  const context = { locale: 'nl' };

  const types = init(getClient());

  const item = await types.product.getByAlias(alias, context);

  if (item?._type === 'product') {
    const props = await types.product.resolveProps(item, context);
    return props.currentPageProps ?? {};
  } else {
    return { notFound: true };
  }
};

export default async (req, res) => {
  const data = await getProductPropsByAlias('suikerstop-2');
  res.send(data);
};
