import Page from '../Page';
import React from 'react';
const Booking = React.lazy(() => import('booking/App'));

const BookingPage = () => (
  <Page title="Booking">
    <React.Suspense fallback="Loading booking...">
      <Booking />
    </React.Suspense>
  </Page>
);

export default BookingPage;
