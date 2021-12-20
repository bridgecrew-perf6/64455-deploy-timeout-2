import { withPageWithLayout } from '@shop/hooks';

import { Region } from '@shop/components/Page/Regions';

import SiteHeader from '@shop/components/Site/Header';
import IntroSection from '@shop/components/Site/Page/Section/Intro';
import ColumnsSection from '@shop/components/Site/Page/Section/Columns';
import CallToActionSection from '@shop/components/Site/Page/Section/CallToAction';
import RecipesSection from '@shop/components/Site/Page/Section/Recipes';
import SlideshowSection from '@shop/components/Site/Page/Section/Slideshow';
import VideoSection from '@shop/components/Site/Page/Section/Video';

const TipsPage = ({ page }) => (
  <div className="main-container">
    <SiteHeader page={page} />
    <IntroSection page={page} />
    <ColumnsSection page={page} type="plain" />
    <Region region={page.regions?.slideshow} Component={SlideshowSection} />
    <Region region={page.regions?.video} Component={VideoSection} />
    <Region
      id="breakfast"
      region={page.regions?.breakfast}
      Component={RecipesSection}
    />
    <Region
      id="lunch"
      region={page.regions?.lunch}
      Component={RecipesSection}
      background="background-stone-yellow.jpg"
    />
    <Region
      id="dinner"
      region={page.regions?.dinner}
      Component={RecipesSection}
    />
    <Region
      region={page.regions?.callToAction}
      Component={CallToActionSection}
    />
  </div>
);

export default withPageWithLayout('tips', TipsPage);
