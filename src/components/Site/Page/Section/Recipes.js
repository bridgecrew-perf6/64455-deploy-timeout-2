import { useMemo } from 'react';

import { PortableText } from '@shop/components/Sanity';

import { urlFor } from '@app/hooks/image';

const Recipe = ({ _id, alias, title, image }) => {
  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(320).height(240).auto('format').url() : null,
    [image]
  );

  const onClick = useMemo(
    () => e => {
      e.preventDefault();
      console.log('CLICK!', _id);
    },
    [_id]
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

const SitePageSectionRecipes = ({
  title,
  body,
  backgroundImage,
  references = [],
}) => {
  return (
    <section
      className={`uk-section uk-position-relative uk-background-cover ${
        backgroundImage ? 'uk-light' : 'uk-dark'
      }`}
      data-uk-parallax="bgy: -200"
      data-overlay="0.4"
      style={{
        backgroundColor: backgroundImage ? '#151515' : '#ffffff',
        backgroundImage: backgroundImage
          ? `url('/dev/assets/images/images-p/${backgroundImage}')`
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
            className="uk-grid-collapse with-bg uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m"
            data-uk-scrollspy="target: > .portfolio-item; cls:uk-animation-slide-top-small; delay: 300;"
            data-uk-grid
          >
            {references
              .concat(
                references,
                references,
                references,
                references,
                references
              )
              .map(entry => (
                <Recipe key={entry._id} {...entry} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitePageSectionRecipes;
