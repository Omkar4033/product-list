import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import Pagination from './components/Pagination';
import products from './data/products';

import './App.css'; // Import the CSS file

const App = () => {
  const [productData, setProductData] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('lowest');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const handleFilterChange = (category) => {
    setFilter(category);
    filterProducts(category);
  };

  const handleSortChange = (sorting) => {
    setSort(sorting);
    sortProducts(sorting);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filterProducts = (category) => {
    if (category === 'All') {
      setFilteredProducts(productData);
    } else {
      const filtered = productData.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };
  

  const sortProducts = (sorting) => {
    const sorted = [...filteredProducts];
    if (sorting === 'lowest') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sorting === 'highest') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  return (
    <div className="App">
      <h1>Electronic Products</h1>
      <div className='FilterAndSort'>
      <Filter handleFilter={handleFilterChange} />
      <Sort handleSort={handleSortChange} />

      </div>
      <h3>Products</h3>
      <div className="page-wrapper">
        <ProductList products={filteredProducts} currentPage={currentPage} productsPerPage={productsPerPage} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default App;
