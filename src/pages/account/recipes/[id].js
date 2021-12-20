import { isBlank } from '@foundation/lib/util';
import { usePage, getPageProps } from '@foundation/next';

import { getSession } from '@atelierfabien/next-auth';

import { fetchRecipe } from '@shop/sanity/types/recipe';

import { buildLink } from '@shop/hooks/navigation';

import { View } from '@shop/components/Site/Recipe/View';
import AccountBreadcrumbs from '@shop/components/Site/Account/Breadcrumbs';

export const getServerSideProps = async context => {
  const { locale, defaultLocale } = context;
  const { id } = context.params;
  const session = await getSession(context);

  if (!isBlank(id) && String(session?.user?.id).startsWith('user.')) {
    const recipe = await fetchRecipe(id, {
      userId: session.user.id,
      locale,
      defaultLocale,
    });

    if (!recipe) return { notFound: true };

    const { label, href } = buildLink(recipe);

    const breadcrumbs = [{ label, href }];

    const props = await getPageProps(context, {
      page: recipe,
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

const Page = props => {
  const page = usePage();
  return (
    <View {...page}>
      <div className="uk-container">
        <AccountBreadcrumbs {...props} />
      </div>
    </View>
  );
};

Page.authentication = { redirect: true };

export default Page;
