import React from 'react'
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const Checkout = () => {
    const {cartItems, total} = useSelector(createStructuredSelector({
        cartItems: selectCartItems, 
        total: selectCartTotal
    }))
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem cartItem={cartItem}/>
            ))}
            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <div className="test-warning">
                * Please use the following test credit card for payments *
                <br />
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123  
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
}
export default Checkout;