// src/components/Sort.js
import React from 'react';
import { SortContainer, Select } from '../styles/FilterSortStyles'; // Import the styles

const Sort = ({ handleSort }) => {
  const sortingOptions = ['lowest', 'highest'];

  return (
    <SortContainer>
      <label>Sort by Price:   </label>
      <Select onChange={(e) => handleSort(e.target.value)}>
        {sortingOptions.map((option) => (
          <option key={option} value={option}>
            {option === 'lowest' ? 'Lowest Price' : 'Highest Price'}
          </option>
        ))}
      </Select>
    </SortContainer>
  );
};

export default Sort;
