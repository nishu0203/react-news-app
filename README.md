# 📰 React News App

A responsive and modern **news application** built with **React.js**, powered by the **GNews API**. This app fetches real-time Indian news across categories, with **search functionality** and **infinite scroll**.

---

## 🚀 Features

- 🔍 Search news articles by keyword
- 📚 News categories (business, tech, health, sports, etc.)
- 🌐 Real-time headlines from Indian sources
- 🔁 Infinite scrolling for seamless UX
- 💡 Fully responsive design (Bootstrap 5)

---

## 🔧 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### ✅ Prerequisites

- Node.js & npm installed
- A GNews API key from [https://gnews.io](https://gnews.io)

---

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page reloads on file save, and lint errors appear in the console.

---

### `npm test`

Launches the test runner in watch mode.  
See: [Running Tests](https://facebook.github.io/create-react-app/docs/running-tests)

---

### `npm run build`

Builds the app for production to the `build` folder.  
It bundles React in production mode and optimizes for best performance.  
Files are minified and include hashes.

Learn more: [Deployment Docs](https://facebook.github.io/create-react-app/docs/deployment)

---

### `npm run eject` ⚠️

This is a one-way operation. Once you `eject`, you can't go back.  
It gives full control over Webpack, Babel, ESLint, etc.  
Use only if needed for advanced customization.

---

## 🌐 API Setup

1. Sign up at [https://gnews.io](https://gnews.io) to get your API key.
2. In `src/Components/News.js`, replace the API key:

```js
const apiKey = "your_api_key_here"; // Replace with your key
# Clone the repository
git clone https://github.com/nishu0203/react-news-app.git

cd react-news-app

# Install dependencies
npm install

# Start development server
npm start
