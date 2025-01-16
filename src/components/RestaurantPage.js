import React, { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import useRestResult from "../utils/useRestResult";

const RestaurantPage = () => {
    const [restResult, setRestResult] = useState([]);
    const [restMenus, setRestMenus] = useState([]);
    const [restMenusRecom, setRestMenusRecom] = useState([]);
    

    const fetchRestaurant = useRestResult();

    console.log(fetchRestaurant);
    

    useEffect(() => {
        fetchRestaurant();
    }, []);
    
    return (
        <>
          <main className="container">
            <h1>Restaurant Details</h1>
            <hr/>
            <div className="restaurant-info">
                {/* <h2>{name}</h2>
                <p>Cuisine: {cuisines}</p>
                <p>Rating: {avgRating} ⭐</p>
                <p>Address: {areaName}, {locality}</p> */}
                <hr/>
            </div>

            <div className="menu-container">
                {/* <div className="restaurant-info">
                <h2>Menu</h2>
                </div> */}

                {/* {console.log(restMenus.length)} */}
                {(restMenusRecom?.length ===0) ? <h3>Loading Items...</h3> : null}

                {restMenusRecom?.map((item) => (
                     <MenuItemCard key={item.card.info.id} menuitem={item} />
                ))}
            </div>
          </main>
        </>
    );
}

export default RestaurantPage;