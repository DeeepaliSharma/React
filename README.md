# My react code ✨🚀


  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150/" +resData.info.cloudinaryImageId} />



    {resList.map ((restaurant)=>(
                        <RestaurantCard key = {restaurant.info.id} resdata ={restaurant} />
                    ))}


                     {
                    resList.map((restaurant) =>(
                        <RestaurantCard resData={restaurant} />
                    ))
                   }