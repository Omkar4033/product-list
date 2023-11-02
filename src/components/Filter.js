// Filter.js
import React from 'react';
import { FilterContainer, Select } from '../styles/FilterSortStyles'; // Import the styles

const Filter = ({ handleFilter }) => {
  // ... Your component code

  return (
    <FilterContainer>
      <label>Filter by Category:</label>
      <Select onChange={(e) => handleFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Smartphones">Smartphones</option>
        <option value="Laptops">Laptops</option>
        <option value="Tablets">Tablets</option>
        <option value="TVs">TVs</option>
        <option value="Accessories">Accessories</option>
      </Select>
    </FilterContainer>
  );
};

export default Filter;
