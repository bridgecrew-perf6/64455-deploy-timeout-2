import { isBlank } from '@atelierfabien/next-foundation/lib/util';

import ProductListItem from '@shop/components/Site/Shop/ProductList/Item';
import ProductListEmpty from '@shop/components/Site/Shop/ProductList/Empty';

const ShopProductList = ({ products = [] }) => {
  if (isBlank(products) || !Array.isArray(products)) {
    <ProductListEmpty />;
  } else {
    return (
      <div
        className="shop-container uk-child-width-1-2@xs uk-child-width-1-3@s uk-child-width-1-2@m uk-child-width-1-3@l"
        data-uk-scrollspy="target: > .shop-item; cls:uk-animation-slide-bottom-medium; delay: 300;"
        data-uk-grid
      >
        {products.map(product => (
          <div key={product._id}>
            <ProductListItem {...product} />
          </div>
        ))}
      </div>
    );
  }
};

export default ShopProductList;
