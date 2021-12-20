import BundleRecipes from '@shop/components/Site/Bundle/Recipes';

import BundleSection from '@shop/components/Site/Bundle/Section';

const Bundle = ({ bundle, onItemClick }) => {
  const { groups = [] } = bundle;

  return (
    <>
      {groups.map(group => (
        <BundleSection
          key={group._key}
          section={group}
          onItemClick={onItemClick}
        >
          <BundleRecipes items={group.items} onItemClick={onItemClick} />
        </BundleSection>
      ))}
    </>
  );
};

export default Bundle;
