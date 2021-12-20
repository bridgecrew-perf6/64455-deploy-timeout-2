import { withPageWithLayout } from '@shop/hooks';

import AccountOverview from '@shop/components/Site/Account/Overview';

const AccountPage = props => {
  return (
    <div className="main-container">
      <AccountOverview {...props} />
    </div>
  );
};

export default withPageWithLayout('account', AccountPage);
