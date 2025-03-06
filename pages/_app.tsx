import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"

import '../styles/styles.css';

const App = ({ Component, pageProps }) => (
  <>
    <script type="text/javascript" src="/posthog-script.js" async />
    <Head>
      <title>beandip games</title>
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default App;
