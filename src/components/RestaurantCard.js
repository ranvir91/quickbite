import React from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_IMAGE_URL } from "../constants";

const RestaurantCard = (props) => {

    const {name, avgRating, cuisines, cloudinaryImageId, costForTwo, areaName,
        sla, id
    } = props.restData.info;

    return (
        <div className="m-2 p-1 flex-wrap w-[245px] bg-gray-50 text-left rounded-md hover:bg-gray-200">
            <img className="text-center flex" src={RESTAURANT_IMAGE_URL + cloudinaryImageId} />
            <h3><strong>{name}</strong></h3>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <p>{avgRating} ⭐  | {sla.slaString}</p>
            <p className="text-left">Cuisine: {cuisines.join(", ")}</p>
            <Link className="bg-green-400 m-1 px-4 p-1 text-white rounded-md"
             to={`./restaurant/${id}`} >Details</Link>
            {/* <a href={"./restaurant/"+ id + "/" + name.toLowerCase().replace(" ", "-")} >Details</a> */}
            {/* <button class="add-to-cart-btn">Add to Cart</button> */}
        </div>
    );
}

export const labeledRestaurantCard = (RestaurantCard) => {
    return (props) => {
      return (
        <div className="relative">
            <label className="bg-black text-white px-1 rounded-sm opacity-50 absolute top-3">Promoted</label>
            <RestaurantCard {...props} />
        </div>
      );
    }
}

export default RestaurantCard;