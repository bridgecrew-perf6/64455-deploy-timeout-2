import { withPageWithLayout } from '@shop/hooks';

import { Region } from '@shop/components/Page/Regions';

import SiteHeader from '@shop/components/Site/Header';
import IntroSection from '@shop/components/Site/Page/Section/Intro';
import ColumnsSection from '@shop/components/Site/Page/Section/Columns';
import NewsletterSection from '@shop/components/Site/Page/Section/Newsletter';
import SlideshowSection from '@shop/components/Site/Page/Section/Slideshow';
import TestimonialsSection from '@shop/components/Site/Page/Section/Testimonials';
import VideoSection from '@shop/components/Site/Page/Section/Video';

import StatsSection from '@shop/components/Site/Page/Section/Stats';
import ProductsSection from '@shop/components/Site/Page/Section/Products';

const DefaultPage = ({ page }) => {
  return (
    <div className="main-container">
      <SiteHeader page={page} />
      <IntroSection page={page} />
      <ColumnsSection page={page} type="plain" />
      <Region region={page.regions.slideshow} Component={SlideshowSection} />
      <Region region={page.regions.video} Component={VideoSection} />
      <Region region={page.regions.statistics} Component={StatsSection} />
      <Region region={page.regions.products} Component={ProductsSection} />
      <NewsletterSection />
      <Region
        region={page.regions.testimonials}
        Component={TestimonialsSection}
      />
    </div>
  );
};

export default withPageWithLayout('default', DefaultPage);
