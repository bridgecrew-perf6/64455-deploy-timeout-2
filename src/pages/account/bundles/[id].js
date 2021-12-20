// TODO <title>
// TODO link back to overview
// TODO types: ['days', 'groups', 'recipes']

import groq from 'groq';

import { isBlank } from '@atelierfabien/next-foundation/lib/util';
import { usePage, getPageProps } from '@foundation/next';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import { getSession } from '@atelierfabien/next-auth';

import SiteBundleOverview from '@shop/components/Site/Bundle/Overview';

import SiteAccountBreadcrumbs from '@shop/components/Site/Account/Breadcrumbs';

import { resolveReferences } from '@shop/lib/server';
import { coreProjection } from '@shop/sanity/queries';

import { documentsProjection } from '@atelierfabien/next-auth/account';

const client = getClient(true); // private client

const bundleQuery = groq`
  *[
    _type == 'recipe.bundle' && alias.current == $alias &&
    _id in (*[_type == 'user' && _id == $userId][].references[]._ref)
  ][0]{
    ${coreProjection}, name, type, description,
    'images': coalesce(images, []),
    type == 'recipes' => {
      recipes[]->{ ${documentsProjection} }
    },
    type == 'groups' => {
      'groups': groups[]{
        ...,
        items[]->{ ${documentsProjection} }
      }
    },
    type == 'days' => {
      'items': days[]{
        ...,
        breakfast->{ ${documentsProjection} },
        lunch->{ ${documentsProjection} },
        dinner->{ ${documentsProjection} }, 
        starter->{ ${documentsProjection} },
        desert->{ ${documentsProjection} },
        side->{ ${documentsProjection} },
        snack->{ ${documentsProjection} }
      }
    },
  }
`;

export const getServerSideProps = async context => {
  const { locale, defaultLocale } = context;
  const { id } = context.params;
  const session = await getSession(context);

  if (!isBlank(id) && String(session?.user?.id).startsWith('user.')) {
    const bundle = await client.fetch(bundleQuery, {
      userId: session.user.id,
      alias: id,
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
