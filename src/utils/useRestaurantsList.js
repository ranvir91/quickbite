import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "../constants";

const useRestaurantList = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
      fetchRestaurants()
    }, [] );
    
    const fetchRestaurants = async() =>{
        const result = await fetch(RESTAURANT_LIST_URL);
        const restaurants = await result.json();
        const finalResult = restaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantsList(finalResult);
        setFilteredRestaurants(finalResult);
    };

    const filterTopRated = () => {
        const filteredRestaurants = restaurantsList.filter((rest) => rest.info.avgRating > 4.2 );
        setFilteredRestaurants(filteredRestaurants);
    };

    return { restaurantsList, filteredRestaurants, filterTopRated };
}

export default useRestaurantList;