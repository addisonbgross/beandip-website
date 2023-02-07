import Head from 'next/head';

import '../styles/styles.css';

const App = ({ Component, pageProps }) => (
  <>
    <script type="text/javascript" src="/script.js" async />

    <Head>
      <title>beandip games</title>
      <meta name="description" content="beandip games" />
      <link rel="icon" href="/icon.png" />

      <link
        rel="preconnect"
        href="https://fonts.bunny.net"
        crossOrigin="true"
      />
      <link
        href="https://fonts.bunny.net/css?family=be-vietnam-pro:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|sora:100,200,300,400,500,600,700,800"
        rel="stylesheet"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@beandipgames" />
      <meta name="twitter:title" content="beandip games dev blog" />
      <meta
        name="twitter:description"
        content="Follow beandip games as they create their first game"
      />
      <meta
        name="twitter:image"
        content="https://beandipgames.com/images/hill-forest.png"
      />

      <meta property="og:title" content="beandip games dev blog" />
      <meta
        property="og:image"
        content="https://beandipgames.com/images/hill-forest.png"
      />
      <meta
        property="og:description"
        content="Follow beandip games as they create their first game"
      />
      <meta property="og:url" content="https://www.beandipgames.com" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
