import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
export default Container = function () {
  const [restaurant, setRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredReasturants, setfilteredReasturants] = useState([]);
  useEffect(() => {
    getAllRestaurent();
  }, []);

  const getAllRestaurent = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.501791339041652&lng=78.35430248557141&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
    setfilteredReasturants(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  const changeHandler = (e) =>{
    setSearch(e.target.value);
  }
  
  useEffect(()=>{
    setfilteredReasturants(
      restaurant.filter((val) =>
        val?.data?.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  },[search]);

  if (!filteredReasturants) return null;
  if (filteredReasturants?.length === 0) return <h1>No record found!</h1>;
  return restaurant?.length === 0 ? (
    <h1>Loading......</h1>
  ) : (
    <>
      <div className="flex search-container p-1 my-1 justify-end">
        <input
          type="text"
          placeholder="Search restaurants or food items"
          value={search}
          onChange={changeHandler}
          className="search w-1/2 p-3 m-1
           border-red-700 border-2
           rounded-md"
        />
        <button
          type="button"
          onClick={() => searchHandler(search, restaurant)}
          className="search-btn bg-red-700 hover:bg-red-500 p-3 w-28 rounded-md
           text-white"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredReasturants.map((restaurant) => (
          //Link should have the key not restaurent card
          <Link
            to={"/restaurant/" + restaurant?.data?.id}
            key={restaurant?.data?.id}
          >
            <RestaurantCard {...restaurant?.data}/>
          </Link>
        ))}
      </div>
    </>
  );
};
