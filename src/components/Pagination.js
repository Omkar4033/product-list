import React from 'react';
import {
  PaginationContainer,
  PageNumber,
  NavigationButton,
} from '../styles/PaginationStyles'; // Import the styles

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <PageNumber
        key={i}
        className={i === currentPage ? 'current' : ''}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </PageNumber>
    );
  }

  return (
    <PaginationContainer>
      <NavigationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </NavigationButton>
      {pages}
      <NavigationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </NavigationButton>
    </PaginationContainer>
  );
};

export default Pagination;
