import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumilateQuantity, cartItem) => accumilateQuantity + cartItem.quantity, 
        0
    )
);

export const selectIsHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumilateQuantity, cartItem) => accumilateQuantity + cartItem.quantity * cartItem.price, 
        0
    )
)