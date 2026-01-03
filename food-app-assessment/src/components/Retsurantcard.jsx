import { useNavigate } from 'react-router-dom';

function RestaurantCard({ restaurant, onDelete, isAdmin }) {
  const navigate = useNavigate();

  const update = () => {
    navigate(`/admin/restaurants/update`, { state: { restaurant } });
  };

  const deleteItem = () => {
    if (window.confirm(`Delete ${restaurant.restaurantName}?`)) {
      onDelete(restaurant.restaurantID);
    }
  };

  return (
    <div>
      <img 
        src={restaurant.image} 
        alt={restaurant.restaurantName}
      />
      <div>
        <h3>{restaurant.restaurantName}</h3>
        <p><strong>Address:</strong> {restaurant.address}</p>
        <p><strong>Type:</strong> {restaurant.type}</p>
        <p><strong>Parking:</strong> {restaurant.parkingLot ? 'Available' : 'Not Available'}</p>
        
        {isAdmin && (
          <div>
            <button onClick={update}>Update</button>
            <button onClick={deleteItem}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;