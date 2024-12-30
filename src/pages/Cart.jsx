// src/pages/Cart.jsx
import React from 'react';

const Cart = ({ cart, updateQuantity, total }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty</h4>
          <p>Add some products to the cart to see them here!</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="list-group">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="list-group-item d-flex align-items-center mb-3 shadow-sm"
                  style={{ borderRadius: '10px' }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      height: '100px',
                      width: '100px',
                      objectFit: 'contain',
                      borderRadius: '10px',
                    }}
                    className="me-3"
                  />
                  <div className="flex-grow-1 text-truncate">
                    <h5 className="mb-1 me-5 text-truncate">{product.title}</h5>
                    <p className="mb-2 text-muted">
                      <strong>Price:</strong>  ${product.price}
                    </p>
                    <p className="mb-0 text-muted">
                      <strong>Quantity:</strong>{' '}
                      <span className="badge bg-primary">{product.quantity}</span>
                    </p>
                  </div>
                  <div className="ms-auto d-flex flex-column align-items-center bg-white  py-3">
                    <button
                      className="btn btn-primary btn-sm addCart mb-2 "
                      onClick={() => updateQuantity(product, 1)}
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm "
                      onClick={() => updateQuantity(product, -1)}
                    >
                      <i class="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4 mb-5">
            <div className="card shadow-sm p-3" style={{ borderRadius: '10px' }}>
              <h4 className="card-title">Cart Summary</h4>
              <p className="card-text">
                <strong>Total Items:</strong> {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </p>
              <p className="card-text">
                <strong>Total Price:</strong> ${total.toFixed(2)}
              </p>
              <button className="btn btn-primary w-100 mt-3 addCart">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;