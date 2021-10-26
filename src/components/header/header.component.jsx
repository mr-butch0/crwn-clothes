import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user.actions";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectIsHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import "./header.styles.scss";
import { createStructuredSelector } from "reselect";


const Header = () => {
  const {currentUser, isHidden} = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectIsHidden
  }));
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(setCurrentUser(null));
    auth.signOut();
  };
 
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/">
          CONTACTS
        </Link>
        {currentUser ? (
          <div className="option" onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
     {!isHidden ? <CartDropdown /> : ''}
    </div>
  );
};

export default Header;
