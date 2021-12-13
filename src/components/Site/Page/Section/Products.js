import { useMemo } from 'react';

import { Link } from '@foundation/next';

import { isBlank } from '@atelierfabien/next-foundation/lib/util';

import { useProductUrl } from '@shop/hooks';
import { urlFor } from '@app/hooks/image';

import { PortableText } from '@shop/components/Sanity';

const ProductItem = product => {
  const { name, category, image } = product;
  const href = useProductUrl(product);
  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(420).height(280).auto('format').url() : null,
    [image]
  );

  return (
    <div>
      <div className="event-item" data-uk-grid>
        <div className="entry-media uk-width-1-2">
          <Link
            href={href}
            className="tw-image-hover uk-cover-container"
            title={name}
            uk-ratio="1/1"
          >
            <img src={imageUrl} uk-cover="true" />
          </Link>
        </div>
        <div className="event-content uk-width-expand">
          <div className="uk-margin-right">
            <div className="tw-meta">{category}</div>
            <h3 className="event-title uk-text-uppercase uk-text-truncate">
              <Link href={href}>{name}</Link>
            </h3>
            <p>
              TODO Vier heerlijke en eenvoudige hapjes boordevol smaak om mee
              uit te pakken op elke feesttafel.
            </p>
            <Link
              href={href}
              className="uk-button uk-button-default uk-button-small uk-button-radius uk-margin-small-top tw-hover"
            >
              <span className="tw-hover-inner">
                <span>Meer info</span>
                <i className="ion-ios-arrow-thin-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const SitePageSectionProducts = ({
  title,
  subtitle,
  body,
  references = [],
}) => {
  references = [].concat(references, references); // TODO

  if (isBlank(references)) return null;

  const containerClass =
    references.length === 1 ? 'uk-flex uk-flex-center' : '';
  const gridClass =
    references.length === 1 ? 'uk-width-auto' : 'uk-child-width-1-2';

  return (
    <section className="uk-section uk-section-muted">
      <div className="uk-container">
        <div className="tw-element tw-heading uk-text-center">
          <h4>{title}</h4>
          {subtitle && <h5 className="tw-sub-title">{subtitle}</h5>}
          <PortableText blocks={body} />
        </div>
        <div
          className={`tw-element tw-carousel-event tw-posts ${containerClass}`}
        >
          <div
            className={gridClass}
            data-uk-scrollspy="target:.post-item; cls:uk-animation-slide-bottom-medium; delay: 350;"
            data-uk-height-match=".event-content"
            data-uk-grid
          >
            {references.map(item => (
              <ProductItem key={item._key} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitePageSectionProducts;
