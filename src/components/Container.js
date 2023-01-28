import { useEffect, useState } from "react";
import { foodItems, imageUrl } from "../common/config";
export default Container = function () {
  const [restaurant, setRestaurant] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredReasturant, setfilteredReasturant] = useState(restaurant);
  useEffect(() => {
    getAllRestaurent();
  }, []);

  const getAllRestaurent = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.501791339041652&lng=78.35430248557141&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData?.data?.cards[2].data?.data?.cards);
    setRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
    setfilteredReasturant(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  const searchHandler = function(search, restaurant){
    setfilteredReasturant(restaurant.filter(val=> val?.data?.name?.includes(search)));
  }
  return (
    <div className="container">
      <input type='text' 
      value={search}
      onChange={(e) =>setSearch(e.target.value)}/> 
      <button type="button" onClick={()=>searchHandler(search, restaurant)}>Search</button>
      {filteredReasturant.map((foodItem) => (
        <div className="card" key={foodItem?.data?.id}>
          <img className="cardImage" src={imageUrl + foodItem?.data?.cloudinaryImageId} alt="loading.." />
          <h3>{foodItem?.data?.name}</h3>
          <h4>{foodItem?.data?.cuisines[0]}</h4>
          <h4>{foodItem?.data?.avgRating}</h4>
        </div>
      ))}
    </div>
  );
};
