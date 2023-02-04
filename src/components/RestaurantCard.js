import { imageUrl } from "../common/config";
export default RestaurantCard = (data) => {
  const foodDetailshandler = () => {};
  return (
    <div className="m-3 p-3 shadow-md w-56" onClick={() => foodDetailshandler}>
      <img
        className="cardImage"
        src={imageUrl + data?.cloudinaryImageId}
        alt="loading.."
      />
      <h3 className="font-bold p-3">{data?.name}</h3>
      <h4 className="pl-3">{data?.cuisines[0]}</h4>
      <h4 className="pl-3">{data?.avgRating}</h4>
    </div>
  );
};
