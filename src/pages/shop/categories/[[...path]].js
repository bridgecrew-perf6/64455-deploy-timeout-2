import {
  default as Page,
  getStaticProps as getPageProps,
} from '@base/pages/[...path]';

import { getStaticPaths as getCategoryPaths } from '@base/pages/shop/categories/[[...path]]';

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
