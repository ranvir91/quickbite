import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS_URL } from "../constants";

const useRestaurantDetail  = (resId) => {
    
    const [restResult, setRestResult] = useState([]);
    const [restMenus, setRestMenus] = useState([]);

    // const [restMenusRecom, setRestMenusRecom] = useState([]);

    // const restmenu = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // const restmenuRecommended = restmenu.filter((item) => {
    //     if(item?.card?.card?.title?.toLowerCase() === "recommended") {
    //         return item?.card?.card?.itemCards;
    //     }
    // });

    // let drinksArr = restmenu.filter((item) => item?.card?.card?.title?.toLowerCase() === "drinks");
    // drinksArr = drinksArr[0]?.card?.card;

    // const itemCards = restmenuRecommended[0]?.card?.card?.itemCards;
    // if(itemCards?.length > 0) {
    //     const data = itemCards;
    //     setRestMenusRecom(data);
    // }


    // let menus = restmenu;
    useEffect(() => {
        fetchRestaurant(); // fetch restaurant details
    }, []);

    const fetchRestaurant = async () => {
        const res = await fetch(RESTAURANT_DETAILS_URL + resId);
        const data = await res.json();
        const restdata = data?.data?.cards[2]?.card?.card?.info; // restaurant details
        
        const restmenu = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // console.log(restmenu);

        const restmenuFiltered = restmenu.filter((item)=> {
            if(item?.card?.card?.itemCards) {
                return item?.card?.card?.itemCards;
            }
        }, []);
        
        // const restmenuRecommended = restmenuFiltered.filter((item) => {
        //     if(item?.card?.card?.title?.toLowerCase() === "recommended") {
        //         return item?.card?.card?.itemCards;
        //     }
        // });
        const categorisedMenu = restmenuFiltered.map((item)=> {
            return {
                title: item?.card?.card?.title,
                items: item?.card?.card?.itemCards.map((t) => {
                    return {
                        id: t.card.info.id,
                        name: t.card.info.name,
                        description: t.card.info.description,
                        price: t.card.info.defaultPrice,
                        imageId: t.card.info.imageId,
                        isVeg: t.card.info.isVeg
                    }
                })
            }
        });
        // console.log(categorisedMenu);
        
        setRestResult(restdata);
        setRestMenus(categorisedMenu);
    }

    return {restResult, restMenus};
}


export default useRestaurantDetail;