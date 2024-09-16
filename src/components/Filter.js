import React from 'react';

const Filter = ({ locationFilter, setLocationFilter, jobTypeFilter, setJobTypeFilter }) => {
  return (
    <div>
      <select onChange={(e) => setLocationFilter(e.target.value)}>
        <option value="">All Locations</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
      </select>
      
      <select onChange={(e) => setJobTypeFilter(e.target.value)}>
        <option value="">All Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
      </select>
    </div>
  );
};

export default Filter;
