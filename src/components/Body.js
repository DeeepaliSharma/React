import RestaurantCard from "./RestaurantCard";
//import resList from "../utils.js/mockdatafile";
import { useState  ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { APP_API } from "../utils.js/constants";
import useOnlineStatus from "../utils.js/useOnlineStatus";
  

 const Body = () =>
    {

        const [restaurantList , setrestaurantList] = useState([]);
        const [filteredrestaurantList ,setfilteredrestaurantList] = useState([]);
        const [searchtext , setsearchtext] =useState("");
        useEffect (()=> {
            fetchData();
        },[]);

        const fetchData =async () =>{
            const data =  await fetch (APP_API);
        
        const json = await data.json();
       // Optinal chaining
             setrestaurantList (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
             setfilteredrestaurantList (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
      // Conditional rendering

      const onlineStatus = useOnlineStatus();

      if (onlineStatus=== false) return <h1>Look like you are offline. Please check your Internet connection.</h1>
       
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
                        setfilteredrestaurantList(serachfilter);

                }}>Search</button>
                </div>    
                <button className="filter-btn" onClick= {() => 
                    {const filteredlist  = restaurantList.filter(
                        (res) => res.info.avgRating > 4);
                        setfilteredrestaurantList(filteredlist);
                        } }> 
                  Top rated Restaurants  </button>   
           </div>
            <div className="res-container">
            {
                    filteredrestaurantList.map((restaurant) =>(
                         <Link key ={restaurant.info.id} to ={"/restaurant/" +restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                         </Link> 
                    ))
                   }
            </div>
            </div>

        );
    };

    export default Body;
