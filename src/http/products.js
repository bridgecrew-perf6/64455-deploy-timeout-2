import { localePaths } from '@foundation/next';
import { isBlank } from '@foundation/lib/util';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import {
  getClient as getBrowserClient,
  usePreviewQueryProps,
} from '@atelierfabien/next-sanity';

import ProductContainer from '@shop/components/Product/Container';

import shopConfig from '@app/config/shop';

import init from '@app/sanity/types';

const revalidate = shopConfig.revalidation?.product ?? 0;

export const getProductPropsByAlias = async (
  alias,
  context,
  serverSide = false
) => {
  const { params, preview = false } = context;

  const previewOptions = preview ? {} : undefined;

  const types = init(getClient(preview));

  const item = await types.product.getByAlias(
    alias,
    { locale: context.locale },
    previewOptions
  );

  if (item?._type === 'product') {
    const props = await types.product.resolveProps(item, { ...context });
    const page = props.currentPageProps;

    if (preview) {
      props.previewOptions = {
        studioUrl: `/desk/site;${item._type};${item._id}`,
        ...previewOptions,
        context,
      };
    }

    if (!isBlank(params.sku) && !page.skus.includes(params.sku)) {
      return { notFound: true };
    }

    return revalidate > 0 && !serverSide ? { props, revalidate } : { props };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticProps = async context => {
  const alias = context.params?.alias;
  return getProductPropsByAlias(alias, context);
};

export const getServerSideProps = async context => {
  const alias = context.params?.alias;
  return getProductPropsByAlias(alias, context, true);
};

export const getStaticPaths = async context => {
  if (revalidate > 0) {
    return {
      paths: localePaths([], context.locales),
      fallback: 'blocking',
    };
  } else {
    const types = init(getClient());
    const paths = await types.product.getStaticPaths(context);
    return { paths, fallback: false };
  }
};

export const prepareData = (item, _props, context) => {
  const types = init(getBrowserClient());
  return types.product.resolveProps(item, { ...context });
};

export const Product = props => {
  const { page } = usePreviewQueryProps(props, { fn: prepareData });
  return <ProductContainer item={page} />;
};
