import { useMemo } from 'react';

import { groupBy } from '@foundation/lib/util';

import { useHash } from '@shop/hooks/site';

import IntroSection from '@shop/components/Site/Page/Section/Intro';

import AccountOverviewEmpty from '@shop/components/Site/Account/Overview/Empty';
import AccountOverviewSection from '@shop/components/Site/Account/Overview/Section';

import RecipeModal from '@shop/components/Site/Recipe/Modal';

const sectionClassName = 'uk-padding-remove-vertical uk-margin-bottom';

const groups = [
  { type: 'recipe.bundle', title: 'Receptenbundels' },
  { type: 'recipe', title: 'Recepten' },
  { type: 'product', title: 'Producten' },
];

const Overview = ({ page, showRecipe, documents = [] }) => {
  const types = useMemo(() => groupBy(documents ?? [], '_type'), [documents]);
  const empty = documents.length === 0;

  useHash('recipe-', showRecipe);

  return (
    <section className="uk-section">
      <div className="uk-container">
        <IntroSection
          page={page}
          className="tw-element tw-heading"
          sectionClassName={sectionClassName}
          showTitle
        />
        {empty && <AccountOverviewEmpty page={page} />}
        {!empty &&
          groups.map(group => {
            const items = types[group.type];
            if (Array.isArray(items)) {
              return (
                <AccountOverviewSection
                  key={group.type}
                  {...group}
                  items={items}
                  onItemClick={showRecipe}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
    </section>
  );
};

const AccountOverview = props => {
  return <RecipeModal Main={Overview} {...props} />;
};

export default AccountOverview;
