const ShopProductSidebarSearch = ({ className }) => {
  return (
    <div className={`widget-item ${className}`}>
      <aside className="widget uk-padding-remove-top uk-margin-remove-top">
        <div className="call-btn" data-uk-grid>
          <div className="uk-inline uk-width-1-1">
            <a
              className="uk-form-icon uk-form-icon-flip"
              onClick={e => e.preventDefault()}
            >
              <i className="ion-android-search" />
            </a>
            <input type="text" placeholder="Zoek" className="uk-input" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ShopProductSidebarSearch;
