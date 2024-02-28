import Page from '../Page';
import React from 'react';
const Web = React.lazy(() => import('web/App'));

const WebPage = () => (
  <Page title="">
    <React.Suspense fallback="Loading page...">
      <Web />
    </React.Suspense>
  </Page>
);

export default WebPage;
