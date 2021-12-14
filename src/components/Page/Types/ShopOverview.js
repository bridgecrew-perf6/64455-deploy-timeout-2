import { withPageWithLayout } from '@shop/hooks';

import SiteHeader from '@shop/components/Site/Header';
import IntroSection from '@shop/components/Site/Page/Section/Intro';
import ColumnsSection from '@shop/components/Site/Page/Section/Columns';

import ShopOverview from '@shop/components/Site/Shop/Overview';

const ShopOverviewPage = props => {
  const { page } = props;
  return (
    <div className="main-container">
      <SiteHeader page={page} />
      <IntroSection page={page} />
      <ColumnsSection page={page} type="plain" />
      <ShopOverview {...props} />
    </div>
  );
};

export default withPageWithLayout('shopOverview', ShopOverviewPage);
