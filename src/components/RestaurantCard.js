import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ info }) => {
  if (!info) return null;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla,
  } = info;

  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-image"
      />

      <h3>{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>⭐ {avgRating}</p>
      <p>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCard;