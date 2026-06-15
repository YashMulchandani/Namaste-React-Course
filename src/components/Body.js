import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./shimmerUI";

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
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7051886&lng=75.8570266&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();

      console.log(json);

      const restaurants =
        json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants || [];
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
            <RestaurantCard
                key={restaurant?.info?.id}  // fallback to index if id is missing
                info={restaurant?.info}
            />
            ))
        )}
        </div>
    </div>
  );
};

export default Body;