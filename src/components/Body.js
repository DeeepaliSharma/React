import RestaurantCard from "./RestaurantCard";
//import resList from "../utils.js/mockdatafile";
import { useState  ,useEffect} from "react";
import Shimmer from "./Shimmer";
  

 const Body = () =>
    {

        const [restaurantList , setrestaurantList] = useState([]);
        const [searchtext , setsearchtext] =useState("");
        useEffect (()=> {
            fetchData();
        },[]);

        const fetchData =async () =>{
            const data =  await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
       // Optinal chaining
       setrestaurantList (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
      // Conditional rendering
       
        return (restaurantList.length === 0)? <Shimmer/> : (
            <div className="body">         
           
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value ={searchtext}
                 onChange={(e)=>{ setsearchtext  (e.target.value);

                }}>                                     
                    
                    </input> 
                   
                <button onClick={()=>{
                   

                    const serachfilter = restaurantList.filter(
                        (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                        setrestaurantList(serachfilter);

                }}>Search</button>
                </div>    
                <button className="filter-btn" onClick= {() => 
                    {const filteredlist  = restaurantList.filter(
                        (res) => res.info.avgRating > 4);
                        setrestaurantList(filteredlist);
                        } }> 
                  Top rated Restaurants  </button>   
           </div>
            <div className="res-container">
            {
                    restaurantList.map((restaurant) =>(
                        <RestaurantCard key ={restaurant.info.id} resData={restaurant} />
                    ))
                   }
            </div>
            </div>

        );
    };

    export default Body;
