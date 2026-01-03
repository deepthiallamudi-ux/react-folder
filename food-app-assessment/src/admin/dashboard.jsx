import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";
import RestaurantCard from "../components/Retsurantcard.jsx";
import SearchFilter from "../components/searchFilter.jsx";
import { getRestaurants, addRestaurant, deleteRestaurant, initializeSampleData } from "../utils/localStorage.js";

function AdminDashboard() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [parking, setParking] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    filterData();
  }, [data, search, type, parking]);

  const loadData = () => {
    const restaurants = initializeSampleData();
    setData(restaurants);
  };

  const addNew = (restaurant) => {
    addRestaurant(restaurant);
    loadData();
  };

  const deleteItem = (id) => {
    deleteRestaurant(id);
    loadData();
  };

  const filterData = () => {
    let result = [...data];

    if (search) {
      result = result.filter(item =>
        item.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
        item.address.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (type) {
      result = result.filter(item => item.type === type);
    }

    if (parking !== '') {
      result = result.filter(item => item.parkingLot === (parking === 'true'));
    }

    setFilteredData(result);
  };

  return (
    <div>
      <Sidebar onAddRestaurant={addNew} />
      
      <div>
        <h1>Admin Dashboard</h1>
        
        <SearchFilter
          searchQuery={search}
          onSearchChange={setSearch}
          selectedType={type}
          onTypeChange={setType}
          parkingFilter={parking}
          onParkingChange={setParking}
        />

        <div>
          {filteredData.length === 0 ? (
            <p>No restaurants found</p>
          ) : (
            filteredData.map(item => (
              <RestaurantCard
                key={item.restaurantID}
                restaurant={item}
                onDelete={deleteItem}
                isAdmin={true}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;