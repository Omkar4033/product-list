import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Default to a single column on smaller screens */
  gap: 20px; /* Adjust the gap as needed */

  @media (min-width: 576px) {
    /* Two columns on screens with a minimum width of 576px */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    /* Three columns on screens with a minimum width of 768px */
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    /* Four columns on screens with a minimum width of 992px */
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    /* Reduce font size for smaller screens */
    font-size: 20px;
  }
`;