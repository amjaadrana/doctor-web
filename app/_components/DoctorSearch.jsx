"use client"
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
    'Neurologist',
    'Orthopedic Surgeon',
    'Gynecologist',
    'Ophthalmologist',
    'Psychiatrist',
    'Cardiologist',
    'Urologist',
    'Oncologist'
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Find a Doctor</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Doctors in {selectedCategory}</h3>
          <ul className="space-y-2">
            {searchResults.map((doctor) => (
              <li key={doctor.id} className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                {doctor.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DoctorSearch;
