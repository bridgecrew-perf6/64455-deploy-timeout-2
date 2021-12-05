import CommonNavbarLeft from '@shop/components/Common/Navbar/Left';
import CommonNavbarCenter from '@shop/components/Common/Navbar/Center';
import CommonNavbarRight from '@shop/components/Common/Navbar/Right';

const CommonNavbar = () => (
  <div
    className="uk-navbar-container uk-light tm-navbar-container"
    uk-sticky="cls-active: tm-navbar-container-fixed"
  >
    <div uk-navbar="true">
      <CommonNavbarLeft />
      <CommonNavbarCenter />
      <CommonNavbarRight />
    </div>
  </div>
);

export default CommonNavbar;
