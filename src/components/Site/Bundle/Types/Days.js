import { useMemo } from 'react';

import { pick, isBlank } from '@foundation/lib/util';

import SiteBundleRecipes from '@shop/components/Site/Bundle/Recipes';

import SiteBundleSection from '@shop/components/Site/Bundle/Section';

const mealTypes = new Map();

mealTypes.set('breakfast', { label: 'Ontbijt' });
mealTypes.set('lunch', { label: 'Lunch' });
mealTypes.set('starter', { label: 'Voorgerecht' });
mealTypes.set('dinner', { label: 'Diner' });
mealTypes.set('side', { label: 'Bijgerecht' });
mealTypes.set('desert', { label: 'Desert' });
mealTypes.set('snack', { label: 'Tussendoortje' });

const Bundle = ({ bundle, onItemClick }) => {
  const { days = [] } = bundle;

  const sections = useMemo(() => {
    return days.map(day => {
      const section = pick(day, '_key', '_type', 'number');
      section.type = bundle.type;
      section.title = `Dag ${day.number}`;
      section.items = Array.from(mealTypes).reduce(
        (memo, [type, { label }]) => {
          const meal = day[type];
          if (!isBlank(meal)) {
            meal.type = type;
            meal.category = label;
            memo.push(meal);
          }
          return memo;
        },
        []
      );
      return section;
    });
  }, [days, bundle.type]);

  return (
    <>
      {sections.map(section => (
        <SiteBundleSection
          key={section._key}
          section={section}
          onItemClick={onItemClick}
        >
          <SiteBundleRecipes items={section.items} onItemClick={onItemClick} />
        </SiteBundleSection>
      ))}
    </>
  );
};

export default Bundle;
