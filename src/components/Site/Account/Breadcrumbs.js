import { usePagePart } from '@foundation/next';

import CommonBreadcrumbs from '@shop/components/Common/Breadcrumbs';

const ancestors = [{ label: 'Account', href: '/account' }];

const AccountBreadcrumbs = () => {
  const heading = usePagePart('heading');
  const breadcrumbs = ancestors.concat(heading?.breadcrumbs ?? []);
  return <CommonBreadcrumbs items={breadcrumbs} className="uk-margin-bottom" />;
};

export default AccountBreadcrumbs;
