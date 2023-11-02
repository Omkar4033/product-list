import styled from 'styled-components';

export const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Add transition for transform property */

  &:hover {
    transform: scale(1.05); /* Add a scale-up effect on hover */
  }

  @media (min-width: 768px) {
    padding: 20px;
    margin: 20px;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  transition: transform 0.3s ease; /* Add transition for transform property */

  &:hover {
    transform: scale(1.1); /* Add a scale-up effect on hover */
  }

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  transition: color 0.3s ease; /* Add transition for text color */

  &:hover {
    color: #007bff; /* Change text color on hover */
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  margin: 10px 0;
  transition: color 0.3s ease; /* Add transition for text color */

  &:hover {
    color: #007bff; /* Change text color on hover */
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease; /* Add transition for text color */

  &:hover {
    color: #007bff; /* Change text color on hover */
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
