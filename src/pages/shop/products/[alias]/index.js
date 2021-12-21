import { getStaticProps, getStaticPaths } from '@shop/http/products';

const Product = props => {
  return <code>{JSON.stringify(props, null, 4)}</code>;
};

export default Product;
export { getStaticProps, getStaticPaths };
