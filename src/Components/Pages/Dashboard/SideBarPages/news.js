import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import './SideBarCss/news.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/news');
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const result = await response.json();
      // Check if result has success and data properties
      if (result.success && result.data) {
        // If single news item, wrap in array, otherwise use as is
        const newsArray = Array.isArray(result.data) ? result.data : [result.data];
        setNews(newsArray);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (newsId) => {
    if (window.confirm('Are you sure you want to delete this news?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/news/${newsId}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error('Failed to delete news');
        }

        fetchNews(); // Refresh the news list
      } catch (error) {
        console.error('Error deleting news:', error);
        alert('Failed to delete news');
      }
    }
  };

  if (loading) {
    return <div className="news-loading">Loading...</div>;
  }

  if (error) {
    return <div className="news-error">Error: {error}</div>;
  }

  return (
    <div className="news-container">
      <div className="news-header">
        <h2>News Management</h2>
        <button className="add-news-btn" onClick={() => navigate('/dashboard/upload-news')}>
          <FaPlus /> Add News
        </button>
      </div>

      <div className="news-grid">
        {news.length > 0 ? (
          news.map((item) => (
            <div key={item._id} className="news-card">
              {item.media && item.media.length > 0 && (
                <div className="news-media">
                  {item.media[0].type === 'video' ? (
                    <video src={item.media[0].url} controls />
                  ) : (
                    <img src={item.media[0].url} alt={item.title} />
                  )}
                </div>
              )}
              <div className="news-content">
                <h3>{item.title}</h3>
                <span className="news-category">{item.category}</span>
                <p>{item.content}</p>
                <small className="news-date">
                  {new Date(item.createdAt).toLocaleDateString()}
                </small>
                <div className="news-actions">
                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/dashboard/edit-news/${item._id}`)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-news">No news articles found</div>
        )}
      </div>
    </div>
  );
};

export default News;