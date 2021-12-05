import Head from 'next/head';

import { useRouterProgress } from '@foundation/next';

import App from '@shop/components/App';
import GoogleFont from '@foundation/components/GoogleFont';

import { SnipcartHead } from '@shop/components/Snipcart';

import appConfig from '@app/config/app';

const defaultFont = appConfig.defaultFont ?? 'Roboto';

export default function Application(props) {
  const { font = defaultFont } = props;

  useRouterProgress();

  return (
    <>
      <GoogleFont
        href={`https://fonts.googleapis.com/css?family=${font}&display=swap`}
      />
      <SnipcartHead />
      <Head>
        <link
          href="/dev/assets/purged/ionicons.min.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/dev/assets/purged/owl.carousel.min.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
        <script src="/dev/assets/js/isotope.pkgd.min.js" />
        <script src="/dev/assets/js/owl.carousel.min.js" />
        <script src="/dev/assets/js/theme.js" />
      </Head>
      <App {...props} />
    </>
  );
}
