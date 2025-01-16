import { useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAILS_URL } from "../constants";

const useRestResult  = async () => {
    
    const [restResult, setRestResult] = useState([]);
    const [restMenusRecom, setRestMenusRecom] = useState([]);
    const { resId } = useParams();

    const res = await fetch(RESTAURANT_DETAILS_URL + resId);
    const data = await res.json();
    const restdata = data?.data?.cards[2]?.card?.card?.info;
    const restmenu = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const restmenuRecommended = restmenu.filter((item) => {
        if(item?.card?.card?.title?.toLowerCase() === "recommended") {
            return item?.card?.card?.itemCards;
        }
    });

    let drinksArr = restmenu.filter((item) => item?.card?.card?.title?.toLowerCase() === "drinks");
    drinksArr = drinksArr[0]?.card?.card;

    const itemCards = restmenuRecommended[0]?.card?.card?.itemCards;
    if(itemCards?.length > 0) {
        const data = itemCards;
        setRestMenusRecom(data);
    }

    let menus = restmenu;

    setRestResult(restdata);

    return restResult;
}


export default useRestResult;