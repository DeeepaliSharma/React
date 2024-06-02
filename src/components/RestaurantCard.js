const  RestaurantCard =(props) =>
    {
        const {resData}= props;
        const {name, cuisines ,cloudinaryImageId,avgRating,costForTwo} =resData?.info;
        

        return(
            <div className="res-card" style={{backgroundColor : "lightgray"}}>
                <img className="res-logo" alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150/" +cloudinaryImageId} />
            
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            
            
            
            
            </div>

          

        );
    };

    export default RestaurantCard;