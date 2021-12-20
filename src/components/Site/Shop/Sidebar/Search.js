import { useMemo, useState, useEffect } from 'react';

import { useRouter } from '@foundation/next';
import { isBlank } from '@foundation/lib/util';

const ShopProductSidebarSearch = ({ className }) => {
  const router = useRouter();

  const [query, setQuery] = useState('');

  const submit = useMemo(() => {
    return () => {
      router.push(
        {
          pathname: '/shop',
          query: isBlank(query) ? {} : { query },
        },
        undefined,
        { shallow: true }
      );
    };
  }, [router, query]);

  const reset = useMemo(() => {
    return () => {
      setQuery('');
      router.push(
        {
          pathname: '/shop',
          query: {},
        },
        undefined,
        { shallow: true }
      );
    };
  }, [router]);

  const handleSubmit = useMemo(() => {
    return e => {
      e.preventDefault();
      if (e.target.dataset.action === 'reset') {
        reset();
      } else {
        submit();
      }
    };
  }, [submit, reset]);

  const handleOnChange = useMemo(() => {
    return e => {
      if (isBlank(e.target.value)) reset();
      setQuery(e.target.value);
    };
  }, [reset]);

  useEffect(() => {
    setQuery(router.query.query ?? '');
  }, [router.query.query]);

  return (
    <div className={`widget-item ${className}`}>
      <aside className="widget uk-padding-remove-top uk-margin-remove-top">
        <div className="call-btn" data-uk-grid>
          <div className="uk-inline uk-width-1-1">
            <a
              className="uk-form-icon uk-form-icon-flip"
              onClick={handleSubmit}
            >
              {isBlank(router.query.query) && (
                <i className="ion-android-search" data-action="submit" />
              )}
              {!isBlank(router.query.query) && (
                <i className="ion-close" data-action="reset" />
              )}
            </a>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={query}
                placeholder="Zoek"
                className="uk-input"
                onChange={handleOnChange}
              />
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ShopProductSidebarSearch;
