import { useMemo } from 'react';

import { useCurrency, Link } from '@foundation/next';

import { useProductUrl } from '@shop/hooks';
import { urlFor } from '@app/hooks/image';

const ProductListItem = product => {
  const { name, category, image, pricing } = product;
  const href = useProductUrl(product);
  const c = useCurrency();

  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(360).height(270).auto('format').url() : null,
    [image]
  );

  return (
    <div className="shop-item">
      <div className="shop-content">
        <div className="shop-image-container">
          <Link href={href}>
            <img alt={name} src={imageUrl} className="uk-responsive-width" />
          </Link>
        </div>
        <h4 className="uk-text-truncate">
          <Link href={href} className="shop-title">
            {name}
          </Link>
        </h4>
        <div className="shop-category">{category ?? '\u00A0'}</div>
        <div className="price">
          <span className="new-price">{c.format(pricing.price)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
