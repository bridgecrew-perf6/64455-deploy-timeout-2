import { useMemo } from 'react';

import { withPageWithLayout } from '@shop/hooks';

import { PortableText } from '@shop/components/Sanity';

import SitePageSectionSlideshow from '@shop/components/Site/Page/Section/Slideshow';

import { Link } from '@foundation/next';

import { useLink } from '@app/hooks';
import { urlFor } from '@app/hooks/image';

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

const BlockImage = ({ image }) => {
  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(600).height(500).auto('format').url() : null,
    [image]
  );

  return (
    <div
      className="uk-padding-xlarge uk-light uk-background-cover"
      style={{
        backgroundImage: imageUrl ? `url('${imageUrl}')` : null,
        minHeight: '400px',
      }}
    />
  );
};

const BlockContent = ({ title, subtitle, body, button }) => {
  const link = useLink(button ?? {});

  return (
    <div className="uk-padding-xlarge" style={{ backgroundColor: '#f7f7f7' }}>
      <div className="tw-element tw-box">
        {subtitle && <h4 className="tw-sub-title">{subtitle}</h4>}
        {title && <h2 className="uk-text-uppercase">{title}</h2>}
        <PortableText blocks={body} />

        {link.valid && (
          <Link
            href={link.href}
            className="
          uk-button
          uk-button-default
          uk-button-small
          uk-button-silver
          uk-button-radius
          tw-hover
        "
          >
            <span className="tw-hover-inner">
              <span>{link.label}</span>
              <i className="ion-ios-arrow-thin-right" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

const BlockRegion = ({ media = 'left', ...props }) => {
  return (
    <div
      className="uk-child-width-1-2@s uk-grid-match uk-grid-collapse"
      data-uk-grid
      data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
    >
      {media === 'left' && (
        <>
          <BlockImage {...props} />
          <BlockContent {...props} />
        </>
      )}
      {media === 'right' && (
        <>
          <BlockContent {...props} />
          <BlockImage {...props} />
        </>
      )}
    </div>
  );
};

const HomePage = ({ page }) => (
  <div className="main-container">
    <SitePageSectionSlideshow />

    <section className="uk-section uk-padding-remove-top uk-margin-top-minus">
      <div className="uk-container">
        {page.regions.block1 && <BlockRegion {...page.regions.block1} />}
        {page.regions.block2 && (
          <BlockRegion {...page.regions.block2} media="right" />
        )}

        {/* <div
          className="
            uk-child-width-1-2@s
            uk-margin-remove-top
            uk-grid-match
            uk-grid-collapse
          "
          data-uk-grid
          data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
        >
          <div
            className="uk-padding-xlarge tw-tablet-margin"
            style={{ backgroundColor: '#f7f7f7' }}
          >
            <div className="tw-element tw-box">
              <h4 className="tw-sub-title">Aanbod</h4>
              <h2 className="uk-text-uppercase">
                Waarvoor kan je bij Petra terecht?
              </h2>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra person inceptos himenaeos mauris in erat proin
                condimentum fermentum nunc etiam pharetra erat fermentu feugiat
                velit mauris.
              </p>
              <a
                href="aanbod.html"
                className="
                  uk-button
                  uk-button-default
                  uk-button-small
                  uk-button-silver
                  uk-button-radius
                  tw-hover
                "
              >
                <span className="tw-hover-inner">
                  <span>Meer info</span>
                  <i className="ion-ios-arrow-thin-right" />
                </span>
              </a>
            </div>
          </div>

          <div
            className="uk-padding-xlarge uk-light uk-background-cover"
            style={{
              backgroundImage:
                'url(/dev/assets/images/images-p/home-aanbod-meta2.jpg)',
              minHeight: '400px',
            }}
          />
        </div> */}
      </div>
    </section>

    <section className="uk-section uk-background-muted">
      <div className="uk-container">
        <div className="tw-element tw-heading uk-text-center">
          <h3>Shop</h3>
          <p>
            In de shop van 'Voeding in balans' kan je voortaan terecht voor
            lekkere receptenbundels voor een suikervrij ontbijt, een gezonde
            lunch en een heerlijk diner. Laat je verleiden door deze
            verrassende, kleurrijke recepten, boordevol vitamines en mineralen.
          </p>
        </div>

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

        <div className="uk-margin-large-top uk-text-center">
          <a
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
              {/* TODO */}
              <i className="ion-ios-arrow-thin-right" />
            </span>
          </a>
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
      <div className="uk-container">
        <div className="tw-carousel-testimonial uk-text-center">
          <div uk-slider="true">
            <div className="uk-position-relative">
              <div className="uk-slider-container">
                <ul className="uk-slider-items uk-child-width-1-1">
                  <li className="uk-height-small uk-flex uk-flex-center uk-flex-middle">
                    <div className="testimonial-item">
                      <h3 className="testimonial-title">Getuigenissen</h3>
                      <div className="testimonial-content">
                        <p>
                          Nog nooit zo'n leuk 'dieet' gedaan, die maand is
                          voorbijgevlogen! 
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <span>Annette B. / Suikerstop!</span>
                      </div>
                    </div>
                  </li>
                  <li className="uk-height-small uk-flex uk-flex-center uk-flex-middle">
                    <div className="testimonial-item">
                      <h3 className="testimonial-title">Getuigenissen</h3>
                      <div className="testimonial-content">
                        <p>
                          Petra haar aanpak is heel aanmoedigend, ondersteunend
                          en uiterst respectvol! 
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <span>Piet S. / Individuele begeleiding</span>
                      </div>
                    </div>
                  </li>
                  <li className="uk-height-small uk-flex uk-flex-center uk-flex-middle">
                    <div className="testimonial-item">
                      <h3 className="testimonial-title">Getuigenissen</h3>
                      <div className="testimonial-content">
                        <p>
                          G E W E L D I G! De documentatie, het traject, de tips
                          en community spirit zorgen ervoor dat het gemakkelijk
                          is en je een nieuwe levenswijze kan installeren.
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <span>Bertha / Suikerstop!</span>
                      </div>
                    </div>
                  </li>
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
      </div>
    </section>
  </div>
);

export default withPageWithLayout('home', HomePage);
