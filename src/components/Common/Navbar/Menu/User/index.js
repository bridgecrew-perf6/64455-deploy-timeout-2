import { useSession } from '@atelierfabien/next-auth';

import CommonNavbarMenuUserItem from '@shop/components/Common/Navbar/Menu/User/Item';
import CommonNavbarMenuUserDropdown from '@shop/components/Common/Navbar/Menu/User/Dropdown';

const CommonNavbarMenuUser = () => {
  const [session, loading] = useSession();
  return (
    <>
      <CommonNavbarMenuUserItem session={session} loading={loading} />
      <CommonNavbarMenuUserDropdown session={session} loading={loading} />
    </>
  );
};

export default CommonNavbarMenuUser;
