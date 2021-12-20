import { useMemo } from 'react';

import { Link } from '@foundation/next';

import { buildLink } from '@shop/hooks/navigation';

import { urlFor } from '@app/hooks/image';

const generateLink = item => {
  if (item._type === 'recipe') {
    return { ...item, href: `/account/recipes/${item.alias}` };
  } else if (item._type === 'recipe.bundle') {
    return { ...item, href: `/account/bundles/${item.alias}` };
  } else {
    return buildLink(item);
  }
};

const SiteAccountOverviewItem = item => {
  const { _id, name, category, image, onItemClick } = item;
  const link = buildLink(item, generateLink);

  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(360).height(270).auto('format').url() : null,
    [image]
  );

  const onClick = useMemo(() => {
    if (typeof onItemClick === 'function') {
      return e => {
        e.preventDefault();
        onItemClick(_id);
      };
    }
  }, [_id, onItemClick]);

  return (
    <div className="shop-item">
      <div className="shop-content">
        <div className="shop-image-container">
          <Link
            href={link.href}
            className="tw-image-hover uk-cover-container"
            title={name}
            uk-ratio="3/2"
            onClick={onClick}
          >
            {imageUrl && (
              <img
                data-src={imageUrl}
                width="360"
                height="270"
                uk-img="target: !.uk-slideshow-items"
                uk-cover="true"
              />
            )}
          </Link>
        </div>
        <h4 className="uk-text-truncate">
          <Link href={link.href} className="shop-title" onClick={onClick}>
            {name}
          </Link>
        </h4>
        {category && (
          <div className="shop-category">{category ?? '\u00A0'}</div>
        )}
      </div>
    </div>
  );
};

export default SiteAccountOverviewItem;
