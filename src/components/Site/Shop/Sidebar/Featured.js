import { useMemo } from 'react';

import { isBlank } from '@atelierfabien/next-foundation/lib/util';

import { useCurrency, Link } from '@foundation/next';

import { useProductUrl } from '@shop/hooks';
import { urlFor } from '@app/hooks/image';

const Item = product => {
  const { name, category, image, pricing } = product;
  const href = useProductUrl(product);
  const c = useCurrency();

  const imageUrl = useMemo(
    () =>
      image ? urlFor(image).width(120).height(120).auto('format').url() : null,
    [image]
  );

  return (
    <li>
      <div className="recent-thumb">
        <Link href={href}>
          <img src={imageUrl} alt={name} />
        </Link>
      </div>
      <div className="recent-content">
        <h4>
          <Link href={href}>{name}</Link>
        </h4>
        <span className="entry-cat">{category ?? '\u00A0'}</span>
        <span className="entry-price">{c.format(pricing.price)}</span>
      </div>
    </li>
  );
};

const ShopSidebarFeatured = ({ products = [], hidden = false }) => {
  if (isBlank(products) || hidden) return null;

  return (
    <div className="widget-item">
      <aside className="widget tw-shop-widget">
        <h3 className="widget-title">
          <span>Meest verkocht</span>
        </h3>
        <ul>
          {products.map(product => (
            <Item key={product._id} {...product} />
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ShopSidebarFeatured;
