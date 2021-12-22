// import { Page, getPagePropsByPath } from '@shop/http/nodes';

import { getPagePropsByPath } from '@shop/http/nodes';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import { getSession } from '@atelierfabien/next-auth';

import init from '@atelierfabien/next-auth/account';

// TODO - workaround

import authConfig from '@app/config/auth';

const client = getClient(true); // private client

const account = init(client);

export const getServerSideProps = async context => {
  const { locale, defaultLocale } = context;
  const serversideProps = await getPagePropsByPath('account', context);
  if (serversideProps?.props?.currentPageProps?._type === 'page') {
    const session = await getSession(context);
    if (String(session?.user?.id).startsWith('user.')) {
      serversideProps.props.session = session;
      serversideProps.props.documents = await account.getDocumentsList({
        types: authConfig.referencedTypes,
        userId: session.user.id,
        locale,
        defaultLocale,
      });
    }
  }
  return serversideProps;
};

// TODO - workaround

const Page = props => {
  return (
    <div className="uk-padding">
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
  );
};

Page.authentication = { redirect: true };

export default Page;
