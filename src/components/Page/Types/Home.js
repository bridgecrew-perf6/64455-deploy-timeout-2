import { Link } from '@foundation/next';

import { PortableText } from '@shop/components/Sanity';

import { withPageWithLayout } from '@shop/hooks';

import SitePageSectionSlideshow from '@shop/components/Site/Page/Section/Slideshow';

import { Region } from '@shop/components/Page/Regions';

const Item = ({ title, subtitle, meta, href, image }) => (
  <div className="post-item">
    <div className="entry-media">
      <a
        href={href}
        className="tw-image-hover uk-cover-container"
        title={title}
        uk-ratio="3/2"
      >
        <img
          src={`/dev/assets/images/images-p/${image}`}
          uk-cover="true"
          alt=""
        />
      </a>
    </div>
    <div className="post-content">
      <div className="tw-meta">{subtitle}</div>
      <h3 className="post-title uk-text-truncate">
        <a href={href}>{title}</a>
      </h3>
      <div className="tw-meta">
        <a href={href}>{meta}</a>
      </div>
    </div>
  </div>
);

const TextBlock = ({ title, subtitle, body = [] }) => (
  <>
    {title && <h3>{title}</h3>}
    {subtitle && <h4>{subtitle}</h4>}
    <PortableText blocks={body} />
  </>
);

const ProductsSlider = () => (
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
          <Item
            title="Suikerstop!"
            subtitle="Groepssessies"
            meta="Startdag 10 december 2021"
            href="#"
            image="home-new-suikerstop.jpg"
          />

          <Item
            title="Suikerstop 2.0!"
            subtitle="Groepssessies"
            meta="Startdag 5 januari 2022"
            href="#"
            image="home-new-suikerstop2.jpg"
          />

          <Item
            title="Vegetarische burgers"
            subtitle="Kookworkshop"
            meta="7 december 2021"
            href="#"
            image="home-new-burgers.jpg"
          />

          <Item
            title="Thermomix-demo"
            subtitle="Demonstratie"
            meta="11 december 2021"
            href="#"
            image="home-new-thermomix.jpg"
          />

          <Item
            title="Winterse soepen"
            subtitle="Kookworkshop"
            meta="29 december 2021"
            href="#"
            image="home-new-soepen2.jpg"
          />
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
    <SitePageSectionSlideshow />
    <section className="uk-section uk-padding-remove-top uk-margin-top-minus">
      <div className="uk-container">
        <Region region={page.regions.block1} />
        <Region region={page.regions.block2} media="right" />
      </div>
    </section>
    <section className="uk-section uk-background-muted">
      <div className="uk-container">
        <Region
          region={page.regions.shop}
          Component={TextBlock}
          className="tw-element tw-heading uk-text-center"
        />
        <ProductsSlider />
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
