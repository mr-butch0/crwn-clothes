import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { addCartItem } from "../../redux/cart/cart.actions";
import { useDispatch } from 'react-redux';

const CollectionItem = ({item}) => {
  const dispatch = useDispatch();
  const {imageUrl, name, price} = item;
  
  return (
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addCartItem(item))} inverted>Add to cart</CustomButton>
    </div>
  );
}

export default CollectionItem;
