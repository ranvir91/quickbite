import React from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_IMAGE_URL } from "../constants";

const RestaurantCard = (props) => {

    const {name, avgRating, cuisines, cloudinaryImageId, costForTwo, areaName,
        sla, id
    } = props.restData.info;

    return (
        <div className="restaurant-card">
            <img src={RESTAURANT_IMAGE_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <p>{avgRating} ⭐  | {sla.slaString}</p>
            <p>Cuisine: {cuisines.join(", ")}</p>
            <Link to={`./restaurant/${id}`} >Details</Link>
            {/* <a href={"./restaurant/"+ id + "/" + name.toLowerCase().replace(" ", "-")} >Details</a> */}
            {/* <button class="add-to-cart-btn">Add to Cart</button> */}
        </div>
    );
}

export default RestaurantCard;