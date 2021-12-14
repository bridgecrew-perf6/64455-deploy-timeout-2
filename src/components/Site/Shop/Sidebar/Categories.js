import { isBlank } from '@atelierfabien/next-foundation/lib/util';

import { Link, usePageOptions } from '@foundation/next';

const ShopSidebarCategories = ({ categories = [] }) => {
  const options = usePageOptions();
  const categoryId = options?.category?._id;

  if (isBlank(categories)) return null;

  return (
    <div className="widget-item">
      <aside className="widget widget_categories">
        <h3 className="widget-title">
          <span>Categorieën</span>
        </h3>
        <ul>
          {categories.map(({ _id, name, path, productCount }) => (
            <li
              key={_id}
              className={`cat-item cat-item-2 current-cat ${
                _id === categoryId ? 'uk-active' : ''
              }`}
            >
              <Link href={`/shop/categories${path.current}`}>{name}</Link> (
              {productCount})
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ShopSidebarCategories;
