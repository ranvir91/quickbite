import React, { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import useRestaurantDetail from "../utils/useRestaurantDetail";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantDetail(resId); // restaurant detail result
    const { name, avgRating, cuisines, areaName,locality } = resInfo.restResult;
    const restMenus = resInfo.restMenus;
    const restMenusRecom = [];

    console.log(restMenus);
    
    return (
        <>
          <main className="container">
            <h1>Restaurant Details</h1>
            <hr/>
            <div className="restaurant-info">
                <h2>{name}</h2>
                <p>Cuisine: {cuisines}</p>
                <p>Rating: {avgRating} ⭐</p>
                <p>Address: {areaName}, {locality}</p>
                <hr/>
            </div>

            <div className="menu-container">
                <div className="restaurant-info">
                </div>

                {(restMenus?.length ===0) ? <h3>Loading Items...</h3> : null}

                {restMenus?.map((item, key) => (
                     <MenuCategory key={key} menucategory={item} />
                ))}
            </div>
          </main>
        </>
    );
}

export default RestaurantPage;