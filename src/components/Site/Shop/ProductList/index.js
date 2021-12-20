import { isBlank } from '@foundation/lib/util';

import ProductListItem from '@shop/components/Site/Shop/ProductList/Item';
import ProductListEmpty from '@shop/components/Site/Shop/ProductList/Empty';

const ShopProductList = ({ products = [] }) => {
  if (isBlank(products) || !Array.isArray(products)) {
    return <ProductListEmpty />;
  } else {
    return (
      <div
        className="shop-container uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m"
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
