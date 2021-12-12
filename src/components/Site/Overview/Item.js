import { useMemo } from 'react';

import { Link } from '@foundation/next';

import { urlFor } from '@app/hooks/image';

const className =
  'uk-button uk-button-default uk-button-small uk-button-radius';

const SiteOverviewItem = ({ title, subtitle, intro, href, image }) => {
  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(370).height(215).auto('format').url() : null,
    [image]
  );

  return (
    <article className="post">
      <div className="entry-post tw-hover">
        <div className="entry-media">
          <div className="tw-thumbnail">
            <Link href={href} className="tw-image-hover" title={title}>
              {imageUrl && <img src={imageUrl} alt={subtitle} />}
            </Link>
          </div>
        </div>
        <div className="entry-cats tw-meta">
          <a href={href} title="TODO">
            {subtitle ?? '\u00A0'}
          </a>
        </div>
        <h2 className="entry-title">
          <Link href={href}>{title}</Link>
        </h2>
        <div className="entry-content uk-text-center">
          <p className="entry-intro">{intro}</p>
          <p className="more-link">
            <Link href={href} className={className}>
              <span className="tw-hover-inner">
                <span>Meer info</span>
                <i className="ion-ios-arrow-thin-right" />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
};

export default SiteOverviewItem;
