import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';

function News({ category }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const apiKey = '289dcfddb8801cc7c2f910b0d6693b6d';

  const fetchArticles = async (reset = false) => {
    let url = '';

    if (isSearching && searchTerm.trim()) {
      url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
        searchTerm
      )}&lang=en&country=in&token=${apiKey}&max=9&page=${page}`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&topic=${category}&token=${apiKey}&max=9&page=${page}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.articles) {
        if (reset) {
          setArticles(data.articles);
        } else {
          setArticles((prev) => prev.concat(data.articles));
        }
      } else {
        console.error('No articles found', data);
      }
    } catch (err) {
      console.error('Fetch error', err);
    }
  };

  useEffect(() => {
    setPage(1);
    setArticles([]);
    fetchArticles(true);
    // eslint-disable-next-line
  }, [category, isSearching]);

  useEffect(() => {
    if (page !== 1) {
      fetchArticles();
    }
    // eslint-disable-next-line
  }, [page]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      setIsSearching(true);
      setPage(1);
      setArticles([]);
      fetchArticles(true);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setIsSearching(false);
    setPage(1);
    setArticles([]);
    fetchArticles(true);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-3">
        {isSearching ? `Search Results for "${searchTerm}"` : `Top Headlines - ${category.toUpperCase()}`}
      </h2>

      {/* 🔍 Search Bar */}
      <form className="d-flex justify-content-center mb-4" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary me-2" type="submit">Search</button>
        {isSearching && (
          <button className="btn btn-secondary" onClick={handleClearSearch} type="button">Clear</button>
        )}
      </form>

      <InfiniteScroll
        dataLength={articles.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={true}
        loader={<h4 className="text-center">Loading...</h4>}
      >
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.image}
                newsUrl={article.url}
                author={article.source.name}
                date={article.publishedAt}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default News;
