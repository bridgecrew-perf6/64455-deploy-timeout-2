import { useMemo } from 'react';

import { Link } from '@foundation/next';

import { isBlank } from '@foundation/lib/util';

import { useLink } from '@app/hooks';
import { urlFor } from '@app/hooks/image';

const Item = image => {
  const { title, subtitle, button } = image;
  const link = useLink(button ?? {});

  const imageUrl = useMemo(
    () => (image ? urlFor(image).width(1600).auto('format').url() : null),
    [image]
  );

  return (
    <div
      className="uk-height-1-1 uk-background-cover uk-light"
      data-src={imageUrl}
      data-uk-img={imageUrl}
      data-uk-parallax="bgy: -200"
      data-overlay="0.4"
    >
      <div className="uk-position-center uk-position-small uk-text-center">
        <div className="slider-content">
          <div
            className="tw-element uk-text-center tw-heading full"
            data-uk-scrollspy="target: > *; cls:uk-animation-slide-bottom-medium; delay: 400;"
          >
            {subtitle && <h4>{subtitle}</h4>}
            {title && <h1>{title}</h1>}
            {link.valid && (
              <Link
                href={link.href}
                className="uk-button uk-button-default uk-button-small uk-button-radius tw-hover"
              >
                <span className="tw-hover-inner">
                  <span>{link.label}</span>
                  <i className="ion-ios-arrow-thin-right" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SlideshowSection = ({ images = [], height = '500px' }) => {
  if (isBlank(images)) return null;

  return (
    <section className="tw-slider uk-light tm-section-slideshow">
      <div
        className="uk-position-relative uk-light"
        tabIndex="-1"
        uk-slideshow="animation: slide; ratio: false;"
        style={{ minHeight: height }}
      >
        <ul
          className="uk-slideshow-items"
          style={{ width: '100%', minHeight: height, overflow: 'visible' }}
        >
          {images.map(image => (
            <li key={image._key} style={{ minHeight: height }}>
              <Item {...image} />
            </li>
          ))}
        </ul>
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous="true"
          uk-slideshow-item="previous"
        />
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next="true"
          uk-slideshow-item="next"
        />
      </div>
    </section>
  );
};

export default SlideshowSection;
