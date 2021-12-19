import { useMemo } from 'react';

import RecipeModal from '@shop/components/Site/Recipe/Modal';

import types from '@shop/components/Site/Bundle/Types';

const Main = props => {
  const { name, type } = props;
  const Component = useMemo(() => types.get(type), [type]);

  if (Component) {
    return (
      <div
        className="tm-account-section uk-margin-large-bottom uk-margin-top"
        data-documents-section={type}
      >
        <h2 className="uk-margin-bottom">{name}</h2>
        {/* <PortableText blocks={body} /> */}
        <Component {...props} />
      </div>
    );
  } else {
    return null;
  }
};

const SiteBundleOverview = ({ page }) => {
  return <RecipeModal Main={Main} {...page} bundle={page._id} />;
};

export default SiteBundleOverview;
