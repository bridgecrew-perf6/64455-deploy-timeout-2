import { withPageWithLayout } from '@shop/hooks';

import SiteHeader from '@shop/components/Site/Header';

const FAQPage = () => (
  <div className="main-container">
    <SiteHeader title="Veelgestelde vragen" image="faq-multi.jpg" />

    <section className="uk-section">
      <div className="uk-container uk-container-xsmall">
        <div className="uk-child-width-expand uk-grid-small" data-uk-grid>
          <div className="uk-width-1-1">
            <div className="tw-element tw-accordion">
              <ul
                data-uk-accordion="collapsible: false;"
                data-uk-scrollspy="target: > li; cls:uk-animation-slide-bottom-medium; delay: 300;"
              >
                <li>
                  <h3 className="uk-accordion-title">
                    Wat zijn de betalingsmogelijkheden?
                  </h3>
                  <div className="uk-accordion-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
                <li>
                  <h3 className="uk-accordion-title">
                    Hoe verloopt de betaling?
                  </h3>
                  <div className="uk-accordion-content">
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor reprehenderit.
                    </p>
                  </div>
                </li>
                <li>
                  <h3 className="uk-accordion-title">
                    Hoe lang duurt het voordat mijn betaling is verwerkt?
                  </h3>
                  <div className="uk-accordion-content">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat proident.
                    </p>
                  </div>
                </li>
                <li>
                  <h3 className="uk-accordion-title">
                    Hoeveel dagen op voorhand moet ik een kookworkshop
                    annuleren?
                  </h3>
                  <div className="uk-accordion-content">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat proident.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default withPageWithLayout('faq', FAQPage);
