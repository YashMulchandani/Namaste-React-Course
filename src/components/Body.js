import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./shimmerUI";
import { Link } from "react-router-dom";
import { RESTAURANT_API_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        RESTAURANT_API_URL
      );

      const json = await response.json();

      console.log(json);

      // const restaurants =
      //   json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants || [];
      const restaurants =
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(restaurants);
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant?.info?.avgRating > 4
    );

    setFilteredRestaurants(filteredList);
  };

  const handleSearch = () => {
  const query = searchText.toLowerCase();
  const filteredList = listOfRestaurants.filter((restaurant) => {
    const nameMatch = restaurant?.info?.name?.toLowerCase()?.includes(query);
    const cuisineMatch = restaurant?.info?.cuisines?.some((cuisine) =>
      cuisine?.toLowerCase()?.includes(query)
    );
    return nameMatch || cuisineMatch; // single pass, no duplicates
  });
  setFilteredRestaurants(filteredList);
};

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">

      <div className="filter">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          value = {searchText}
          onChange={(e) => {setSearchText(e.target.value)}}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        <button
          className="filter-btn"
          onClick={filterTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {(filteredRestaurants.map((restaurant, index) => (
            <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                <RestaurantCard
                    key={restaurant?.info?.id}  // fallback to index if id is missing
                    info={restaurant?.info}
                />
            </Link>
        )))}
        </div>
    </div>
  );
};

export default Body;