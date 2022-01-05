import { useMemo } from 'react';

import { formatDate, isBlank } from '@foundation/lib/util';

import { useHash } from '@shop/hooks/site';

import RecipeModal from '@shop/components/Site/Recipe/Modal';

import IntroSection from '@shop/components/Site/Page/Section/Intro';
import AccountOverviewEmpty from '@shop/components/Site/Account/Overview/Empty';

import types from '@shop/components/Site/Bundle/Types';

const Intro = ({ page, files = [] }) => {
  if (files.length > 0) {
    return (
      <IntroSection page={page} className="tw-element tw-heading">
        <h4 className="uk-text-uppercase">Downloads</h4>
        <ul className="uk-list uk-list-hyphen">
          {files.map(file => (
            <li key={file._key}>
              <a href={file.asset?.url} target="_blank" rel="noreferrer">
                {file.label ?? file.asset?.originalFilename}
              </a>
            </li>
          ))}
        </ul>
      </IntroSection>
    );
  } else {
    return <IntroSection page={page} />;
  }
};

const Main = props => {
  const {
    type,
    subtitle,
    description,
    date,
    showRecipe,
    recipeIds = [],
    files = [],
  } = props;
  const Component = useMemo(() => types.get(type), [type]);

  useHash('recipe-', showRecipe);

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

  if (date) {
    const formatted = formatDate(date);
    if (!isBlank(formatted)) {
      intro.subtitle = `${intro.subtitle} / ${formatted}`;
    }
  }

  if (count > 0 && Component) {
    return (
      <div
        className="tm-account-section uk-margin-large-bottom"
        data-documents-section={type}
      >
        <Intro page={intro} files={files} />
        <section className="uk-section uk-container">
          <Component bundle={props} onItemClick={showRecipe} />
        </section>
      </div>
    );
  } else {
    return (
      <section className="uk-section">
        <div className="tm-account-section uk-margin-large-bottom uk-text-center">
          <AccountOverviewEmpty />
        </div>
      </section>
    );
  }
};

const BundleOverview = ({ page }) => {
  return <RecipeModal Main={Main} {...page} />;
};

export default BundleOverview;
