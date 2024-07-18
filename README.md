# E-Commerce App

Aplikasi E-Commerce ini dibangun menggunakan teknologi MERN Stack (MongoDB, Express, React, dan Node.js). Aplikasi ini menyediakan platform lengkap untuk membeli produk secara online dengan lebih mudah.

## Authors

- [Dzikri Izzatul Haq](https://github.com/Dzikri7)

## Tech Stack

**MERN :** Mongo, Express, React, Node.js

## Screenshots Homepage

![App Screenshot](/client/public/images/ss%20apk.png)

## Table of Contents

- [Installation Frontend](#installation-frontend)
- [Installation Backend](#installation-backend)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Installation Frontend

Install Frontend with npm

```bash
  git clone https://github.com/Dzikri7/e-commerce.git
  cd client
  npm install
```

To open apllications Frontend

```bash
  npm run start
```

## Installation Backend

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Dzikri7/e-commerce.git
   cd yourproject/server
   ```

2. **Install the dependencies:**
   ```sh
   npm install
   ```

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
PORT = 8080
DEV_MODE = development
MONGO_URL = mongodb+srv://yourname:yourpassword@xx.xxxxxxx.mongodb.net/yourdatabasename
JWT_SECRET = xxxxxxxxxxxx
REACT_APP_API = http://localhost:8080
BRAINTREE_MERCHANT_ID = xxxxxxxxxxxxxxx
BRAINTREE_PUBLIC_KEY = xxxxxxxxxxxxxxxx
BRAINTREE_PRIVATE_KEY = xxxxxxxxxxxxxxxxxxxxxxxxx
```

## Running the Application

3. **Start the server**

```
npm run start
```

## Example API Endpoints Method POST

```
http://localhost:8080/api/v1/category/create-category
```

### Result

```
{
    "success": true,
    "message": "new category created",
    "category": {
        "name": "Sepatu",
        "slug": "sepatu",
        "_id": "669908f58cc3200498f17f5b",
        "__v": 0
    }
}
```

## Error Handling

### Result

```
{
    "success": false,
    "message": "Category Already Exists"
}
```
