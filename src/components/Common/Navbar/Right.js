import CommonNavbarMenuCartItem from '@shop/components/Common/Navbar/Menu/Cart/Item';
import CommonNavbarMenuUser from '@shop/components/Common/Navbar/Menu/User';

const CommonNavbarRight = () => {
  return (
    <nav className="uk-navbar-right tw-secondary-menu">
      <CommonNavbarMenuUser />
      <CommonNavbarMenuCartItem />
    </nav>
  );
};

export default CommonNavbarRight;
