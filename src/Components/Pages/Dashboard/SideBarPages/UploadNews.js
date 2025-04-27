import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload, FaTimes, FaArrowLeft } from 'react-icons/fa';
import './SideBarCss/UploadNews.css';

const UploadNews = () => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState({
    title: '',
    category: 'general',
    content: '',
    media: []
  });
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map(file => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith('image/') ? 'image' : 'video',
      file
    }));
    
    setPreview([...preview, ...newPreviews]);
    setNewsData(prev => ({
      ...prev,
      media: [...prev.media, ...files]
    }));
  };

  const removeMedia = (index) => {
    const newPreviews = preview.filter((_, i) => i !== index);
    const newMedia = newsData.media.filter((_, i) => i !== index);
    setPreview(newPreviews);
    setNewsData(prev => ({
      ...prev,
      media: newMedia
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Here you would typically send the data to your backend
      console.log('Submitting news:', newsData);
      alert('News published successfully!');
      
      // Reset form
      setNewsData({
        title: '',
        category: 'general',
        content: '',
        media: []
      });
      setPreview([]);
    } catch (error) {
      alert('Error publishing news');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="upload-news-container">
      <div className="upload-news-nav">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Dashboard
        </button>
      </div>
      
      <div className="upload-news-header">
        <h2>Upload News</h2>
        <p>Create and publish new content</p>
      </div>

      <form onSubmit={handleSubmit} className="upload-news-form">
        <div className="form-group">
          <label>News Title</label>
          <input
            type="text"
            name="title"
            value={newsData.title}
            onChange={handleInputChange}
            placeholder="Enter news title"
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={newsData.category}
            onChange={handleInputChange}
            required
          >
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="sports">Sports</option>
            <option value="culture">Culture</option>
          </select>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            value={newsData.content}
            onChange={handleInputChange}
            placeholder="Write news content here..."
            rows="6"
            required
          />
        </div>

        <div className="media-upload-section">
          <label className="media-upload-label">
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleMediaUpload}
              className="hidden-input"
            />
            <div className="upload-placeholder">
              <FaUpload />
              <span>Upload Media</span>
              <p>Drag & drop files or click to browse</p>
            </div>
          </label>

          {preview.length > 0 && (
            <div className="media-preview-grid">
              {preview.map((media, index) => (
                <div key={index} className="media-preview-item">
                  {media.type === 'image' ? (
                    <img src={media.url} alt={`Preview ${index}`} />
                  ) : (
                    <video src={media.url} controls />
                  )}
                  <button
                    type="button"
                    className="remove-media"
                    onClick={() => removeMedia(index)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className="publish-button"
          disabled={loading}
        >
          {loading ? 'Publishing...' : 'Publish News'}
        </button>
      </form>
    </div>
  );
};

export default UploadNews; 