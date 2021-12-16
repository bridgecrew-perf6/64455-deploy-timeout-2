import { useMemo } from 'react';
import { isBlank } from '@atelierfabien/next-foundation/lib/util';
import { useQuery } from '@foundation/next';

import { urlFor } from '@app/hooks/image';

import { PortableText } from '@shop/components/Sanity';

const View = ({ title, body, tip, ingredients = [], images = [] }) => {
  const imageUrl = useMemo(
    () =>
      images[0]
        ? urlFor(images[0]).width(900).height(600).auto('format').url()
        : null,
    [images]
  );

  return (
    <div className="main-container">
      <section className="uk-section uk-padding-remove-vertical uk-margin-large-top">
        <div
          className="uk-container"
          data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 600;"
        >
          <div
            className="uk-child-width-expand uk-grid-medium uk-margin-top"
            data-uk-grid
          >
            {imageUrl && (
              <div className="tw-element uk-text-center uk-margin-remove-top uk-padding-remove-vertical uk-flex-last@s">
                <img src={imageUrl} alt={title} />
              </div>
            )}
            <div className="uk-width-1-4@s">
              <h2 className="entry-title uk-text-left">{title}</h2>
              {!isBlank(ingredients) && (
                <div className="entry-cats tw-meta uk-text-left uk-margin-large-top uk-margin-bottom">
                  Ingrediënten
                </div>
              )}
              {ingredients.map(({ _key, title, list }) => (
                <div key={_key}>
                  {!isBlank(title) && (
                    <p className="uk-text-xsmall uk-text-muted uk-text-lowercase">
                      {title}
                    </p>
                  )}
                  <ul className="uk-list uk-list-divider">
                    {list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="uk-section uk-padding-remove-vertical uk-margin-remove-top uk-margin-large-bottom">
        <div
          className="uk-container"
          data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 600;"
        >
          <div className="uk-child-width-expand uk-grid-medium" data-uk-grid>
            <div className="uk-width-1-4@s" />
            <div className="uk-grid-medium" data-uk-grid>
              <div>
                <div className="entry-cats tw-meta uk-text-left uk-margin-large-top">
                  Bereiding
                </div>
                <PortableText blocks={body} />
              </div>
              {!isBlank(tip) && (
                <div>
                  <div className="entry-cats tw-meta uk-text-left">Tip</div>
                  <PortableText blocks={tip} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const RecipeView = ({ id }) => {
  const result = useQuery(
    ['recipes', id],
    async () => {
      if (isBlank(id)) return { error: 'invalid id' };
      const response = await fetch(`/api/recipes/${id}`);
      if (response.ok) {
        return response.json();
      } else {
        return { error: 'invalid request' };
      }
    },
    {
      staleTime: 60 * 1000,
      keepPreviousData: true,
    }
  );

  if (!result.data || result.data?.error) {
    return (
      <div className="main-container">
        <section className="uk-section uk-height-large uk-flex uk-flex-center uk-flex-middle">
          <div data-uk-spinner />
        </section>
      </div>
    );
  } else {
    return <View key={id} {...result.data} />;
  }
};

export default RecipeView;
