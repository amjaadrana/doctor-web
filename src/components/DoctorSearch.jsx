import React, { useState } from 'react';

const DoctorSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const categories = [
    'Dentist',
    'Heart Specialist',
    'ENT',
    'Pediatrician',
    'Dermatologist',
    // Add more categories as needed
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Simulated search function
    searchDoctors(category);
  };

  const searchDoctors = (category) => {
    // This is a placeholder for the actual search functionality
    // In a real application, you would make an API call here
    const mockResults = [
      { id: 1, name: 'Dr. Smith', category: category },
      { id: 2, name: 'Dr. Johnson', category: category },
      { id: 3, name: 'Dr. Williams', category: category },
    ];
    setSearchResults(mockResults);
  };

  return (
    <div className="doctor-search">
      <h2>Find a Doctor</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="search-results">
          <h3>Doctors in {selectedCategory}</h3>
          <ul>
            {searchResults.map((doctor) => (
              <li key={doctor.id}>{doctor.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DoctorSearch;
