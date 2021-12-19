import { withPageWithLayout } from '@shop/hooks';

import SiteAccountOverview from '@shop/components/Site/Account/Overview';

const AccountPage = props => {
  return (
    <div className="main-container">
      <SiteAccountOverview {...props} />
    </div>
  );
};

export default withPageWithLayout('account', AccountPage);
