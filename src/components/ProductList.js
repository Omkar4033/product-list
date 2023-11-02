import React, { useState } from 'react';
import Product from './Product';
import {
  ProductListContainer,
  ProductListTitle,
} from '../styles/ProductListStyles';

const ProductList = ({ products,currentPage,productsPerPage }) => {
   // Change this to the desired number of items per page

  // Calculate the index range for the items to display
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <ProductListContainer>
      
      {displayedProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
