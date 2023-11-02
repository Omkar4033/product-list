// Product.js
import React from 'react';
import { ProductCard, ProductImage, ProductTitle, ProductDescription, ProductPrice } from '../styles/ProductStyles';

const Product = ({ product }) => {
  return (
    <ProductCard>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>₹ {product.price}</ProductPrice>
    </ProductCard>
  );
};

export default Product;
