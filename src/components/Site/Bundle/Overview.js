import { useMemo } from 'react';

import { isBlank } from '@foundation/lib/util';

import RecipeModal from '@shop/components/Site/Recipe/Modal';

import IntroSection from '@shop/components/Site/Page/Section/Intro';
import SiteAccountOverviewEmpty from '@shop/components/Site/Account/Overview/Empty';

import types from '@shop/components/Site/Bundle/Types';

const Main = props => {
  const { type, subtitle, description, recipeIds = [], showRecipe } = props;
  const Component = useMemo(() => types.get(type), [type]);

  const count = recipeIds?.length ?? 0;

  const intro = {
    subtitle: count === 1 ? `Één recept` : `${count} recepten`,
    content: { body: description },
  };

  if (!isBlank(subtitle)) {
    intro.subtitle = subtitle; // custom
  } else if (type === 'days') {
    intro.subtitle = `Dagprogramma / ${intro.subtitle}`;
  }

  if (count > 0 && Component) {
    return (
      <div
        className="tm-account-section uk-margin-large-bottom"
        data-documents-section={type}
      >
        <IntroSection page={intro} />
        <section className="uk-section uk-container">
          <Component bundle={props} onItemClick={showRecipe} />
        </section>
      </div>
    );
  } else {
    return (
      <section className="uk-section">
        <div className="tm-account-section uk-margin-large-bottom uk-text-center">
          <SiteAccountOverviewEmpty />
        </div>
      </section>
    );
  }
};

const SiteBundleOverview = ({ page }) => {
  return <RecipeModal Main={Main} {...page} bundle={page._id} />;
};

export default SiteBundleOverview;
