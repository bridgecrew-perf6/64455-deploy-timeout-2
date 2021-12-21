import ProductMedia from '@shop/components/Product/Media';
// import ProductInfo from '@shop/components/Product/Info';

const ProductDetails = props => (
  <div>
    <div className="uk-grid-large" uk-grid="true">
      <ProductMedia {...props} />
      {/* <ProductInfo {...props} /> */}
    </div>
  </div>
);

export default ProductDetails;
