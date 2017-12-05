import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { PaymentRequestButtonElement } from 'react-stripe-elements';

class PaymentRequestForm extends React.Component {
  constructor(props) {
    super(props);

    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe.paymentRequest({
      country: 'JP',
      currency: 'jpy',
      total: {
        label: '合計金額',
        amount: 8765
      }
    });

    paymentRequest.on('token', ({ complete, token, ...data }) => {
      console.dir(token);
      console.dir(data);

      const apigw = "https://apiendpoint.execute-api.ap-northeast-1.amazonaws.com/app/charges";
      const postData = {
        amount: 8765,
        currency: "jpy",
        description: "テスト",
        stripeToken: token
      };

      kintone.proxy(apigw, "POST", {}, postData)
        .then(result => {
          console.dir(result);
          complete('success');
        }, error => {
          console.dir(error);
        }).catch(err => {
          console.dir(err);
        });

    });

    paymentRequest.canMakePayment().then(result => {
      this.setState({ canMakePayment: !!result });
    });

    this.state = {
      canMakePayment: false,
      paymentRequest
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        className="PaymentRequestButton"
        style={{
          // For more details on how to style the Payment Request Button, see:
          // https://stripe.com/docs/elements/payment-request-button#styling-the-element
          paymentRequestButton: {
            theme: 'light',
            height: '64px',
          }
        }}
      />
    ) : null;
  }
}
export default injectStripe(PaymentRequestForm);
