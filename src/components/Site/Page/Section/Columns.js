import { PortableText } from '@shop/components/Sanity';

import { Region } from '@shop/components/Page/Regions';

const Column = ({ title, subtitle, body }) => (
  <div className="uk-padding-xlarge" style={{ backgroundColor: '#f7f7f7' }}>
    <div className="uk-padding tw-element tw-box">
      <h4 className="uk-text-uppercase">{title}</h4>
      {subtitle && (
        <h5 className="uk-text-uppercase uk-text-xsmall uk-text-meta uk-margin-small-top">
          {subtitle}
        </h5>
      )}
      <PortableText blocks={body} />
    </div>
  </div>
);

const SitePageSectionColumns = ({ page }) => {
  return (
    <section className="uk-section uk-padding-remove-bottom uk-padding-remove-top">
      <div
        className="uk-child-width-1-2@m uk-grid-match uk-grid-collapse"
        data-uk-grid
        data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
      >
        <Region region={page.regions.column1} Component={Column} />
        <Region region={page.regions.column2} Component={Column} />
      </div>
    </section>
  );
};

export default SitePageSectionColumns;
