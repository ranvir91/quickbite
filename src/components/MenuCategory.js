import React from "react";
import MenuItemCard from "./MenuItemCard";

const MenuCategory = (props) => {
    const {title, items} = props.menucategory;
    return (
        <div className="menu-">
            <h3>{(title)? title : "test name "}</h3>
            {items?.map((item, key) => (
                <MenuItemCard key={key} menuitem={item} />
            ))}
        </div>
    );
}


export default MenuCategory;