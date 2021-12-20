import { isBlank } from '@foundation/lib/util';

import { withPageWithLayout } from '@shop/hooks';

import { Region } from '@shop/components/Page/Regions';

import { PortableText } from '@shop/components/Sanity';

import SiteHeader from '@shop/components/Site/Header';
import IntroSection from '@shop/components/Site/Page/Section/Intro';

const groups = [
  'afspraak',
  'shop',
  'biometriq',
  'suikerstop',
  'thermomix',
  'equilibre3',
];

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

const Group = ({ id, title, subtitle, body, entries = [] }) => {
  if (isBlank(entries)) return null;

  return (
    <div id={`faq-${id}`} className="tm-faq">
      {(title || subtitle || !isBlank(body)) && (
        <div className="tw-heading">
          <h4>{title}</h4>
          {subtitle && <h5 className="tw-sub-title">{subtitle}</h5>}
          <PortableText blocks={body} />
        </div>
      )}
      <div className="tw-element tw-accordion">
        <ul
          data-uk-accordion="collapsible: false;"
          data-uk-scrollspy="target: > li; cls:uk-animation-slide-bottom-medium; delay: 300;"
        >
          {entries.map(entry => (
            <li key={entry._key}>
              <Item {...entry} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FAQPage = ({ page }) => (
  <div className="main-container">
    <SiteHeader page={page} />
    <IntroSection page={page} />
    <section className="uk-section">
      <div className="uk-container uk-container-xsmall">
        <div className="uk-child-width-1-1 uk-grid-small" data-uk-grid>
          {groups.map(group => (
            <Region
              key={group}
              region={page.regions[group]}
              Component={Group}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default withPageWithLayout('faq', FAQPage);
