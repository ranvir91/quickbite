import React from "react";
import { MENU_ITEMS_IMAGE_URL } from "../constants";

const MenuItemCard = (props = {}) => {
    const {name, description, imageId, isVeg, price, id, finalPrice } = props?.menuitem;
    // console.log(props?.menuitem);
    
    return (
        <div className="p-3 float-left border-b">
          <div className="float-left w-10/12">
            <h3 className=""><b>{(name)? name : "test name"}</b></h3>
            <p>{`₹ `+ (price/100)}</p>
            <p>{` price `+ price  }</p>
            <small>{description?.substr(0, 1000)}</small>
          </div>
          <div className="float-right text-center w-2/12 relative">
            <img src={MENU_ITEMS_IMAGE_URL + imageId} className="w-full rounded-lg" />
            <button className="bg-white px-3 py-1 rounded-md shadow-lg border-gray-300"><b>Add +</b></button>
          </div>
        </div>
    );
}

export default MenuItemCard;