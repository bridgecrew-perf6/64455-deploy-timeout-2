import { useMemo } from 'react';

import { urlFor } from '@app/hooks/image';

import { PortableText } from '@shop/components/Sanity';

const Recipe = ({ _id, alias, title, image, onItemClick }) => {
  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(320).height(240).auto('format').url() : null,
    [image]
  );

  const onClick = useMemo(
    () => e => {
      e.preventDefault();
      if (alias?.current) onItemClick(alias?.current);
    },
    [alias, onItemClick]
  );

  return (
    <div className="portfolio-item" data-id={`#${_id}`}>
      <div className="portfolio-media tw-image-hover">
        <a
          href={`#${alias?.current}`}
          className="tw-image-hover uk-cover-container"
          onClick={onClick}
          uk-ratio="3/2"
        >
          {imageUrl && <img src={imageUrl} alt={title} uk-cover="true" />}
        </a>
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

const RecipesSection = ({
  title,
  body,
  background,
  onItemClick,
  references = [],
}) => {
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
    <section
      className={`uk-section uk-position-relative uk-background-cover tm-section-recipes ${
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
            className={`uk-grid-collapse uk-child-width-1-1 ${columns}`}
            data-uk-scrollspy="target: > .portfolio-item; cls:uk-animation-slide-top-small; delay: 300;"
            data-uk-grid
          >
            {references.map(entry => (
              <Recipe key={entry._id} {...entry} onItemClick={onItemClick} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
