import { withPageWithLayout } from '@shop/hooks';

import { Region } from '@shop/components/Page/Regions';

import SiteHeader from '@shop/components/Site/Header';
import SitePageSectionIntro from '@shop/components/Site/Page/Section/Intro';
import SitePageSectionColumns from '@shop/components/Site/Page/Section/Columns';
import SitePageSectionNewsletter from '@shop/components/Site/Page/Section/Newsletter';
import SitePageSectionTestimonials from '@shop/components/Site/Page/Section/Testimonials';

import SitePageSectionStats from '@shop/components/Site/Page/Section/Stats';
import SitePageSectionProducts from '@shop/components/Site/Page/Section/Products';

const PresentationPage = ({ page }) => {
  return (
    <div className="main-container">
      <SiteHeader page={page} />
      <SitePageSectionIntro page={page} />
      <SitePageSectionColumns page={page} type="plain" />
      <Region
        region={page.regions.statistics}
        Component={SitePageSectionStats}
      />
      <Region
        region={page.regions.products}
        Component={SitePageSectionProducts}
      />
      <SitePageSectionNewsletter />
      <Region
        region={page.regions.testimonials}
        Component={SitePageSectionTestimonials}
      />
    </div>
  );
};

export default withPageWithLayout('presentation', PresentationPage);
