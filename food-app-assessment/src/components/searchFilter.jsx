import { useRef, useEffect } from 'react';

const RESTAURANT_TYPES = [
  'Rajasthani',
  'Gujarati',
  'Mughlai',
  'Jain',
  'Thai',
  'North Indian',
  'South Indian'
];

function SearchFilter({ 
  searchQuery, 
  onSearchChange, 
  selectedType, 
  onTypeChange,
  parkingFilter,
  onParkingChange 
}) {
  const searchInput = useRef(null);

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, []);

  return (
    <div>
      <div>
        <div>
          <input
            ref={searchInput}
            type="text"
            placeholder="Search by name or address..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div>
          <select 
            value={selectedType} 
            onChange={(e) => onTypeChange(e.target.value)}
          >
            <option value="">All Types</option>
            {RESTAURANT_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select 
            value={parkingFilter} 
            onChange={(e) => onParkingChange(e.target.value)}
          >
            <option value="">All Parking</option>
            <option value="true">Parking Available</option>
            <option value="false">No Parking</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;