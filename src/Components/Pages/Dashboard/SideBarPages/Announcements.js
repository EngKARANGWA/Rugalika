import React, { useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaCalendar} from 'react-icons/fa';
import './SideBarCss/Announcements.css';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Community Meeting",
      content: "Important community meeting this Saturday at 10 AM.",
      date: "2024-03-25",
      category: "Meeting",
      priority: "high"
    },
    {
      id: 2,
      title: "Road Maintenance",
      content: "Road maintenance work will be conducted next week.",
      date: "2024-03-26",
      category: "Infrastructure",
      priority: "medium"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: '',
    category: '',
    priority: 'medium'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setAnnouncements(announcements.map(ann => 
        ann.id === editingId ? { ...formData, id: editingId } : ann
      ));
    } else {
      const newAnnouncement = {
        id: announcements.length + 1,
        ...formData
      };
      setAnnouncements([newAnnouncement, ...announcements]);
    }
    setShowModal(false);
    setEditingId(null);
    setFormData({
      title: '',
      content: '',
      date: '',
      category: '',
      priority: 'medium'
    });
  };

  const handleEdit = (announcement) => {
    setEditingId(announcement.id);
    setFormData(announcement);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      setAnnouncements(announcements.filter(ann => ann.id !== id));
    }
  };

  return (
    <div className="announcements-container">
      <div className="announcements-header">
        <h2>Announcements Management</h2>
        <button className="add-announcement-btn" onClick={() => setShowModal(true)}>
          <FaPlus /> New Announcement
        </button>
      </div>

      <div className="announcements-grid">
        {announcements.map(announcement => (
          <div key={announcement.id} className={`announcement-card priority-${announcement.priority}`}>
            <div className="announcement-header">
              <FaPlus className="announcement-icon" />
              <div className="announcement-title">
                <h3>{announcement.title}</h3>
                <span className="announcement-category">{announcement.category}</span>
              </div>
              <div className="announcement-actions">
                <button onClick={() => handleEdit(announcement)} className="edit-btn">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(announcement.id)} className="delete-btn">
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className="announcement-content">
              <p>{announcement.content}</p>
            </div>
            <div className="announcement-footer">
              <span className="announcement-date">
                <FaCalendar /> {announcement.date}
              </span>
              <span className={`priority-badge ${announcement.priority}`}>
                {announcement.priority}
              </span>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingId ? 'Edit Announcement' : 'New Announcement'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Community">Community</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>

              <div className="form-group">
                <label>Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Priority</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="modal-actions">
                <button type="button" onClick={() => {
                  setShowModal(false);
                  setEditingId(null);
                }} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {editingId ? 'Update' : 'Create'} Announcement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcements; 