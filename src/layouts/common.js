import CommonHeader from '@shop/components/Common/Header';
import CommonFooter from '@shop/components/Common/Footer';
import OffcanvasNav from '@shop/components/Offcanvas/Nav';

import { SnipcartContainer } from '@shop/components/Snipcart';

import CommonModalLogin from '@shop/components/Common/Modal/Login';
import CommonModalSearch from '@shop/components/Common/Modal/Search';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="tm-page">
        <CommonHeader />
        <main className="tm-page-main">{children}</main>
        <CommonFooter />
        <OffcanvasNav />
        <CommonModalSearch />
        <CommonModalLogin />
        <SnipcartContainer />
      </div>
    </>
  );
};

export default DefaultLayout;
