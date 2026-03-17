# FreshCart 🛒

FreshCart is a full-stack MERN (MongoDB, Express, React, Node.js) grocery web application.

---

## 🚀 Features

- 👤 User Authentication (Login / Signup)
- 🛍️ Product Listing & Categories
- 🧑‍💼 Seller/Admin Dashboard
- ➕ Add / Manage Products
- 🛒 Cart Functionality
- 📦 Order Management

---

## 🛠 Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Image Storage: multer

---

## 📁 Project Structure

```bash
FreshCart/
│
├── backend/
│   ├── config/
│   │   ├── connectDB.js
│   │   ├── cloudinary.js
│   │   └── multer.js
│   │
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── seller.controller.js
│   │   ├── product.controller.js
│   │   ├── cart.controller.js
│   │   ├── order.controller.js
│   │   └── address.controller.js
│   │
│   ├── middlewares/
│   │   ├── authUser.js
│   │   └── authSeller.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── product.model.js
│   │   ├── order.model.js
│   │   └── address.model.js
│   │
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── seller.routes.js
│   │   ├── product.routes.js
│   │   ├── cart.routes.js
│   │   ├── order.routes.js
│   │   └── address.routes.js
│   │
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── MyOrders.jsx
│   │   │   └── AddProduct.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   └── package.json
│
├── .gitignore
└── README.md
```
