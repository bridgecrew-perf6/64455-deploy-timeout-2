import AccountOverviewItem from '@shop/components/Site/Account/Overview/Item';

const BundleRecipes = ({ items = [], onItemClick }) => {
  return (
    <div
      className="uk-position-relative"
      tabIndex="-1"
      data-uk-slider="finite: true"
    >
      <div className="uk-slider-container uk-light">
        <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
          {items.map(item => (
            <li key={item._id}>
              <AccountOverviewItem {...item} onItemClick={onItemClick} />
            </li>
          ))}
        </ul>
      </div>
      <div className="uk-visible@m uk-background-primary">
        <a
          className="uk-position-center-left-out uk-position-small"
          href="#"
          data-uk-slidenav-previous
          data-uk-slider-item="previous"
        />
        <a
          className="uk-position-center-right-out uk-position-small"
          href="#"
          data-uk-slidenav-next
          data-uk-slider-item="next"
        />
      </div>
      <div className="uk-margin-medium">
        <ul className="uk-slider-nav uk-dotnav uk-flex-center" />
      </div>
    </div>
  );
};

export default BundleRecipes;
