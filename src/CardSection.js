import React from 'react';
import { CardElement } from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <label>
        カードで支払う
        <CardElement style={{ base: { fontSize: '18px' } }} />
      </label>
    );
  }
}

export default CardSection;
