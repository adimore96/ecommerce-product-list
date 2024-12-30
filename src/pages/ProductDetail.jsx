// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return (
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
    <div className="container mt-5">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate('/')}
      >
        <i class="fa-solid fa-chevron-left"></i> Go Back
      </button>

      <div className="card shadow-lg mb-5" style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <div className="row g-0 ">
          {/* Product Image */}
          <div className="col-lg-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid h-100 w-100 p-3"
              style={{
                objectFit: 'contain',
                maxHeight: '400px',
                borderRight: '1px solid #ddd',
              }}
            />
          </div>

          {/* Product Details */}
          <div className="col-lg-6 p-4 d-flex flex-column justify-content-between">
            <div>
              <h2 className="mb-3">{product.title}</h2>
              
              <p>
                <strong className='text-muted'></strong>{' '}
                <span className="badge bg-success">
                ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
                </span>
              </p>

              <p className="text-muted mb-2">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="mb-4">{product.description}</p>
              
             

              <h4 className="text-success mb-3">
                <strong>${product.price.toFixed(2)}</strong>
              </h4>
              
            </div>
            <button
              className="btn btn-primary mt-3 addCart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
