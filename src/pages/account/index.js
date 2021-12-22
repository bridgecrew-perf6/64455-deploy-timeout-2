// import { Page } from '@shop/http/nodes';

import SiteAccountOverview from '@shop/components/Site/Account/Overview';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import { getSession } from '@atelierfabien/next-auth';

import init from '@atelierfabien/next-auth/account';

import authConfig from '@app/config/auth';

// TODO - Workaround
//  const { locale, defaultLocale } = context;
//  const serversideProps = await getPagePropsByPath('account', context);
//  if (serversideProps?.props?.currentPageProps?._type === 'page') {
//    const session = await getSession(context);
//    if (String(session?.user?.id).startsWith('user.')) {
//      serversideProps.props.session = session;
//      serversideProps.props.documents = await account.getDocumentsList({
//        types: authConfig.referencedTypes,
//        userId: session.user.id,
//        locale,
//        defaultLocale,
//      });
//    }
//  }
//  return serversideProps;

const client = getClient(true); // private client

const account = init(client);

const Header = ({ title, imageUrl }) => {
  return (
    <section
      className="uk-section uk-text-center uk-flex uk-flex-middle uk-flex-center uk-light uk-background-cover"
      data-overlay="0.4"
      style={{
        backgroundColor: '#151515',
        backgroundImage: imageUrl ? `url('${imageUrl}')` : 'none',
        height: '500px',
      }}
    >
      <div className="tw-page-title-container tw-element">
        <h1 className="tw-page-title uk-text-uppercase">{title}</h1>
      </div>
    </section>
  );
};

const Page = props => {
  return (
    <div className="main-container">
      <Header
        title="Mijn account"
        imageUrl="/assets/images/background-ingredients.jpg"
      />
      <SiteAccountOverview {...props} />
    </div>
  );
};

export const getServerSideProps = async context => {
  const { locale, defaultLocale } = context;

  const page = { regions: {} };
  const props = { page, documents: [] };

  const session = await getSession(context);
  if (String(session?.user?.id).startsWith('user.')) {
    props.session = session;
    props.documents = await account.getDocumentsList({
      types: authConfig.referencedTypes,
      userId: session.user.id,
      locale,
      defaultLocale,
    });
  }

  return { props };
};

Page.authentication = { redirect: true };

export default Page;
