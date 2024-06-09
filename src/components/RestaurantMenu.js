import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";

const RestaurnatMenu =()=>
    {
        const {resInfo} = useRestaurantMenu(resId);
        const { resId } = useParams();
      

       
        if (resInfo.length === 0) return <Shimmer/> 
       
        const  { name,cuisines,costForTwoMessage,avgRating,id}=resInfo?.cards[2]?.card?.card?.info;
       
        const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
        console.log(itemCards);
        if (resInfo === null) return <Shimmer/> 

        return (
            <div className="menu">
                <h1>{name}</h1>
                <h3>{cuisines.join (",")}</h3>
                <h3>{costForTwoMessage}</h3>
                <h3>{avgRating}</h3>
                <h3>{id}</h3>

               
                <ul>
                 {itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name}-
                    {item.card.info.defaultPrice/100||item.card.info.Price/100 ||item.card.info.price/100  ||item.card.info.finalPrice/100}</li>
                 ))}
                    
                    
                </ul>
            </div>
        )
    }


    export default RestaurnatMenu;