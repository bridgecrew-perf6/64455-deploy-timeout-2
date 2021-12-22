import { withPageWithLayout } from '@shop/hooks';

import SiteHeader from '@shop/components/Site/Header';
import SiteAccountOverview from '@shop/components/Site/Account/Overview';

const AccountPage = props => {
  return (
    <div className="main-container">
      <SiteHeader page={props.page} />
      <SiteAccountOverview {...props} />
    </div>
  );
};

export default withPageWithLayout('account', AccountPage);
