# E-Shop Application

This is a simple e-commerce web application built with React and Bootstrap. It fetches product data from the [Fake Store API](https://fakestoreapi.com/) and provides features like product listing, detailed views, cart functionality, filtering, sorting, and more.

## Features Implemented

### 1. **Product Listing**
- Displays all products fetched from the API.
- Shows product image, title, category, and price.

### 2. **Product Details Page**
- Displays detailed information about a specific product, including:
  - Full-size responsive product image.
  - Title, description, price, category, and rating.
- Includes an **Add to Cart** button.
- A **Go Back** button to navigate back to the home page.

### 3. **Cart Functionality**
- Users can add products to the cart.
- Displays the total number of items in the cart.
- A dedicated Cart page shows:
  - Product image, title, price, and quantity adjustment options.
  - Total price calculation.

### 4. **Responsive Design**
- The app uses Bootstrap for a responsive UI.
- Navbar includes a collapsible menu for smaller screens.
- Product images and layouts adjust to different screen sizes.

### 5. **Filtering and Sorting**
- Search bar to filter products by name.
- Dropdown to filter products by category.
- Sorting options:
  - By price (low to high, high to low).
  - By rating (high to low).

## Setup Instructions

### Prerequisites
- Node.js installed (v14 or later recommended).
- npm or yarn package manager.

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/adimore96/ecommerce-product-list.git
   cd ecommerce-product-list
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open in Browser**
   The application will be available at `http://localhost:3000/`.

### Build for Production
To create a production-ready build:
```bash
npm run build
```

The build files will be available in the `build/` directory.

## Technologies Used

- **Frontend:** React, Bootstrap 5
- **API:** [Fake Store API](https://fakestoreapi.com/)
- **State Management:** React Hooks (useState, useEffect)
- **Routing:** React Router DOM

## Folder Structure
```
src/
├── components/
│   ├── Header.jsx      # Navbar and Cart link
│   ├── ProductDetail.jsx # Product details view
├── pages/
│   ├── Home.jsx        # Displays product listing
│   ├── ProductCard.jsx # Card component for individual products
│   ├── Cart.jsx        # Cart page functionality
├── App.jsx             # Main app file with routing
├── index.js            # Entry point
├── loading.scss        # scss for loading effect
```

## API Reference
The application fetches data from [Fake Store API](https://fakestoreapi.com/):
- Products Endpoint: `https://fakestoreapi.com/products`
- Product by ID: `https://fakestoreapi.com/products/:id`

## Future Enhancements
- Add user authentication for a personalized experience.
- Implement persistent cart storage using localStorage or backend.
- Enhance UI/UX with additional animations and themes.

---
Feel free to contribute to this project by submitting pull requests or reporting issues!