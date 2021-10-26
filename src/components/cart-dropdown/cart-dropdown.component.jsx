import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useHistory } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div className="cart-dropdown">
            <div className="cart-itmes">
            {cartItems.length !== 0 ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                : (
                    <span className="empty-cart">There are not any items</span>
                )
            }
            </div>
            <CustomButton onClick={() => 
                {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    ) 
}

export default CartDropdown;