import SiteAccountOverviewItem from '@shop/components/Site/Account/Overview/Item';

import RecipeModal from '@shop/components/Site/Recipe/Modal';

const Section = section => {
  const { type, title, items = [] } = section;
  return (
    <div
      className="tm-account-section uk-margin-large-bottom"
      data-documents-section={type}
    >
      <h3 className="uk-heading-divider uk-margin-bottom">{title}</h3>
      <div
        className="uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid uk-height-small-min"
        data-uk-grid
      >
        {items.map(item => (
          <SiteAccountOverviewItem
            key={item._id}
            {...item}
            onItemClick={section.showRecipe}
          />
        ))}
      </div>
    </div>
  );
};

const SiteAccountOverviewSection = props => {
  const { type, items = [] } = props;
  if (items.length > 0) {
    if (type === 'recipe') {
      return <RecipeModal Main={Section} {...props} />;
    } else {
      return <Section {...props} />;
    }
  } else {
    return null;
  }
};

export default SiteAccountOverviewSection;
