import { useTranslation } from '@foundation/next';

import { useAddress, useContact, withPageWithLayout } from '@shop/hooks';

import { PortableText } from '@shop/components/Sanity';

import { Region } from '@shop/components/Page/Regions';

import CommonMap from '@shop/components/Common/Map';

import SiteHeader from '@shop/components/Site/Header';

const TextElement = ({ title, subtitle, body = [] }) => (
  <div className="tw-element uk-text-center tw-heading uk-margin-large-bottom">
    {title && <h4>{title}</h4>}
    {subtitle && <h4>{subtitle}</h4>}
    <PortableText blocks={body} />
  </div>
);

const ContactPage = ({ page }) => {
  const [address, location] = useAddress();
  const contact = useContact();

  const { t } = useTranslation();

  return (
    <div className="main-container">
      <SiteHeader page={page} />

      <section className="uk-section uk-background-cover">
        <div className="uk-container">
          <div
            className="uk-child-width-expand@s uk-text-center"
            data-uk-grid
            data-uk-scrollspy="target: > div > .tw-box; cls:uk-animation-slide-bottom-medium; delay: 300;"
          >
            <div>
              <div className="tw-element tw-box custom-typography uk-margin-bottom">
                <i className="et-map-pin uk-border-circle layout-2" />
                <h4>{t('common:address.contact')}</h4>
                <p className="description">
                  {address('name')}
                  {address('title') && <br />}
                  {address('title')}
                </p>
              </div>
            </div>
            <div>
              <div className="tw-element tw-box custom-typography uk-margin-bottom">
                <i className="et-map-pin uk-border-circle layout-2" />
                <h4>{t('common:address.address')}</h4>
                <p className="description">{location.join(' - ')}</p>
              </div>
            </div>
            <div>
              <div
                className="
            tw-element tw-box
            custom-typography
            uk-margin-remove-top uk-margin-bottom
          "
              >
                <i className="et-phone uk-border-circle layout-2" />
                <h4>{t('common:address.phoneNumber')}</h4>
                <p className="description">
                  {contact('phone')}
                  <br />
                  {contact('mobile')}
                </p>
              </div>
            </div>
            <div>
              <div className="tw-element tw-box custom-typography uk-margin-remove-top">
                <i className="et-envelope uk-border-circle layout-2" />
                <h4>{t('common:address.email')}</h4>
                <p className="description">
                  <a
                    href={`mailto:${contact('email')}`}
                    className="uk-link-reset"
                  >
                    {contact('email')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="uk-section uk-background-cover uk-text-center"
        data-uk-parallax="bgy: -200"
        style={{
          backgroundColor: '#f7f7f7',
          backgroundImage:
            'url(/dev/assets/images/images-p/background-tea.jpg)',
        }}
      >
        <div className="uk-container">
          {page.subtitle && (
            <div className="tw-element tw-heading uk-text-center uk-dark">
              <h4>{page.subtitle}</h4>
            </div>
          )}

          <div
            className="
        tw-element tw-carousel-post
        uk-text-center
        style-2
        tw-posts
        uk-text-center
      "
          >
            <div
              className="uk-child-width-1-2@m"
              data-uk-scrollspy="target:.post-item; cls:uk-animation-slide-bottom-medium"
              data-uk-height-match=".post-item"
              data-uk-grid
            >
              <div className="post-item">
                <div className="post-content">
                  <div className="tw-meta">
                    <a href="#">Praktijk</a>
                  </div>
                  <h3 className="post-title">
                    <a href="#">Consultaties</a>
                  </h3>
                  <p>
                    dinsdag: 9u – 13u
                    <br />
                    woensdag: 8.30u – 13u en 14u – 16u <br />
                    donderdag: 16.30u – 20u <br />
                    vrijdag: 9u – 12.30u en 13.30u – 16u
                  </p>
                </div>
              </div>

              <div className="post-item">
                <div className="post-content">
                  <div className="tw-meta">
                    <a href="#">Online</a>
                  </div>
                  <h3 className="post-title">
                    <a href="#">Afspraak maken</a>
                  </h3>
                  <p>
                    Een afspraak maken <br />
                    kan eenvoudig en snel via:
                  </p>
                  <a
                    href="https://ambrosiapro.be/patient/agenda/voeding-in-balans"
                    className="uk-button uk-button-default uk-button-small uk-button-radius tw-hover"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="tw-hover-inner">
                      <span>Online agenda</span>
                      <i className="ion-ios-arrow-thin-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="uk-section uk-section-xlarge uk-padding-remove-top uk-margin-large-top uk-padding-remove-vertical uk-margin-bottom">
        <div className="uk-container">
          <Region region={page.regions.accessibility} Component={TextElement} />

          <div className="tw-element uk-text-center uk-margin-remove-top uk-padding-remove-vertical uk-margin-large-bottom">
            <CommonMap className="uk-height-large" zoom={12} grayscale />
          </div>
        </div>
      </section>
    </div>
  );
};

export default withPageWithLayout('contact', ContactPage);
