import { withPageWithLayout } from '@shop/hooks';

const ProductPage = ({ children }) => {
  return <div>{children}</div>;
};

export default withPageWithLayout('product', ProductPage);
