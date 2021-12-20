import { isBlank } from '@foundation/lib/util';
import { usePage, getPageProps } from '@foundation/next';

import { getClient, traverse } from '@atelierfabien/next-sanity/lib/server';

import { getSession } from '@atelierfabien/next-auth';

import { buildLink } from '@shop/hooks/navigation';

import SiteHeader from '@shop/components/Site/Header';

import { resolveReferences } from '@shop/lib/server';

import SiteBundleOverview from '@shop/components/Site/Bundle/Overview';

import init from '@shop/sanity/types/bundle';

const client = getClient(true); // private client

const bundles = init(client);

function extractRecipeIds(bundle, unique = false) {
  const ids = [];

  // eslint-disable-next-line func-names
  traverse(bundle).forEach(function (value) {
    if (
      typeof this.parent?.node === 'object' &&
      this.parent?.node._type === 'recipe' &&
      this.key === '_id' &&
      (!unique || !ids.includes(value))
    ) {
      ids.push(value);
    }
  });

  return ids;
}

export const getServerSideProps = async context => {
  const { locale, defaultLocale } = context;
  const { id } = context.params;
  const session = await getSession(context);

  if (!isBlank(id) && String(session?.user?.id).startsWith('user.')) {
    const bundle = await bundles.getByAlias(id, {
      userId: session.user.id,
      locale,
      defaultLocale,
    });

    if (!bundle) return { notFound: true };

    const page = await resolveReferences(bundle);

    page.title = page.name;
    page.recipeIds = extractRecipeIds(bundle);

    const { label, href } = buildLink(bundle);

    const breadcrumbs = []; // construct full breadcrumbs
    breadcrumbs.push({ label: 'Account', href: '/account' });
    breadcrumbs.push({ label, href });

    const props = await getPageProps(context, {
      page,
      heading: {
        breadcrumbs,
      },
    });

    props.session = session;

    return { props };
  } else {
    return { notFound: true };
  }
};

const Page = () => {
  const page = usePage();
  return (
    <>
      <SiteHeader page={page} />
      <SiteBundleOverview page={page} />
    </>
  );
};

Page.authentication = { redirect: true };

export default Page;
