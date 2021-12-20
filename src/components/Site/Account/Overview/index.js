import { useMemo } from 'react';

import { groupBy } from '@foundation/lib/util';

import IntroSection from '@shop/components/Site/Page/Section/Intro';

import SiteAccountOverviewEmpty from '@shop/components/Site/Account/Overview/Empty';
import SiteAccountOverviewSection from '@shop/components/Site/Account/Overview/Section';

const sectionClassName = 'uk-padding-remove-vertical uk-margin-bottom';

const groups = [
  { type: 'recipe.bundle', title: 'Receptenbundels' },
  { type: 'recipe', title: 'Recepten' },
  { type: 'product', title: 'Producten' },
];

const SiteAccountOverview = ({ page, documents = [] }) => {
  const types = useMemo(() => groupBy(documents ?? [], '_type'), [documents]);
  const empty = documents.length === 0;

  return (
    <section className="uk-section">
      <div className="uk-container">
        <IntroSection
          page={page}
          className="tw-element tw-heading"
          sectionClassName={sectionClassName}
          showTitle
        />
        {empty && <SiteAccountOverviewEmpty page={page} />}
        {!empty &&
          groups.map(group => {
            const items = types[group.type];
            if (Array.isArray(items)) {
              return (
                <SiteAccountOverviewSection
                  key={group.type}
                  {...group}
                  items={items}
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

export default SiteAccountOverview;
