import { withPageWithLayout } from '@shop/hooks';

import SiteHeader from '@shop/components/Site/Header';
import IntroSection from '@shop/components/Site/Page/Section/Intro';

const PlainPage = ({ page }) => {
  return (
    <div className="main-container">
      <SiteHeader page={page} />
      <IntroSection page={page} className="tw-element" />
    </div>
  );
};

export default withPageWithLayout('plain', PlainPage);
