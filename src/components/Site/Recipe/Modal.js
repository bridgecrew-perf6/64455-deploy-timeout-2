import { useRef, useMemo, useState, useEffect } from 'react';

import { useUIkit, useMounted } from '@foundation/next';

import { isBlank, uniqueId } from '@foundation/lib/util';

import SiteOffcanvasFullscreen from '@shop/components/Site/Offcanvas/Fullscreen';

import RecipeView from '@shop/components/Site/Recipe/View';

const RecipeModal = ({ Main, prefix = 'recipe-', ...props }) => {
  const [id] = useState(() => uniqueId(`modal-${prefix}`));
  const offcanvas = `${id}-offcanvas`;

  const isMounted = useMounted();

  const isReady = useUIkit();

  const ref = useRef();

  const [recipeId, setRecipeId] = useState();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isBlank(recipeId) && isActive) {
      window.history.pushState(null, null, ' ');
      if (isMounted) setIsActive(false);
    } else if (!isBlank(recipeId)) {
      window.location.hash = `#${prefix}${recipeId}`;
    }
  }, [isMounted, recipeId, isActive, prefix]);

  useEffect(() => {
    if (isActive && !isBlank(recipeId) && isReady) {
      UIkit.offcanvas(ref.current).show();
    }
  }, [recipeId, isActive, isReady]);

  const showRecipe = useMemo(
    () => id => {
      setIsActive(true);
      setRecipeId(id);
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
      <SiteOffcanvasFullscreen
        id={offcanvas}
        type="recipe"
        offcanvas={ref}
        onHide={onHide}
      >
        <RecipeView id={recipeId} scrollspy />
      </SiteOffcanvasFullscreen>
    </>
  );
};

export default RecipeModal;
