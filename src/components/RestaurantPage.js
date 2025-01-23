import React, { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import useRestaurantDetail from "../utils/useRestaurantDetail";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {

    // const [showMenu, setShowMenu] = useState(false);
    const [showIndex, setShowIndex] = useState(6);
    const { resId } = useParams();
    const resInfo = useRestaurantDetail(resId); // restaurant detail result

    const { name, avgRating, cuisines, areaName,locality } = resInfo.restResult;
    const restMenus = resInfo.restMenus;
    const restMenusRecom = [];

    // console.log(restMenus);
    
    return (
        <>
          <main className="px-1">
            <h1 className="flex text-center px-5 py-3"><b>{name}</b></h1>
            <hr/>
            <div className="p-3 m-3">
                <p>Cuisine: {cuisines}</p>
                <p>Rating: {avgRating} ⭐</p>
                <p>Address: {areaName}, {locality}</p>
            </div>

            <div className="menu-container">
                {(restMenus?.length ===0) ? <h3>Loading Items...</h3> : null}

                {restMenus?.map((item, key) => (
                    <MenuCategory key={key} menucategory={item} showTab={(key==showIndex ? true : false)}
                    setShowIndex={()=> setShowIndex(key)} />
                ))}
            </div>
          </main>
        </>
    );
}

export default RestaurantPage;