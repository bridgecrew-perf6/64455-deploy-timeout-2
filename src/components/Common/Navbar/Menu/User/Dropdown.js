import { Link, useTranslation } from '@foundation/next';

import { signOut } from '@atelierfabien/next-auth';

const CommonNavbarMenuUserDropdown = ({ session }) => {
  const { t } = useTranslation();

  return session ? (
    <div className="uk-navbar-dropdown" uk-dropdown="offset: 0">
      <ul className="uk-nav uk-navbar-dropdown-nav">
        <Link href="/account" as="li">
          Mijn account
        </Link>
        <li className="uk-nav-divider" />
        <li>
          <Link href="/auth/credentials" onClick={signOut}>
            {t('auth:signOut.button')}
          </Link>
        </li>
      </ul>
    </div>
  ) : null;
};

export default CommonNavbarMenuUserDropdown;
