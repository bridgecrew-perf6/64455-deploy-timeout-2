import SiteHeader from '@shop/components/Site/Header';
import SitePageSectionIntro from '@shop/components/Site/Page/Section/Intro';
import SitePageSectionMain from '@shop/components/Site/Page/Section/Main';
import SitePageSectionVideo from '@shop/components/Site/Page/Section/Video';
import SitePageSectionNewsletter from '@shop/components/Site/Page/Section/Newsletter';
import SitePageSectionTestimonials from '@shop/components/Site/Page/Section/Testimonials';

const Page = () => (
  <div className="main-container">
    <SiteHeader title="Thermomix" />
    <SitePageSectionIntro />
    <SitePageSectionMain />
    <SitePageSectionVideo />
    <SitePageSectionNewsletter />
    <SitePageSectionTestimonials />
  </div>
);

export default Page;
