import SiteHeader from '@shop/components/Site/Header';
import SitePageSectionIntro from '@shop/components/Site/Page/Section/Intro';
import SitePageSectionMain from '@shop/components/Site/Page/Section/Main';
import SitePageSectionVideo from '@shop/components/Site/Page/Section/Video';
import SitePageSectionNewsletter from '@shop/components/Site/Page/Section/Newsletter';
import SitePageSectionTestimonials from '@shop/components/Site/Page/Section/Testimonials';

import SitePageSectionStats from '@shop/components/Site/Page/Section/Stats';
import SitePageSectionProducts from '@shop/components/Site/Page/Section/Products';

const Page = () => (
  <div className="main-container">
    <SiteHeader title="Kookworkshop" />
    <SitePageSectionIntro />
    <SitePageSectionMain />
    <SitePageSectionStats />
    <SitePageSectionProducts />
    <SitePageSectionVideo />
    <SitePageSectionNewsletter />
    <SitePageSectionTestimonials />
  </div>
);

export default Page;
