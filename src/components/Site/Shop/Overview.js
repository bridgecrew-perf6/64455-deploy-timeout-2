import { useMemo } from 'react';

import { isBlank } from '@foundation/lib/util';
import { useQuery, useRouter, usePageOptions } from '@foundation/next';

import ProductList from '@shop/components/Site/Shop/ProductList';
import ShopSidebar from '@shop/components/Site/Shop/Sidebar';
import ProductListLoading from '@shop/components/Site/Shop/ProductList/Loading';

const ShopOverview = props => {
  const { products, category } = usePageOptions();

  const { locale, query: params } = useRouter();

  const path = category?.path ?? '';

  let url = `/api/products/list${path}?locale=${locale}`;

  if (!isBlank(params.query))
    url += `&term=${encodeURIComponent(params.query)}`;

  const query = useQuery(
    ['products', path, locale, params.query ?? ''],
    () =>
      isBlank(params.query)
        ? products
        : fetch(url).then(response => response.json()),
    {
      staleTime: 60 * 1000,
    }
  );

  const results = useMemo(
    () =>
      query.isLoading ? [] : Array.isArray(query.data) ? query.data : products,
    [products, query]
  );

  return (
    <section className="uk-section uk-section-shop">
      <div className="uk-container">
        <div data-uk-grid>
          <div className="content-area uk-width-expand">
            <div className="tw-element tw-shop">
              {query.isLoading && <ProductListLoading />}
              {!query.isLoading && <ProductList products={results} />}
            </div>
          </div>
          <ShopSidebar {...props} />
        </div>
      </div>
    </section>
  );
};

export default ShopOverview;
