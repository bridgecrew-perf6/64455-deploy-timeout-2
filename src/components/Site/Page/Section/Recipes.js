import { useRef, useMemo, useState } from 'react';

import { urlFor } from '@app/hooks/image';

import { PortableText } from '@shop/components/Sanity';

import SiteOffcanvasFullscreen from '@shop/components/Site/Offcanvas/Fullscreen';

import RecipeView from '@shop/components/Site/Recipe/View';

const Recipe = ({ _id, alias, title, image, showRecipe }) => {
  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(320).height(240).auto('format').url() : null,
    [image]
  );

  const onClick = useMemo(
    () => e => {
      e.preventDefault();
      showRecipe(_id);
    },
    [_id, showRecipe]
  );

  return (
    <div className="portfolio-item" data-id={`#${_id}`}>
      <div className="portfolio-media tw-image-hover">
        <img src={imageUrl} alt="TODO" />
        <a
          href={`#${alias?.current}`}
          className="portfolio-content uk-light"
          onClick={onClick}
        >
          <h3 className="portfolio-title">
            <span>{title}</span>
          </h3>
          <div className="tw-meta">
            <span>Recept</span>
          </div>
        </a>
      </div>
    </div>
  );
};

const RecipesSection = ({ id, title, body, background, references = [] }) => {
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

  const columns = useMemo(() => {
    if (references.length % 3 === 0) {
      return 'uk-child-width-1-2@s uk-child-width-1-3@m';
    } else if (references.length % 2 === 0) {
      return 'uk-child-width-1-2@s';
    } else {
      return 'uk-child-width-1-2@s uk-child-width-1-3@m';
    }
  }, [references]);

  return (
    <>
      <section
        className={`uk-section uk-position-relative uk-background-cover ${
          background ? 'uk-light' : 'uk-dark'
        }`}
        data-uk-parallax="bgy: -200"
        data-overlay="0.4"
        style={{
          backgroundColor: background ? '#151515' : '#ffffff',
          backgroundImage: background
            ? `url('/assets/images/${background}')`
            : null,
        }}
      >
        <div className="uk-container uk-container-small uk-text-center">
          <div className="tw-element tw-portfolio">
            <div className="tw-element tw-heading uk-text-center">
              <h3>{title}</h3>
              <PortableText blocks={body} />
            </div>
            <div
              className={`uk-grid-collapse with-bg uk-child-width-1-1 ${columns}`}
              data-uk-scrollspy="target: > .portfolio-item; cls:uk-animation-slide-top-small; delay: 300;"
              data-uk-grid
            >
              {references.map(entry => (
                <Recipe key={entry._id} {...entry} showRecipe={showRecipe} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <SiteOffcanvasFullscreen id={offcanvas} offcanvas={ref}>
        <RecipeView id={recipeId} />
      </SiteOffcanvasFullscreen>
    </>
  );
};

export default RecipesSection;
