import { withPageWithLayout } from '@shop/hooks';

import Regions from '@shop/components/Page/Regions';

const TipsPage = ({ page, children }) => {
  return (
    <>
      <h1>Tips</h1>
      <Regions page={page} renderAll />
      {children}
    </>
  );
};

export default withPageWithLayout('tips', TipsPage);
