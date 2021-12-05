import { Link } from '@foundation/next';

const LOGGED_IN = false;

const CommonNavbarMenuUserItem = () =>
  LOGGED_IN ? (
    <Link
      className="uk-navbar-item uk-link-muted tm-navbar-button"
      href="/account"
      uk-icon="user"
      partial
    />
  ) : (
    <Link
      className="uk-navbar-toggle"
      href="#login-modal"
      uk-toggle="target: #login-modal"
      uk-icon="user"
      partial
    />
  );

export default CommonNavbarMenuUserItem;
