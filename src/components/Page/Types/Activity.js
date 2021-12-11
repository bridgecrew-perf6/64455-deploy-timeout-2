import { withPageWithLayout } from '@shop/hooks';

import Regions from '@shop/components/Page/Regions';

const ActivityPage = ({ page, children }) => {
  return (
    <>
      <h1>Activity</h1>
      <h2>{page.title}</h2>
      <Regions page={page} renderAll />
      {children}
    </>
  );
};

export default withPageWithLayout('activity', ActivityPage);
