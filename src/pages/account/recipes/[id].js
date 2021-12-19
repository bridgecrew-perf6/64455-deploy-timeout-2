import { isBlank } from '@atelierfabien/next-foundation/lib/util';
import { usePage, getPageProps } from '@foundation/next';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import { getSession } from '@atelierfabien/next-auth';

import init from '@atelierfabien/next-auth/account';

import { recipeProjection } from '@shop/sanity/queries/recipe';

import authConfig from '@app/config/auth';

import { View } from '@shop/components/Site/Recipe/View';
import SiteAccountBreadcrumbs from '@shop/components/Site/Account/Breadcrumbs';

const client = getClient(true); // private client

const account = init(client);

export const getServerSideProps = async context => {
  const { locale, defaultLocale } = context;
  const { id } = context.params;
  const session = await getSession(context);

  if (!isBlank(id) && String(session?.user?.id).startsWith('user.')) {
    const recipe = await account.getDocumentByAlias(id, {
      projection: recipeProjection,
      types: authConfig.referencedTypes,
      userId: session.user.id,
      locale,
      defaultLocale,
    });

    if (!recipe) return { notFound: true };

    const props = await getPageProps(context, {
      page: recipe,
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
    <View {...page}>
      <div className="uk-container">
        <SiteAccountBreadcrumbs page={page} />
      </div>
    </View>
  );
};

// TODO Page.authentication = { redirect: true };

export default Page;
