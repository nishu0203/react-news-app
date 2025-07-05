// src/Components/NewsItem.js
import React from 'react';

function NewsItem({ title, description, imageUrl, newsUrl }) {
  return (
    <div className="card my-3">
      <img src={imageUrl} className="card-img-top" alt="News Thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{title ? title : "Title not available"}</h5>
        <p className="card-text">{description ? description : "No description"}</p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;
