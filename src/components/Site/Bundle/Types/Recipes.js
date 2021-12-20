import SiteBundleRecipes from '@shop/components/Site/Bundle/Recipes';

const Bundle = ({ bundle, onItemClick }) => {
  return (
    <SiteBundleRecipes items={bundle.recipes ?? []} onItemClick={onItemClick} />
  );
};

export default Bundle;
