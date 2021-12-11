import { withPageWithLayout } from '@shop/hooks';

import Regions from '@shop/components/Page/Regions';

const ContactPage = ({ page, children }) => {
  return (
    <>
      <h1>Contact</h1>
      <h2>{page.title}</h2>
      <Regions page={page} renderAll />
      {children}
    </>
  );
};

export default withPageWithLayout('contact', ContactPage);
