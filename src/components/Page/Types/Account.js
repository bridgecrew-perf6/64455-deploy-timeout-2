import { withPageWithLayout } from '@shop/hooks';

import SiteHeader from '@shop/components/Site/Header';
import IntroSection from '@shop/components/Site/Page/Section/Intro';

const AccountPage = ({ page, documents }) => {
  console.log(documents);
  return (
    <div className="main-container">
      <SiteHeader page={page} />
      <IntroSection page={page} />
      <section className="uk-section">
        <h1 className="uk-text-center">Account!</h1>
      </section>
    </div>
  );
};

export default withPageWithLayout('account', AccountPage);
