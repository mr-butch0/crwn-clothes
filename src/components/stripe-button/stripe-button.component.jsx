import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JoAL9LLAjsPxNR6qtQCXBA1Hu0pWpZ8VLZ2RR9JJauGRcCiujZ8sNv7HetlJoDYf70Zy7rfyDRWqn0zOPcHpIps006ChEfYsc"

    const onToken = token => {
        console.log(token)
        alert('Succesfull payment')
    }

    return (
        <StripeCheckout 
            label = 'Pay Now' 
            name = "CRWN Clothing LTD"
            billingAddress
            shippingAddress
            image="https://svhshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel ="Pay Now"
            token={onToken}
            stripeKey={publishableKey}       
        />
    );
}

export default StripeCheckoutButton;