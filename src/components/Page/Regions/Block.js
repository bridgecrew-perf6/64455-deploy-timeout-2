import { useMemo } from 'react';

import { Link } from '@foundation/next';

import { PortableText } from '@shop/components/Sanity';

import { useLink } from '@app/hooks';
import { urlFor } from '@app/hooks/image';

const BlockImage = ({ image }) => {
  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(600).height(500).auto('format').url() : null,
    [image]
  );

  return (
    <div
      className="uk-padding-xlarge uk-light uk-background-cover"
      style={{
        backgroundImage: imageUrl ? `url('${imageUrl}')` : null,
        minHeight: '400px',
      }}
    />
  );
};

const BlockContent = ({ title, subtitle, body, button }) => {
  const link = useLink(button ?? {});

  return (
    <div className="uk-padding-xlarge" style={{ backgroundColor: '#f7f7f7' }}>
      <div className="tw-element tw-box">
        {subtitle && <h4 className="tw-sub-title">{subtitle}</h4>}
        {title && <h2 className="uk-text-uppercase">{title}</h2>}
        <PortableText blocks={body} />

        {link.valid && (
          <Link
            href={link.href}
            className="
          uk-button
          uk-button-default
          uk-button-small
          uk-button-silver
          uk-button-radius
          tw-hover
        "
          >
            <span className="tw-hover-inner">
              <span>{link.label}</span>
              <i className="ion-ios-arrow-thin-right" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

const BlockRegion = ({ media = 'left', ...props }) => {
  return (
    <div
      className="uk-child-width-1-2@s uk-grid-match uk-grid-collapse"
      data-uk-grid
      data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
    >
      {media === 'left' && (
        <>
          <BlockImage {...props} />
          <BlockContent {...props} />
        </>
      )}
      {media === 'right' && (
        <>
          <BlockContent {...props} />
          <BlockImage {...props} />
        </>
      )}
    </div>
  );
};

export default BlockRegion;
