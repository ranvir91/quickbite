import React, { useEffect, useState } from "react";
import RestaurantCard, { labeledRestaurantCard } from "./RestaurantCard";
import ShimmerRestCard from "./ShimmerRestCard";
import useRestaurantList from "../utils/useRestaurantsList"; // custom hook restaurants list

const Body = () => {
  
  const restResult = useRestaurantList();
  const filteredRestaurants = restResult.filteredRestaurants;
  const restaurantsList = restResult.restaurantsList;
  const filterTopRated = restResult.filterTopRated;
  const [searchKeyword, setSearchKeyword] = useState('');

  const RestaurantCardPromoted = labeledRestaurantCard(RestaurantCard); // HOC

  const searchRestaurant = () => {
    const searchedResto = restaurantsList.filter((res)=> {
      return res?.info?.name?.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    // setFilteredRestaurants(searchedResto);
  };

  
    return (
      <main>
        {/* <h1 class="text-3xl font-bold underline"> Hello world! </h1> */}
        <h1 className="px-5 py-2 w-full bg-gray-100">Explore Restaurants 
          <small> (Total : {filteredRestaurants?.length})</small>
        </h1>

        <div className="flex">
          <div className="">
            <button className="m-2 p-2 px-4 float-right rounded-md bg-green-400 text-white flex" onClick={filterTopRated}>Filter Top Rated</button>
          </div>

          <div className="mx-5 text-center">
            <input className="p-2 border-2" type="text" placeholder="Seach restaurant" value={searchKeyword} 
            onChange={(e)=>setSearchKeyword(e.target.value)} /> 
            <input className="m-2 p-2 px-4 rounded-md bg-green-400 text-white" type="button" onClick={searchRestaurant} value="Search" /> 
          </div>
        </div>

        <hr />
        <br/>
        <div className="flex flex-wrap">
          {(filteredRestaurants?.length ===0) ?
            (
              <ShimmerRestCard />
            )
            :
            filteredRestaurants?.map((restaurant, index)=> {
              if(index==2) {
                // console.log(index);                
                return <RestaurantCardPromoted key={restaurant.info.id} restData={restaurant} />
              } else {
                return <RestaurantCard key={restaurant.info.id} restData={restaurant} />
              }
            })
          }
        </div>
      </main>
    
    );
}

export default Body;