// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => (
  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
    <div
      className="card h-100 shadow-sm "
      style={{ borderRadius: '10px', overflow: 'hidden' }}
    >
      <img
        src={product.image}
        className="card-img-top p-2 border-bottom"
        alt={product.title}
        style={{ height: '200px', objectFit: 'contain', loading:'lazy' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.title}</h5>
        
        <p className="card-text text-muted mb-2 ">
          Category:<small> {product.category}</small>
        </p>
        <div className="d-flex justify-content-between"> 
          <p className='text-success ms-2 fw-bold'> ${product.price}</p>
        <p className=''>
                <strong className='text-muted'></strong>{' '}
                <span className="badge text-black">
                ⭐ {product.rating?.rate} / 5 
                </span>
              </p>
        </div>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <button
            className="btn btn-primary btn-sm addCart"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="btn btn-outline-secondary btn-sm fw-bold">
            View Details
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;