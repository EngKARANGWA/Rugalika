import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './igitekerezo.css';

const Igitekerezo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = {
    phone: '+250 788 123 456',
    email: 'info@nyarutovu.gov.rw',
    address: 'Umurenge wa Nyarutovu, Akarere ka Ruhango'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="igitekerezo-container">
      <div className="contact-card">
        <div className="card-header">
          <h1>Twandikire</h1>
          <p>Tuvugishe cyangwa utwereke ikibazo ufite</p>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Telefoni</h3>
              <p>{contactInfo.phone}</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Imeyili</h3>
              <p>{contactInfo.email}</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Aderesi</h3>
              <p>{contactInfo.address}</p>
            </div>
          </div>
        </div>

        <button className="contact-button" onClick={() => setIsModalOpen(true)}>
          <FaPaperPlane /> Tanga Igitekerezo
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Tanga Igitekerezo</h2>
              <button className="close-button" onClick={() => setIsModalOpen(false)}>×</button>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Amazina*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Andika amazina yawe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Imeyili</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Andika imeyili yawe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefoni*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Andika numero ya telefoni"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Igitekerezo*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Andika igitekerezo cyawe hano..."
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">
                  <FaPaperPlane /> Ohereza
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Igitekerezo; 