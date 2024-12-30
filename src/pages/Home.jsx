import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = ({ addToCart }) => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Show "Loading..." text
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Hide "Loading..." text
      }
    };

    fetchProducts();
  }, []);




  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'all' || product.category === category)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low-high') return a.price - b.price;
    if (sortOption === 'price-high-low') return b.price - a.price;
    if (sortOption === 'rating-high-low') return b.rating.rate - a.rating.rate;
    return 0;
  });

  // Adding Loading effect
  if (loading) return (
    <div className="container d-flex justify-content-center align-items-center" style={{fontSize:"27px",height: "90vh" }}>
      <div class="loading loading01">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      <div className=" row mb-4 d-flex gap-2 justify-content-center">
        <div className="col-9 col-md-6">
          <input
            type="text"
            className="form-control me-2 "
            placeholder="Search Product...!"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-4 col-sm-3 col-md-2">
          <select
            className="form-select me-2"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewellery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>

        <div className="col-4 col-sm-3 col-md-2">
          <select
            className="form-select"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating-high-low">Rating: High to Low</option>
          </select>
        </div>
      </div>
      <div className="row">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />

        ))}
      </div>

    </div>
  );
};

export default Home;
