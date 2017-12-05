import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import './checkoutform.css';

// import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();

    const stripe = this.props.stripe;

    const stripeResponseHandler = (status, response) => {
      console.dir(status);
      console.dir(response);

      const apigw = "https://apiendpoint.execute-api.ap-northeast-1.amazonaws.com/app/charges";
      const postData = {
        amount: 5678,
        currency: "jpy",
        description: "テスト",
        stripeToken: status.token
      };

      kintone.proxy(apigw, "POST", {}, postData)
        .then(result => {
          console.dir(result);
        }, error => {
          console.dir(error);
        }).catch(err => {
          console.dir(err);
        });
    };

    stripe.createToken({ name: '山田 太郎', currency: "jpy", locale: "ja" })
      .then((status, response) => stripeResponseHandler(status, response));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <AddressSection /> */}
        <CardSection />
        <button>送信</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
