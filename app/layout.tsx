import '../styles/styles.css';

import { ReactNode } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <title>beandip games</title>

      <script type="text/javascript" src="/posthog-script.js" async />

      <meta name="description" content="beandip games" />
      <link rel="icon" href="/icon.png" />
      <link
        rel="preconnect"
        href="https://fonts.bunny.net"
        crossOrigin="anonymous"
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
    </head>
    <body cz-shortcut-listen="true">
      {children}
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
