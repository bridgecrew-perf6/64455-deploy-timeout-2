import ShopProductSidebarSearch from '@shop/components/Site/Shop/Sidebar/Search';
import ShopSidebarCategories from '@shop/components/Site/Shop/Sidebar/Categories';
import ShopSidebarFeatured from '@shop/components/Site/Shop/Sidebar/Featured';

const ShopSidebar = ({ page }) => {
  return (
    <div className="sidebar-area">
      <ShopProductSidebarSearch className="uk-hidden@m tm-search-wide" />
      <div className="sidebar-inner">
        <ShopProductSidebarSearch className="uk-visible@m" />
        <ShopSidebarCategories
          categories={page.regions.categories?.references}
        />
        <ShopSidebarFeatured products={page.regions.featured?.references} />
      </div>
    </div>
  );
};

export default ShopSidebar;
