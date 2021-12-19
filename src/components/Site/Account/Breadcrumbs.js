import { Link } from '@foundation/next';

const SiteAccountBreadcrumbs = ({ page }) => {
  return (
    <ul className="uk-breadcrumb uk-margin-remove">
      <Link href="/" as="li">
        Home
      </Link>
      <Link href="/account" as="li">
        Account
      </Link>
      <li className="uk-text-truncate">
        <span>{page.title ?? page.name}</span>
      </li>
    </ul>
  );
};

export default SiteAccountBreadcrumbs;
