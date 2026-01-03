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

  const [form, setForm] = useState({
    restaurantName: '',
    address: '',
    type: 'Rajasthani',
    parkingLot: true,
    image: ''
  });

  useEffect(() => {
    if (restaurant) {
      setForm({
        restaurantName: restaurant.restaurantName,
        address: restaurant.address,
        type: restaurant.type,
        parkingLot: restaurant.parkingLot,
        image: restaurant.image
      });
    } else {
      navigate('/admin/dashboard');
    }
  }, [restaurant, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'parkingLot' ? value === 'true' : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.restaurantName && form.address) {
      updateRestaurant(restaurant.restaurantID, form);
      navigate('/admin/dashboard');
    }
  };

  const cancel = () => {
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
            <label>Restaurant Name </label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              value={form.restaurantName}
              onChange={handleChange}
              required
              placeholder="Enter restaurant name"
            />
          </div>

          <div>
            <label>Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              placeholder="Enter address"
            />
          </div>

          <div>
            <label>Type *</label>
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            >
              {RESTAURANT_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Parking Availability *</label>
            <select
              id="parkingLot"
              name="parkingLot"
              value={form.parkingLot.toString()}
              onChange={handleChange}
              required
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>

          <div>
            <label>Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <button type="submit">Update Restaurant</button>
            <button type="button" onClick={cancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateRestaurant;
