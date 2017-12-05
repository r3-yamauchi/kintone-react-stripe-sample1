import React, { Component } from 'react';

import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StripeProvider apiKey="pk_test_a9aAaaAaa9aaA9A9aa9aAaAA">
          <MyStoreCheckout />
        </StripeProvider>
      </div>
    );
  }
}

export default App;
