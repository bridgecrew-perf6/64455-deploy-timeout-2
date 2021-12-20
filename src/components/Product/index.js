import ProductDetails from '@shop/components/Product/Details';

import Breadcrumbs from '@shop/components/Site/Header/Breadcrumbs';

const ProductPage = props => {
  return (
    <div className="main-container">
      <section className="uk-section">
        <div className="uk-container">
          <Breadcrumbs />
          <div className="uk-grid-medium uk-child-width-1-1" uk-grid="true">
            <ProductDetails {...props} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
