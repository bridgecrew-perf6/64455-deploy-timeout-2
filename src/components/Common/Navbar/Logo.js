import { Link } from '@foundation/next';
import CommonLogoInverse from '@shop/components/Common/Logo/Inverse';

const CommonNavbarLogo = () => (
  <Link className="uk-navbar-item uk-logo" href="/">
    <CommonLogoInverse />
  </Link>
);

export default CommonNavbarLogo;
