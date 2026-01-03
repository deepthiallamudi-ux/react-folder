import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateRestaurant } from '../utils/localStorage.js';

const RESTAURANT_TYPES = [
  'Rajasthani',
  'Gujarati',
  'Mughlai',
  'Jain',
  'Thai',
  'North Indian',
  'South Indian'
];

function UpdateRestaurant() {
  const location = useLocation();
  const navigate = useNavigate();
  const restaurant = location.state?.restaurant;

  const [formData, setFormData] = useState({
    restaurantName: '',
    address: '',
    type: 'Rajasthani',
    parkingLot: true,
    image: ''
  });

  useEffect(() => {
    if (restaurant) {
      setFormData({
        restaurantName: restaurant.restaurantName,
        address: restaurant.address,
        type: restaurant.type,
        parkingLot: restaurant.parkingLot,
        image: restaurant.image
      });
    } else {
      // If no restaurant data, redirect back to dashboard
      navigate('/admin/dashboard');
    }
  }, [restaurant, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'parkingLot' ? value === 'true' : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.restaurantName && formData.address) {
      updateRestaurant(restaurant.restaurantID, formData);
      navigate('/admin/dashboard');
    }
  };

  const handleCancel = () => {
    navigate('/admin/dashboard');
  };

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <div>
        <h1>Update Restaurant</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="restaurantName">Restaurant Name *</label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              required
              placeholder="Enter restaurant name"
            />
          </div>

          <div>
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter address"
            />
          </div>

          <div>
            <label htmlFor="type">Type *</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              {RESTAURANT_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="parkingLot">Parking Availability *</label>
            <select
              id="parkingLot"
              name="parkingLot"
              value={formData.parkingLot.toString()}
              onChange={handleChange}
              required
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>

          <div>
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <button type="submit">Update Restaurant</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateRestaurant;
