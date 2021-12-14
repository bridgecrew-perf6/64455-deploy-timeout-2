import { useMemo } from 'react';

import { Link, useCurrency } from '@foundation/next';

import { PortableText } from '@shop/components/Sanity';

import { withPageWithLayout, useProductUrl } from '@shop/hooks';
import { urlFor } from '@app/hooks/image';

import { Region } from '@shop/components/Page/Regions';

import SlideshowSection from '@shop/components/Site/Page/Section/Slideshow';

const TextBlock = ({ title, subtitle, body = [] }) => (
  <>
    {title && <h3>{title}</h3>}
    {subtitle && <h4>{subtitle}</h4>}
    <PortableText blocks={body} />
  </>
);

const Item = product => {
  const { name, category, image, pricing } = product;
  const c = useCurrency();
  const href = useProductUrl(product);
  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(420).height(280).auto('format').url() : null,
    [image]
  );

  return (
    <div className="post-item">
      <div
        className="entry-media"
        style={{
          backgroundColor: '#151515',
        }}
      >
        <Link
          href={href}
          className="tw-image-hover uk-cover-container"
          title={name}
          uk-ratio="3/2"
        >
          {imageUrl && <img src={imageUrl} uk-cover="true" />}
        </Link>
      </div>
      <div className="post-content">
        <div className="tw-meta">{category || '\u00A0'}</div>
        <h3 className="post-title uk-text-truncate">
          <Link href={href}>{name}</Link>
        </h3>
        <div className="tw-meta">
          <Link href={href}>{c.format(pricing?.price)}</Link>
        </div>
      </div>
    </div>
  );
};

const ProductsSlider = ({ products = [] }) => (
  <div
    uk-slider="true"
    className="uk-slider tw-element tw-carousel-post tw-posts"
  >
    <div className="uk-position-relative">
      <div className="uk-slider-container">
        <div
          className="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@s uk-grid"
          data-uk-scrollspy="target:.post-item; cls:uk-animation-slide-bottom-medium; delay: 350;"
          uk-grid="true"
        >
          {products.map(product => (
            <Item key={product._id} {...product} />
          ))}
        </div>
      </div>
      <div className="uk-visible@s">
        <a
          className="uk-position-center-left-out uk-position-small"
          href="#"
          uk-slidenav-previous="true"
          uk-slider-item="previous"
        />
        <a
          className="uk-position-center-right-out uk-position-small"
          href="#"
          uk-slidenav-next="true"
          uk-slider-item="next"
        />
      </div>
    </div>
    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
  </div>
);

const TestimonialsSlider = ({ title, entries = [] }) => {
  return (
    <div className="tw-carousel-testimonial uk-text-center">
      <div uk-slider="true">
        <div className="uk-position-relative">
          <div className="uk-slider-container">
            <ul className="uk-slider-items uk-child-width-1-1">
              {entries.map(({ _key, name, comment }) => (
                <li
                  key={_key}
                  className="uk-height-small uk-flex uk-flex-center uk-flex-middle"
                >
                  <div className="testimonial-item">
                    {title && <h3 className="testimonial-title">{title}</h3>}
                    <div className="testimonial-content">
                      <p>{comment}</p>
                    </div>
                    <div className="testimonial-author">
                      <span>{name}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="uk-visible@s">
              <a
                className="uk-position-center-left-out uk-position-small"
                href="#"
                uk-slidenav-previous="true"
                uk-slider-item="previous"
              />
              <a
                className="uk-position-center-right-out uk-position-small"
                href="#"
                uk-slidenav-next="true"
                uk-slider-item="next"
              />
            </div>
          </div>
        </div>
        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-large-top" />
      </div>
    </div>
  );
};

const HomePage = ({ page }) => (
  <div className="main-container">
    <Region region={page.regions.slideshow} Component={SlideshowSection} />
    <section className="uk-section uk-padding-remove-top uk-margin-top-minus">
      <div className="uk-container">
        <Region region={page.regions.block1} />
        <Region
          region={page.regions.block2}
          media="right"
          className="tw-tablet-margin"
        />
      </div>
    </section>
    <section className="uk-section uk-background-muted">
      <div className="uk-container">
        <Region
          region={page.regions.shop}
          Component={TextBlock}
          className="tw-element tw-heading uk-text-center"
        />
        <ProductsSlider products={page.products} />
        <div className="uk-margin-large-top uk-text-center">
          <Link
            href="/shop"
            className="
              uk-button
              uk-button-radius
              uk-button-silver
              uk-button-default
              uk-button-small
              tw-hover
            "
          >
            <span className="tw-hover-inner">
              <span>Bezoek de shop</span>
              <i className="ion-ios-arrow-thin-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
    <section
      className="uk-section uk-light"
      data-uk-parallax="bgy: -200"
      data-overlay="0.4"
      style={{
        backgroundColor: '#151515',
        backgroundImage:
          'url(/dev/assets/images/images-p/background-stone-yellow.jpg)',
      }}
    >
      <Region
        region={page.regions.testimonials}
        Component={TestimonialsSlider}
        className="uk-container"
      />
    </section>
  </div>
);

export default withPageWithLayout('home', HomePage);
