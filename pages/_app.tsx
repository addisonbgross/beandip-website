import Head from 'next/head';

import '../styles/styles.css';

const App = ({ Component, pageProps }) => (
  <>
    <script type="text/javascript" src="/posthog-script.js" async />
    <Head>
      <title>beandip games</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
