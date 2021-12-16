import { Link, useTranslation } from '@foundation/next';

const CommonNavbarMenuUserItem = ({ session }) => {
  const { t } = useTranslation();

  return session ? (
    <Link
      className="uk-navbar-item uk-link-muted tm-navbar-button"
      href="/account"
      partial
    >
      <span className="uk-margin-small-right uk-text-truncate uk-visible@s">
        {session.user?.name ?? session.user?.email}
      </span>{' '}
      <i uk-icon="user" />
    </Link>
  ) : (
    <Link
      className="uk-navbar-toggle"
      href="/auth/credentials"
      uk-toggle="target: #login-modal; mode: click"
      partial
    >
      <span className="uk-margin-small-right uk-text-truncate uk-visible@s uk-text-uppercase">
        {t('auth:signIn.button')}
      </span>{' '}
      <i uk-icon="user" />
    </Link>
  );
};

export default CommonNavbarMenuUserItem;
