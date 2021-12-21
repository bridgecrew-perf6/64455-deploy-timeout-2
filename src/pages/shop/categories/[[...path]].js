import { Page, getStaticProps as getPageProps } from '@shop/http/nodes';

import { getStaticPaths as getCategoryPaths } from '@shop/http/categories';

export default Page;

export const getStaticProps = context => {
  return getPageProps({
    ...context,
    params: { path: ['shop'], categoryPath: context.params.path ?? [] },
  });
};

export const getStaticPaths = context => {
  return getCategoryPaths(context);
};
