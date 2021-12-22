// import { withPageWithLayout } from '@shop/hooks';

import AccountOverview from '@shop/components/Site/Account/Overview';

import { usePage } from '@foundation/next';

const AccountPage = props => {
  const page = usePage(props);
  return (
    <div className="main-container">
      <AccountOverview {...props} page={page} />
    </div>
  );
};

// export default withPageWithLayout('account', AccountPage);

export default AccountPage;
