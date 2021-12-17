import { PortableText } from '@shop/components/Sanity';

import { Region } from '@shop/components/Page/Regions';

const ColumnDefault = ({ title, subtitle, body }) => (
  <div>
    {title && <h4 className="uk-text-uppercase">{title}</h4>}
    {subtitle && (
      <h5 className="uk-text-uppercase uk-text-xsmall uk-text-meta uk-margin-small-top">
        {subtitle}
      </h5>
    )}
    <div className="tw-element tw-box">
      <PortableText blocks={body} />
    </div>
  </div>
);

const ColumnsDefault = ({ page }) => {
  return (
    <section className="uk-section tm-section-columns">
      <div className="uk-container uk-container-small">
        <div
          className="uk-child-width-1-1 uk-child-width-1-2@m"
          data-uk-scrollspy="target: > div; cls:uk-animation-slide-top-medium; delay: 400;"
          data-uk-grid
        >
          <Region region={page.regions.column1} Component={ColumnDefault} />
          <Region region={page.regions.column2} Component={ColumnDefault} />
        </div>
      </div>
    </section>
  );
};

const ColumnAlt = ({ title, subtitle, body }) => (
  <div className="uk-padding-xlarge" style={{ backgroundColor: '#f7f7f7' }}>
    <div className="uk-padding tw-element tw-box">
      {title && <h4 className="uk-text-uppercase">{title}</h4>}
      {subtitle && (
        <h5 className="uk-text-uppercase uk-text-xsmall uk-text-meta uk-margin-small-top">
          {subtitle}
        </h5>
      )}
      <PortableText blocks={body} />
    </div>
  </div>
);

const ColumnsAlt = ({ page }) => {
  return (
    <section className="uk-section tm-section-columns">
      <div
        className="uk-child-width-1-2@m uk-grid-match uk-grid-collapse"
        data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
        data-uk-grid
      >
        <Region region={page.regions.column1} Component={ColumnAlt} />
        <Region region={page.regions.column2} Component={ColumnAlt} />
      </div>
    </section>
  );
};

const ColumnsSection = ({ type, page }) => {
  if (page.regions.column1 && page.regions.column2) {
    if (type === 'alt') {
      return <ColumnsAlt page={page} />;
    } else {
      return <ColumnsDefault page={page} />;
    }
  } else {
    return null;
  }
};

export default ColumnsSection;
