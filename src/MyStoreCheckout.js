import React from 'react';
import { Elements } from 'react-stripe-elements';

import PaymentRequestForm from './PaymentRequestForm';

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <PaymentRequestForm />
      </Elements>
    );
  }
}

export default MyStoreCheckout;
