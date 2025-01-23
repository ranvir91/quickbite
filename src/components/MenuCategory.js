import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const MenuCategory = (props) => {
    // const [showMenu, setShowMenu] = useState(false);
    const {title, items} = props.menucategory;
    const showTab = props.showTab;
    const setShowIndex = props.setShowIndex;

    const showhide = () => {
        // console.log(props.showTab);
        setShowIndex();
    }

    return (
        <div className="section-category">
            <h1 className="m-3 p-3 border-y-gray-100 cursor-pointer" 
            onClick={showhide}
            ><b>{(title)? title : "test name"}</b> 
            ({items?.length})
                <span className="float-right">show/hide</span>
            </h1>
            <div className={((!showTab) ? "hidden" : "block") + " float-left bg-none"}>
              <div className="section-cont" >
                {items?.map((item, key) => (
                    <MenuItemCard key={key} menuitem={item} />
                ))}
              </div>
            </div>
        </div>
    );
}

export default MenuCategory;