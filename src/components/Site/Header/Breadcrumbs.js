import { usePagePart, useGlobalContext } from '@foundation/next';

import CommonBreadcrumbs from '@shop/components/Common/Breadcrumbs';

const Breadcrumbs = props => {
  const heading = usePagePart('heading', props);
  const global = useGlobalContext();

  const breadcrumbs = global.breadcrumbs ?? heading?.breadcrumbs ?? [];

  if (breadcrumbs.length > 0) {
    return (
      <CommonBreadcrumbs
        items={breadcrumbs}
        className="uk-flex uk-flex-center uk-flex-left@s uk-margin-bottom"
      />
    );
  } else {
    return null;
  }
};

export default Breadcrumbs;
