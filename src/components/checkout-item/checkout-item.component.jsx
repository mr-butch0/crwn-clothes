import React from 'react'
import { useDispatch } from 'react-redux';
import { clearItemFromCart, removeItem, addCartItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, quantity, price} = cartItem;
    const dispatch = useDispatch();
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="checkout item image" />
            </div>
            <span className="name">{name}</span>           
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => dispatch(clearItemFromCart(cartItem))} className="remove-button">&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
