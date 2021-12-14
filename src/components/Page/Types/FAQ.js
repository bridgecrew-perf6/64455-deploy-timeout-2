import { withPageWithLayout } from '@shop/hooks';

import { PortableText } from '@shop/components/Sanity';

import SiteHeader from '@shop/components/Site/Header';
import IntroSection from '@shop/components/Site/Page/Section/Intro';

const Item = ({ title, body }) => (
  <>
    <a className="uk-accordion-title" href="#">
      {title}
    </a>
    <div className="uk-accordion-content">
      <PortableText blocks={body} />
    </div>
  </>
);

const FAQPage = ({ page }) => (
  <div className="main-container">
    <SiteHeader page={page} />
    <IntroSection page={page} />

    <section className="uk-section">
      <div className="uk-container uk-container-xsmall">
        <div className="uk-child-width-expand uk-grid-small" data-uk-grid>
          {Array.isArray(page.regions?.faq?.entries) && (
            <div className="tw-element tw-accordion">
              <ul
                data-uk-accordion="collapsible: false;"
                data-uk-scrollspy="target: > li; cls:uk-animation-slide-bottom-medium; delay: 300;"
              >
                {page.regions.faq.entries.map(entry => (
                  <li key={entry._key}>
                    <Item {...entry} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  </div>
);

export default withPageWithLayout('faq', FAQPage);
