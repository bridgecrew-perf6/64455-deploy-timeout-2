import { useRef, useMemo, useState } from 'react';

import { uniqueId } from '@foundation/lib/util';

import SiteOffcanvasFullscreen from '@shop/components/Site/Offcanvas/Fullscreen';

import RecipeView from '@shop/components/Site/Recipe/View';

const RecipeModal = ({ Main, bundle, ...props }) => {
  const [id] = useState(() => uniqueId('recipe-'));
  const offcanvas = `${id}-offcanvas`;

  const ref = useRef();

  const [recipeId, setRecipeId] = useState();

  const showRecipe = useMemo(
    () => id => {
      setRecipeId(id);
      UIkit.offcanvas(ref.current).show();
    },
    [setRecipeId]
  );

  const hideRecipe = useMemo(
    () => () => {
      UIkit.offcanvas(ref.current).hide();
    },
    []
  );

  const onHide = useMemo(() => () => setRecipeId(), [setRecipeId]);

  return (
    <>
      <Main {...props} showRecipe={showRecipe} hideRecipe={hideRecipe} />
      <SiteOffcanvasFullscreen id={offcanvas} offcanvas={ref} onHide={onHide}>
        <RecipeView id={recipeId} bundle={bundle} scrollspy />
      </SiteOffcanvasFullscreen>
    </>
  );
};

export default RecipeModal;
