import { withPageWithLayout } from '@shop/hooks';

import Regions from '@shop/components/Page/Regions';

const ActivitiesPage = ({ page, children }) => {
  return (
    <>
      <h1>Activities</h1>
      <Regions page={page} renderAll />
      {children}
    </>
  );
};

export default withPageWithLayout('activities', ActivitiesPage);
