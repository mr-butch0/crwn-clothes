import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { useDispatch, useSelector } from 'react-redux';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(selectCartItemsCount);
 
    const handleClick = () => {
        dispatch(toggleCartHidden());
    }

    return (
        <div className="cart-icon" onClick={handleClick}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon;