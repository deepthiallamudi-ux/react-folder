import { useState } from 'react';

const RESTAURANT_TYPES = [
  'Rajasthani',
  'Gujarati',
  'Mughlai',
  'Jain',
  'Thai',
  'North Indian',
  'South Indian'
];

const DEFAULT_IMAGE = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg";

function Sidebar({ onAddRestaurant }) {
  const [formData, setFormData] = useState({
    restaurantName: '',
    address: '',
    type: 'Rajasthani',
    parkingLot: true,
    image: DEFAULT_IMAGE
  });

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
      onAddRestaurant(formData);
      // Reset form
      setFormData({
        restaurantName: '',
        address: '',
        type: 'Rajasthani',
        parkingLot: true,
        image: DEFAULT_IMAGE
      });
    }
  };

  return (
    <div>
      <h2>Add Restaurant</h2>
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

        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default Sidebar;