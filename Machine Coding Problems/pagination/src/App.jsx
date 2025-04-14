import './App.css'
import React from 'react';
import ProductCard from './Components/ProductCard';
import { useState, useEffect } from 'react';
import { PAGE_SIZE } from './constants';
import Pagination from './Components/Pagination';

function App() {
  
  const PAGE_SIZE = 10;

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json()
    setProducts(json.products);
  }

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts/PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end  = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n); 
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev+1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev-1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !products.length ? (
    <h1>No Products Found</h1>
    ) : (
    <div className="App">
    <h1>Pagination</h1>
    <Pagination 
        goToNextPage={ goToNextPage }
        goToPrevPage={ goToPrevPage }
        handlePageChange={ handlePageChange }
        noOfPages={ noOfPages }
        currentPage={ currentPage }
    />
    <div className="product-container">
      {products.slice(start, end).map((p) => (
      <ProductCard key={p.id} image={p.thumbnail} title={ p.title } />
    ))}
    </div>
    </div>
    )
}

export default App
