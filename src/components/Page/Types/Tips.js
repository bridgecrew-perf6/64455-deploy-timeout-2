import { withPageWithLayout } from '@shop/hooks';

import { Region } from '@shop/components/Page/Regions';

import SiteHeader from '@shop/components/Site/Header';
import SitePageSectionIntro from '@shop/components/Site/Page/Section/Intro';
import SitePageSectionColumns from '@shop/components/Site/Page/Section/Columns';
import SitePageSectionCallToAction from '@shop/components/Site/Page/Section/CallToAction';
import SitePageSectionRecipes from '@shop/components/Site/Page/Section/Recipes';
import SitePageSectionSlideshow from '@shop/components/Site/Page/Section/Slideshow';

const TipsPage = ({ page }) => (
  <div className="main-container">
    <SiteHeader page={page} />
    <SitePageSectionIntro page={page} />
    <SitePageSectionColumns page={page} type="plain" />
    <Region
      region={page.regions.slideshow}
      Component={SitePageSectionSlideshow}
    />
    <Region
      id="breakfast"
      region={page.regions.breakfast}
      Component={SitePageSectionRecipes}
    />
    <Region
      id="lunch"
      region={page.regions.lunch}
      Component={SitePageSectionRecipes}
      background="background-stone-yellow.jpg"
    />
    <Region
      id="dinner"
      region={page.regions.dinner}
      Component={SitePageSectionRecipes}
    />
    <Region
      region={page.regions.callToAction}
      Component={SitePageSectionCallToAction}
    />
  </div>
);

export default withPageWithLayout('tips', TipsPage);
