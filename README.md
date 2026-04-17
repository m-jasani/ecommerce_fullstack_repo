# 🛒 E-Commerce Fullstack — Monorepo

A complete fullstack e-commerce application built with **Next.js 15**, **Express.js**, and **MySQL**. The monorepo contains three separate applications: a customer-facing storefront, an admin dashboard, and a REST API backend.

---

## 📁 Repository Structure

```
ecommerce_fullstack_repo/
├── folder-client/       # Customer storefront (Next.js 15 + React 19)
├── folder-admin/        # Admin dashboard (Next.js 15 + React 19)
└── folder-backend/      # REST API server (Express.js + MySQL)
```

---

## 🏗️ Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐
│  folder-client  │     │  folder-admin   │
│  (Next.js 15)   │     │  (Next.js 15)   │
│  Port: 3000     │     │  Port: 3001     │
└────────┬────────┘     └────────┬────────┘
         │                       │
         └──────────┬────────────┘
                    │ HTTP (Axios)
         ┌──────────▼────────────┐
         │   folder-backend      │
         │   (Express.js)        │
         │   Port: 1000          │
         └──────────┬────────────┘
                    │
         ┌──────────▼────────────┐
         │        MySQL          │
         │   Database: ecomm     │
         └───────────────────────┘
```

---

## 🚀 Applications

### 1. `folder-client` — Customer Storefront

The public-facing shopping experience for end users.

**Pages & Features:**
- 🏠 Home — product highlights and navigation
- 📂 Category — browse products by category
- 🛍️ Product listing — filterable by category (`/product/[cname]`)
- 📦 Product detail view
- 🛒 Cart management
- ❤️ Wishlist
- 📋 Order history
- 👤 Profile management
- 🔐 Sign Up / Sign In

**Tech Stack:**

| Package | Version |
|---|---|
| Next.js | 15.1.2 |
| React | 19.x |
| Tailwind CSS | 3.4.x |
| Axios | 1.7.x |
| next-crypto | 1.0.x |

---

### 2. `folder-admin` — Admin Dashboard

Full back-office panel for managing the e-commerce platform.

**Pages & Features:**
- 📊 Home / Dashboard
- 👤 Admin management (list, add, edit)
- 👥 User management (list, add, edit)
- 🏷️ Category management (list, add, edit)
- 📦 Product management (list, add, edit) with image upload
- 🛒 Cart data management
- ❤️ Wishlist management
- 📋 Order management (view, create, edit)
- 🔐 Admin Sign Up / Sign In
- 👁️ Profile view per admin (`/profile/[id]`)

**Tech Stack:**

| Package | Version |
|---|---|
| Next.js | 15.1.2 |
| React | 19.x |
| Tailwind CSS | 3.4.x |
| Axios | 1.7.x |

---

### 3. `folder-backend` — REST API Server

Express.js REST API with MySQL database and JWT authentication.

**API Routes:**

| Route | Description |
|---|---|
| `POST /ecomm-backend/login` | User / admin login, returns JWT |
| `GET/POST/PUT/DELETE /ecomm-backend/admin` | Admin CRUD |
| `GET/POST/PUT/DELETE /ecomm-backend/user` | User CRUD |
| `GET/POST/PUT/DELETE /ecomm-backend/product` | Product CRUD + image upload |
| `GET/POST/PUT/DELETE /ecomm-backend/category` | Category CRUD |
| `GET/POST/PUT/DELETE /ecomm-backend/cart` | Cart CRUD |
| `GET/POST/PUT/DELETE /ecomm-backend/wishlist` | Wishlist CRUD |
| `GET/POST/PUT/DELETE /ecomm-backend/order` | Order management |
| `GET /ecomm-backend/productpercat` | Products filtered by category |
| `GET /ecomm-backend/usercart` | Cart items for a specific user |
| `GET /ecomm-backend/userwishlist` | Wishlist for a specific user |
| `POST /ecomm-backend/placeorder` | Place a new order |
| `GET /ecomm-backend/displayorder` | Display orders per user |
| `GET /upload/:filename` | Serve uploaded product images |

**Tech Stack:**

| Package | Version |
|---|---|
| Express.js | 4.21.x |
| MySQL | 2.18.x |
| JSON Web Token | 9.0.x |
| Multer (file upload) | 1.4.x |
| dotenv | 16.4.x |
| nodemon | 3.1.x |
| CORS | 2.8.x |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 18.x
- MySQL server running locally
- npm

---

### Step 1 — Set Up the Database

Create a MySQL database named `ecomm` and import your schema.

```sql
CREATE DATABASE ecomm;
```

---

### Step 2 — Configure the Backend

Create a `.env` file inside `folder-backend/`:

```env
PORT=1000
HOST=localhost
USER=root
PASSWORD=your_mysql_password
DATABASE=ecomm
JWTSECRETE=your_strong_secret_key_here
```

> ⚠️ **Never commit your `.env` file.** See the [Security Notes](#-security-notes) section below.

---

### Step 3 — Start the Backend

```bash
cd folder-backend
npm install
npm start
```

Server runs at: `http://localhost:1000`

---

### Step 4 — Start the Client (Storefront)

```bash
cd folder-client
npm install
npm run dev
```

App runs at: `http://localhost:3000`

---

### Step 5 — Start the Admin Panel

```bash
cd folder-admin
npm install
npm run dev -- -p 3001
```

App runs at: `http://localhost:3001`

---

## 🌐 API Base URL

Both the client and admin use `http://localhost:1000` as the API base URL. Before deploying, update all API calls to use an environment variable:

Create `folder-client/.env.local` and `folder-admin/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:1000
```

Then replace hardcoded URLs in your components:

```js
// Before
axios.get("http://localhost:1000/ecomm-backend/user")

// After
axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ecomm-backend/user`)
```

---

## 📦 Build for Production

```bash
# Backend
cd folder-backend && npm start

# Client
cd folder-client && npm run build && npm start

# Admin
cd folder-admin && npm run build && npm start -- -p 3001
```

---

## 🔐 Security Notes

> ⚠️ Please review these before making the repository public or deploying.

### 1. `.env` file is committed to the repo
The file `folder-backend/.env` is currently tracked by Git. While the password is empty in development, this is risky and must be fixed immediately:

```bash
cd folder-backend
git rm --cached .env
git commit -m "remove .env from tracking"
```

Make sure `.env` is listed in `folder-backend/.gitignore`.

### 2. Hardcoded JWT secret in middleware
`folder-backend/src/middleware/middleware.js` contains a hardcoded secret key:
```js
jwt.verify(token, "secreatekey", ...)
```
Replace it with the environment variable already set up in your config:
```js
const { JWTSECRETE } = require("../configs/config.js");
jwt.verify(token, JWTSECRETE, ...)
```

### 3. Hardcoded API URLs in frontend
Both `folder-admin` and `folder-client` have `http://localhost:1000` hardcoded directly in component files. Move these to `NEXT_PUBLIC_API_URL` in `.env.local` (see above).

---

## 🗂️ Project Conventions

- Next.js Pages Router is used in both frontend apps
- Backend follows MVC-style structure: `controllers/`, `models/` (routes), `helpers/`, `middleware/`
- Uploaded images are stored in `folder-backend/upload/` and served statically at `/upload/`
- JWT is used for auth; token is sent via the `authorization` request header

---

## 📄 License

This project is proprietary. All rights reserved.

---

## 👤 Author

**Meera Jasani**  
Frontend Developer  
[Portfolio](https://portfolio-rouge-three-19.vercel.app/) · [GitHub](https://github.com/m-jasani)
