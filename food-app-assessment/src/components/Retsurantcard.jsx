import { useNavigate } from 'react-router-dom';

function RestaurantCard({ restaurant, onDelete, isAdmin }) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/admin/restaurants/update`, { state: { restaurant } });
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${restaurant.restaurantName}?`)) {
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
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;