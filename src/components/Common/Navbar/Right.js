import CommonNavbarMenuCartItem from '@shop/components/Common/Navbar/Menu/Cart/Item';
import CommonNavbarMenuUserItem from '@shop/components/Common/Navbar/Menu/User/Item';
import CommonNavbarMenuUserDropdown from '@shop/components/Common/Navbar/Menu/User/Dropdown';

const CommonNavbarRight = () => {
  return (
    <nav className="uk-navbar-right">
      <CommonNavbarMenuUserItem />
      <CommonNavbarMenuUserDropdown />
      <CommonNavbarMenuCartItem />
    </nav>
  );
};

export default CommonNavbarRight;
