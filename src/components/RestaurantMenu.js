import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [menuData, setMenuData] = useState([]);  // ✅ default to [], not null

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        try {
            const URL = MENU_API + resId;
            const response = await fetch(URL);
            const json = await response.json();
            const restaurantDetials_local = json?.data?.cards[2]?.card?.card?.info;
            const items =
                json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

            setMenuData(items);
            setRestaurantDetails(restaurantDetials_local);
        } catch (err) {
            console.error("Fetch failed:", err);
        }
    };
    const { name, cuisines, costForTwoMessage } = restaurantDetails || {};
    // ✅ Moved inside JSX — only runs after data is available
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines?.join(', ')}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {menuData.map((item) => {
                    const { id, name, price, description, category } = item.card.info;
                    return (
                        <li key={id}>
                            <strong>{name}</strong> — ₹{price / 100}
                            <p>{description}</p>
                            <small>{category}</small>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;