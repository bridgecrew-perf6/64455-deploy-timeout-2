import { Page, getPagePropsByPath } from '@shop/http/nodes';

export const getServerSideProps = async context => {
  const props = await getPagePropsByPath('account', context);
  return props;
};

// Page.authentication = true; // TODO

export default Page;
