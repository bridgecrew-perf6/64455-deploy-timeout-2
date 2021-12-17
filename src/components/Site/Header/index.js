import { useMemo } from 'react';

import { urlFor } from '@app/hooks/image';

import SiteBreadcrumbs from '@shop/components/Site/Header/Breadcrumbs';

const SiteHeader = ({ page = {} }) => {
  const { title, cover, images = [] } = page;

  const imageUrl = useMemo(() => {
    const image = images[0] ?? cover;
    return image ? urlFor(image).width(1600).auto('format').url() : null;
  }, [cover, images]);

  return (
    <section
      className="uk-section uk-text-center uk-flex uk-flex-middle uk-flex-center uk-light uk-background-cover"
      data-overlay="0.4"
      style={{
        backgroundColor: '#151515',
        backgroundImage: images[0] ? `url('${imageUrl}')` : 'none',
        height: '500px',
      }}
    >
      <div className="tw-page-title-container tw-element">
        <h1 className="tw-page-title uk-text-uppercase">{title}</h1>
      </div>
      <div className="tw-breadcrumb-container uk-position-absolute uk-position-bottom-center tw-element">
        <SiteBreadcrumbs />
      </div>
    </section>
  );
};

export default SiteHeader;
