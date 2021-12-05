import CommonNavbarLogo from '@shop/components/Common/Navbar/Logo';

const CommonNavbarLeft = () => (
  <div className="uk-navbar-left">
    {/* Hamburger */}
    <button
      className="uk-navbar-toggle uk-hidden@m"
      uk-toggle="target: #nav-offcanvas"
      uk-navbar-toggle-icon="true"
      type="button"
    />
    {/* Logo */}
    <CommonNavbarLogo />
  </div>
);

export default CommonNavbarLeft;
