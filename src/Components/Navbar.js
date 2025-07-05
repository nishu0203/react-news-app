// src/Components/Navbar.js
import React from 'react';

function Navbar({ setCategory }) {
  const categories = [
  "breaking-news",
  "business",
  "technology",
  "sports",
  "science",
  "health",
  "entertainment"
];


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">📰 NewsApp</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className="btn btn-sm btn-outline-light m-1"
                  onClick={() => setCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
