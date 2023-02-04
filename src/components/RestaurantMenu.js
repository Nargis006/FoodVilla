import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {imageUrl} from "../common/config";
const RestaurantMenu = () => {
  const { Id } = useParams();

  //set usestate initial value null not {} as 1st it will render with empty object and try to get value from an empty object.
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  const getRestaurantMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.5169014&lng=78.3428304&menuId=" +
        Id
    );
    const json = await data.json();
    setRestaurant(json?.data);
  };

  //1st when it renders useEffect didnot cal so value will be null useEffect rerender the comp with value from api
  if(restaurant == null) return;
  return (
    <div>
        <div>
            <h1>Restaurant id: {Id}</h1>
            <h2>{restaurant.name}</h2>
            <img src={imageUrl + restaurant?.cloudinaryImageId}/>
            <h3>Area - {restaurant.area}</h3>
            <h3>City - {restaurant.city}</h3>
            <h3>Avg rating - {restaurant.avgRating}</h3>
            <h3>{restaurant.costForTwoMsg}</h3>
        </div>
        <div className="Menu">
            <ul>
              if(restaurant){
                //Array of object can't use map directly 
                Object.values(restaurant?.menu?.items).map((item)=>
                <li className="flex flex-1" key={item?.id}>{item?.name}</li>)
              }
            </ul>
        </div>
    </div>
  );
};

export default RestaurantMenu;
