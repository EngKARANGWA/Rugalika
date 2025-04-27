import React, { useState } from 'react';
import { FaPlus,FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import './SideBarCss/Appointments.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "John Doe", service: "Ubutaka", date: "2024-03-25", time: "09:00 AM", status: "pending" },
    { id: 2, name: "Jane Smith", service: "Imiturire", date: "2024-03-26", time: "02:00 PM", status: "approved" },
    { id: 3, name: "Mike Johnson", service: "Amashyamba", date: "2024-03-27", time: "10:00 AM", status: "pending" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
    status: 'pending'
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
    const newAppointment = {
      id: appointments.length + 1,
      ...formData
    };
    setAppointments([...appointments, newAppointment]);
    setShowModal(false);
    setFormData({
      name: '',
      service: '',
      date: '',
      time: '',
      status: 'pending'
    });
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(appointments.filter(app => app.id !== id));
    }
  };

  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h2>Appointments Management</h2>
        <button className="add-appointment-btn" onClick={() => setShowModal(true)}>
          <FaPlus /> New Appointment
        </button>
      </div>

      <div className="appointments-grid">
        {appointments.map(appointment => (
          <div key={appointment.id} className={`appointment-card ${appointment.status}`}>
            <div className="appointment-header">
              <h3>{appointment.name}</h3>
              <div className="appointment-actions">
                <button 
                  className="status-btn approve"
                  onClick={() => handleStatusChange(appointment.id, 'approved')}
                  disabled={appointment.status === 'approved'}
                >
                  <FaCheck />
                </button>
                <button 
                  className="status-btn reject"
                  onClick={() => handleStatusChange(appointment.id, 'rejected')}
                  disabled={appointment.status === 'rejected'}
                >
                  <FaTimes />
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(appointment.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className="appointment-details">
              <p><strong>Service:</strong> {appointment.service}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <span className={`status-badge ${appointment.status}`}>
                {appointment.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>New Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Ubutaka">Ubutaka</option>
                  <option value="Imiturire">Imiturire</option>
                  <option value="Amashyamba">Amashyamba</option>
                  <option value="Imibereho">Imibereho</option>
                </select>
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
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="button" onClick={() => setShowModal(false)} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Create Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments; 