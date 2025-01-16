import React from "react";
import { MENU_ITEMS_IMAGE_URL } from "../constants";

const MenuItemCard = (props = {}) => {

    const {name, description, imageId, isVeg, price, id } = props?.menuitem;
    
    return (
        <div className="menu-item">
            <h3>{(name)? name : "test name"}</h3>
            <img src={MENU_ITEMS_IMAGE_URL + imageId}/>
            <p>Price: {`Rs. `+ (price/100)}</p>
            <small>{description?.substr(0, 100)}</small>
            <button className="add-to-cart-btn">Add to Cart</button>
        </div>
    );
}

export default MenuItemCard;