import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerRestCard from "./ShimmerRestCard";
import { RESTAURANT_LIST_URL } from "../constants";

const Body = () => {
  
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredrRestaurants, setFilteredrRestaurants] = useState([]);
  
  const [searchKeyword, setSearchKeyword] = useState("");
  // restaurantsList.length = 0;
  const filterTopRated = () => {
    const filteredRestaurants = filteredrRestaurants.filter((rest) => rest.info.avgRating > 4.2 );
    setFilteredrRestaurants(filteredRestaurants);
  };
  
  const fetchRestaurants = async() =>{
    const result = await fetch(RESTAURANT_LIST_URL);
    const restaurants = await result.json();
    const finalResult = restaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantsList(finalResult);
    setFilteredrRestaurants(finalResult);
  }

  const searchRestaurant = () => {
    // if(!searchKeyword) return;
    const searchedResto = restaurantsList.filter((res)=> {
      return res?.info?.name?.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    setFilteredrRestaurants(searchedResto);
  }
  
  useEffect(() => { fetchRestaurants() },
    []
  );

  
    return (
      <main>
        <h1 styled="text-align: center; margin-bottom: 20px;">Explore Restaurants 
          <small> (Total : {filteredrRestaurants?.length})</small>
        </h1>

        <div className="top-search">
          <div className="filter-btn">
            <button onClick={filterTopRated}>Filter Top Rated</button>
          </div>

          <div className="search">
            <input type="text" placeholder="Seach restaurant" value={searchKeyword} onChange={(e)=>setSearchKeyword(e.target.value)} /> 
            <input type="button" onClick={searchRestaurant} value="Search" /> 
          </div>
        </div>

        <hr />
        <br/>
        <div className="restaurant-container">
          {(filteredrRestaurants?.length ===0) ?
            (
              <ShimmerRestCard />
            )
            :
            filteredrRestaurants?.map((restaurant)=> {
              return <RestaurantCard key={restaurant.info.id} restData={restaurant} />
            })
          }
        </div>
      </main>
    
    );
}

export default Body;