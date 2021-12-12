import { withPageWithLayout } from '@shop/hooks';

import { Region } from '@shop/components/Page/Regions';

import { PortableText } from '@shop/components/Sanity';

import SiteHeader from '@shop/components/Site/Header';
import SitePageSectionIntro from '@shop/components/Site/Page/Section/Intro';
import SitePageSectionColumns from '@shop/components/Site/Page/Section/Columns';

const TextBlock = ({ title, subtitle, body = [] }) => (
  <>
    {title && <h3>{title}</h3>}
    {subtitle && <h4>{subtitle}</h4>}
    <PortableText blocks={body} />
  </>
);

const AboutPage = ({ page }) => (
  <div className="main-container">
    <SiteHeader page={page} />
    <SitePageSectionIntro page={page} />
    <SitePageSectionColumns page={page} />

    <section
      className="uk-section uk-background-cover"
      data-uk-parallax="bgy: -200"
      data-overlay="0.4"
      style={{
        backgroundColor: '#151515',
        backgroundImage:
          'url(/dev/assets/images/images-p/over-petra2-multi.jpg)',
      }}
    >
      <div className="uk-container">
        <div className="tw-element tw-heading uk-text-center uk-light">
          <Region region={page.regions.activities} Component={TextBlock} />
        </div>

        <div className="tw-element tw-carousel-post uk-text-center style-2 tw-posts">
          <div
            className="owl-carousel owl-theme"
            data-uk-scrollspy="target:.post-item; cls:uk-animation-slide-bottom-medium"
          >
            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Privé-raadpleging</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Afspraak</a>
                </h3>
                <p>
                  Individuele begeleiding werkt het best en garandeert het
                  grootste succes op lange termijn.
                </p>
                <a
                  href="afspraak.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
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

            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Groepssessies</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Kookworkshops</a>
                </h3>
                <p>
                  De ideale gelegenheid om kennis te maken met de gezonde keuken
                  waar puur en seizoensgebonden primeert.
                </p>
                <a
                  href="kookworkshop.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
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

            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Vervangmaaltijden</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Equilibre3-mentor</a>
                </h3>
                <p>
                  Equilibre3 biedt je een dieet op maat aan met verantwoord
                  lekkere vervangmaaltijden.
                </p>
                <a
                  href="equilibre3.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
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

            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Groepssessies</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Suikerstop!</a>
                </h3>
                <p>
                  Tijdens informatieve groepssessies informeer ik je over de
                  effecten van gezonde voeding op je lichaam.
                </p>
                <a
                  href="suikerstop.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
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

            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Demonstratie</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Thermomix-demo</a>
                </h3>
                <p>
                  Beleef de Thermomix ervaring bij u thuis, bij vrienden of in
                  de kookstudio van 'Voeding in balans'.
                </p>
                <a
                  href="thermomix.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
                      uk-button-radius
                      tw-hover
                    "
                >
                  <span className="tw-hover-inner">
                    <span>Lees meer</span>
                    <i className="ion-ios-arrow-thin-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default withPageWithLayout('about', AboutPage);
