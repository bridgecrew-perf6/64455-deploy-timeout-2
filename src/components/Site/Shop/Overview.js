import ProductList from '@shop/components/Site/Shop/ProductList';
import ShopSidebar from '@shop/components/Site/Shop/Sidebar';

const ShopOverview = props => {
  const { currentPageOptions = {} } = props;

  return (
    <section className="uk-section uk-section-shop">
      <div className="uk-container">
        <div data-uk-grid>
          <div className="content-area uk-width-expand">
            <div className="tw-element tw-shop">
              <ProductList products={currentPageOptions.products} />
            </div>
          </div>
          <ShopSidebar {...props} />
        </div>
      </div>
    </section>
  );
};

export default ShopOverview;
