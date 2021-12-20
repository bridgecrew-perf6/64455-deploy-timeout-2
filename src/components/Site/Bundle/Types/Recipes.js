import BundleRecipes from '@shop/components/Site/Bundle/Recipes';

const Bundle = ({ bundle, onItemClick }) => {
  return (
    <BundleRecipes items={bundle.recipes ?? []} onItemClick={onItemClick} />
  );
};

export default Bundle;
