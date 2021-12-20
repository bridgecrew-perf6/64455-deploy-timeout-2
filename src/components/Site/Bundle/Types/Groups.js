import SiteBundleRecipes from '@shop/components/Site/Bundle/Recipes';

import SiteBundleSection from '@shop/components/Site/Bundle/Section';

const Bundle = ({ bundle, onItemClick }) => {
  const { groups = [] } = bundle;

  return (
    <>
      {groups.map(group => (
        <SiteBundleSection
          key={group._key}
          section={group}
          onItemClick={onItemClick}
        >
          <SiteBundleRecipes items={group.items} onItemClick={onItemClick} />
        </SiteBundleSection>
      ))}
    </>
  );
};

export default Bundle;
