// TODO <title>
// TODO link back to overview
// TODO types: ['days', 'groups', 'recipes']

import { isBlank } from '@atelierfabien/next-foundation/lib/util';
import { usePage, getPageProps } from '@foundation/next';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import { getSession } from '@atelierfabien/next-auth';

import SiteBundleOverview from '@shop/components/Site/Bundle/Overview';

import SiteAccountBreadcrumbs from '@shop/components/Site/Account/Breadcrumbs';

import { resolveReferences } from '@shop/lib/server';

import init from '@shop/sanity/types/bundle';

const client = getClient(true); // private client

const bundles = init(client);

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

    console.log(JSON.stringify(bundle, null, 4)); // TODO

    if (!bundle) return { notFound: true };

    const page = await resolveReferences(bundle);

    const props = await getPageProps(context, { page });

    props.session = session;

    // TODO const breadcrumbs = resolvedProps.heading?.breadcrumbs ?? [];
    // if (category && !isBlank(breadcrumbs)) {
    //   breadcrumbs.push({ label: category.name, href: category.path.current });
    // }

    return { props };
  } else {
    return { notFound: true };
  }
};

// TODO header image and title

const Page = () => {
  const page = usePage();
  return (
    <div className="main-container">
      <section className="uk-section">
        <div className="uk-container">
          <SiteAccountBreadcrumbs page={page} />
          <SiteBundleOverview page={page} />
        </div>
      </section>
    </div>
  );
};

// TODO Page.authentication = { redirect: true };

export default Page;
