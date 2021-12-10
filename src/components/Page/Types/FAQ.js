import { withPageWithLayout } from '@shop/hooks';

import Regions from '@shop/components/Page/Regions';

const FAQPage = ({ page, children }) => {
  return (
    <>
      <h1>FAQ</h1>
      <Regions page={page} renderAll />
      {children}
    </>
  );
};

export default withPageWithLayout('faq', FAQPage);
