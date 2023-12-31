# Sweet Home

Welcome to Sweet Home, a web application for purchasing a wide range of home products. From beds, mattresses, and pillows to lamps, rugs, bathroom essentials, garden accessories, and lighting items, Sweet Home offers an extensive selection to help you create a cozy and stylish living environment.

## Installation

1. Make sure you have Node.js installed on your machine.
2. Clone the Sweet Home frontend repository:

   ```bash
   git clone https://github.com/Nilo3/Sweet-Home.git

## Frontend

The frontend of Sweet Home is developed using the following technologies:

- React.js: A JavaScript library for building interactive user interfaces.
- Redux: A state management library for JavaScript applications.
- Redux Toolkit: An official Redux package that simplifies the Redux workflow.
- React Router: A library for routing in React applications.
- Firebase: A backend-as-a-service platform for building web and mobile applications.
- Other packages and dependencies (see `package.json` for more details).

## Backend
The backend of Sweet Home provides the server-side functionality for the application. It handles API requests, interacts with the database, and serves data to the frontend.

 Technologies Used in the development of the backend:

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Other dependencies (see `package.json` for more details)


Once the server is running, you can access the API endpoints from the frontend application.

## API Documentation

For detailed documentation on the API endpoints and their usage, please refer to the API Documentation.

### Products
- GET /api/product: Get all products.
- GET /api/product/:id Get a specific product by ID.
- POST /api/product: Create a new product.
- PUT /api/product/:id Update an existing product by ID.
- DELETE /api/product/:id Delete an existing product by ID.
### Users
- GET /api/users: Get all users.
- GET /api/users/:id Get a specific user by ID.
- POST /api/users: Create a new user.
- PUT /api/users: Update an existing user.
- DELETE /api/users/:id Delete an existing user by ID.
### Orders
- GET /api/order: Get all orders.
- GET /api/order/:id Get a specific order by ID.
- POST /api/order: Create a new order.
- PUT /api/order/:id Update an existing order by ID.
- DELETE /api/order/:id Delete an existing order by ID.
### Cart
- GET /api/cart: Get all cart.
- GET /api/cart/:id Get a specific cart by ID.
- POST /api/cart: Create a new cart.
- PUT /api/cart/:id Update an existing cart by ID.
- DELETE /api/cart/ Delete an existing cart by ID.
### Categories
- GET /api/category: Get all property categories.
- GET /api/category/:id Get a specific property category by ID.
- POST /api/category: Create a new property category.
- PUT /api/category/:id Update an existing property category by ID.
### Reviews
- GET /api/review: Get all reviews.
- GET /api/review/:id Get a specific review by ID.
- POST /api/review: Create a new review.
- PUT /api/review/:id Update an existing review by ID.
- DELETE /api/review/ Delete an existing review by ID.


## Contributing
If you would like to contribute to Sweet Home, follow these steps:

1. Fork the frontend and/or backend repository from the following URLs:
- Frontend: https://github.com/Nilo3/Sweet-Home-Frontend
- Backend: https://github.com/Nilo3/Sweet-Home-Backend
3. Create a new branch for your feature or bug fix.
4. Make the necessary changes and commit your modifications.
5. Push your changes to your forked repository.
6. Submit a pull request with your changes to the main branch of the original repository.

## Support
If you have any questions or issues, feel free to open an issue on the respective repository:

- Frontend: https://github.com/Nilo3/Sweet-Home-Frontend/issues
- Backend: https://github.com/Nilo3/Sweet-Home-Backend/issues

## License
This project is licensed under the [MIT License](https://tlo.mit.edu/learn-about-intellectual-property/software-and-open-source-licensing/open-source-licensing).
