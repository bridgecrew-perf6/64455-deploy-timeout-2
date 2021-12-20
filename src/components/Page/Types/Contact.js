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
                <i className="et-profile-female uk-border-circle layout-2" />
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
              <div className="tw-element tw-box custom-typography uk-margin-remove-top uk-margin-bottom">
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
        className="uk-section uk-background-cover"
        data-uk-parallax="bgy: -200"
        style={{
          backgroundColor: '#f7f7f7',
          backgroundImage: 'url(/assets/images/background-tea.jpg)',
        }}
      >
        <div className="uk-container">
          {page.subtitle && (
            <div className="tw-element tw-heading uk-text-center uk-dark">
              <h4>{page.subtitle}</h4>
            </div>
          )}
          <div className="tw-element tw-carousel-post style-2 tw-posts tm-consults">
            <div
              className="uk-child-width-1-2@m"
              data-uk-scrollspy="target:.post-item; cls:uk-animation-slide-bottom-medium"
              data-uk-height-match=".post-content"
              data-uk-grid
            >
              <div className="post-item">
                <div className="post-content">
                  <div className="uk-text-center uk-margin-bottom">
                    <div className="tw-meta">Praktijk</div>
                    <h3 className="post-title">Consultaties</h3>
                  </div>
                  <ul className="uk-list uk-text-muted uk-text-small">
                    <li>
                      <div className="uk-grid-small uk-grid" uk-grid="true">
                        <div
                          className="uk-width-expand uk-leader uk-hidden@s"
                          uk-leader="true"
                        >
                          Di t/m Vr
                        </div>

                        <div
                          className="uk-width-expand uk-leader uk-visible@s"
                          uk-leader="true"
                        >
                          Dinsdag t/m Vrijdag
                        </div>
                        <div>09:00 - 18:00u</div>
                      </div>
                    </li>
                    <li>
                      <div className="uk-grid-small uk-grid" uk-grid="true">
                        <div
                          className="uk-width-expand uk-leader uk-hidden@s"
                          uk-leader="true"
                        >
                          Za (om de 2 wk.)
                        </div>
                        <div
                          className="uk-width-expand uk-leader uk-visible@s"
                          uk-leader="true"
                        >
                          Zaterdag (om de 2 weken)
                        </div>
                        <div>10:00 - 13:00u</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="post-item">
                <div className="post-content uk-text-center">
                  <div className="tw-meta">Online</div>
                  <h3 className="post-title">Afspraak maken</h3>
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
          <Region
            region={page.regions?.accessibility}
            Component={TextElement}
          />

          <div className="tw-element uk-text-center uk-margin-remove-top uk-padding-remove-vertical uk-margin-large-bottom">
            <CommonMap className="uk-height-large" zoom={12} grayscale />
          </div>
        </div>
      </section>
    </div>
  );
};

export default withPageWithLayout('contact', ContactPage);
