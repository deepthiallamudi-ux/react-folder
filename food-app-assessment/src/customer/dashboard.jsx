import { useState, useEffect } from 'react';
import RestaurantCard from "../components/Retsurantcard.jsx";
import SearchFilter from "../components/searchFilter.jsx";
import { getRestaurants, initializeSampleData } from "../utils/localStorage.js";

function CustomerDashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [parkingFilter, setParkingFilter] = useState('');

  // Load restaurants from localStorage on mount
  useEffect(() => {
    loadRestaurants();
  }, []);

  // Apply filters whenever restaurants or filter values change
  useEffect(() => {
    applyFilters();
  }, [restaurants, searchQuery, selectedType, parkingFilter]);

  const loadRestaurants = () => {
    const data = initializeSampleData();
    setRestaurants(data);
  };

  const applyFilters = () => {
    let filtered = [...restaurants];

    // Search filter (name or address)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(restaurant =>
        restaurant.restaurantName.toLowerCase().includes(query) ||
        restaurant.address.toLowerCase().includes(query)
      );
    }

    // Type filter
    if (selectedType) {
      filtered = filtered.filter(restaurant => restaurant.type === selectedType);
    }

    // Parking filter
    if (parkingFilter !== '') {
      const hasParking = parkingFilter === 'true';
      filtered = filtered.filter(restaurant => restaurant.parkingLot === hasParking);
    }

    setFilteredRestaurants(filtered);
  };

  return (
    <div>
      <h1>Customer Dashboard</h1>
      
      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        parkingFilter={parkingFilter}
        onParkingChange={setParkingFilter}
      />

      <div>
        {filteredRestaurants.length === 0 ? (
          <p>No restaurants found</p>
        ) : (
          filteredRestaurants.map(restaurant => (
            <RestaurantCard
              key={restaurant.restaurantID}
              restaurant={restaurant}
              onDelete={() => {}}
              isAdmin={false}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CustomerDashboard;