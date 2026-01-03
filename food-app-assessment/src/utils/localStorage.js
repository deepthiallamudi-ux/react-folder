// localStorage utility functions for restaurant data management

const STORAGE_KEY = 'evalData';

// Get all restaurants from localStorage
export const getRestaurants = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

// Save restaurants to localStorage
export const saveRestaurants = (restaurants) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(restaurants));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

// Add a new restaurant
export const addRestaurant = (restaurant) => {
  const restaurants = getRestaurants();
  const newId = restaurants.length > 0 
    ? Math.max(...restaurants.map(r => r.restaurantID)) + 1 
    : 1;
  
  const newRestaurant = {
    ...restaurant,
    restaurantID: newId
  };
  
  restaurants.push(newRestaurant);
  saveRestaurants(restaurants);
  return newRestaurant;
};

// Update a restaurant
export const updateRestaurant = (id, updatedData) => {
  const restaurants = getRestaurants();
  const index = restaurants.findIndex(r => r.restaurantID === id);
  
  if (index !== -1) {
    restaurants[index] = { ...restaurants[index], ...updatedData };
    saveRestaurants(restaurants);
    return restaurants[index];
  }
  return null;
};

// Delete a restaurant
export const deleteRestaurant = (id) => {
  const restaurants = getRestaurants();
  const filteredRestaurants = restaurants.filter(r => r.restaurantID !== id);
  saveRestaurants(filteredRestaurants);
  return filteredRestaurants;
};

// Get a single restaurant by ID
export const getRestaurantById = (id) => {
  const restaurants = getRestaurants();
  return restaurants.find(r => r.restaurantID === parseInt(id));
};
