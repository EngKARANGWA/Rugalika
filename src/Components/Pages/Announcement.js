import React, { useState } from 'react';
import { FaBullhorn, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import './announcement.css';

const Announcement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const announcements = [
    {
      id: 1,
      title: "Inama Rusange y'Umurenge",
      date: "30/03/2024",
      time: "14:00",
      location: "Ibiro by'Umurenge",
      category: "Inama",
      description: "Inama rusange y'abaturage bo mu murenge wa Rugalika izaba ku wa gatandatu, tuzaganira ku iterambere ry'umurenge wacu.",
      audience: "Abaturage Bose"
    },
    {
      id: 2,
      title: "Umuganda Rusange",
      date: "28/03/2024",
      time: "07:00",
      location: "Mu Mirenge Yose",
      category: "Umuganda",
      description: "Umuganda rusange wo gusukura imihanda no gutunganya imiyoboro y'amazi mu murenge wacu.",
      audience: "Abaturage Bose"
    },
    {
      id: 3,
      title: "Gahunda yo Kwandikisha Amatungo",
      date: "01/04/2024",
      time: "08:00 - 17:00",
      location: "Buri Kagari",
      category: "Amatungo",
      description: "Gahunda yo kwandikisha amatungo yose ari mu murenge wa Rugalika izatangira.",
      audience: "Bafite Amatungo"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Imurikabikorwa",
      date: "05/04/2024",
      description: "Imurikabikorwa ry'ubuhinzi n'ubworozi"
    },
    {
      id: 2,
      title: "Inama y'Urubyiruko",
      date: "10/04/2024",
      description: "Inama y'urubyiruko ku iterambere"
    },
    {
      id: 3,
      title: "Umunsi w'Abagore",
      date: "15/04/2024",
      description: "Kwizihiza umunsi w'abagore"
    }
  ];

  const handleReadMoreClick = (announcement) => {
    setModalContent(announcement);
    setIsModalOpen(true);
  };

  const handleEventClick = (event) => {
    setModalContent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="announcement-container">
      <div className="announcement-header">
        <h1>Amatangazo y'Umurenge</h1>
        {/* <p>Menya amatangazo n'ibikorwa by'ingenzi mu murenge wa Nyarutovu</p> */}
      </div>

      <div className="featured-announcement">
        <div className="featured-content">
          <FaBullhorn className="featured-icon" />
          <div className="featured-text">
            <h2>Itangazo Rikomeye</h2>
            <p>Kubera impamvu z'umutekano, amatangazo yose ajyanye n'ibikorwa by'umurenge azajya atangazwa kuri iyi platform.</p>
          </div>
        </div>
      </div>

      <div className="announcements-grid">
        {announcements.map(announcement => (
          <div key={announcement.id} className="announcement-card">
            <div className="announcement-category">{announcement.category}</div>
            <h3 className="announcement-title">{announcement.title}</h3>
            
            <div className="announcement-details">
              <div className="detail-item">
                <FaCalendarAlt />
                <span>{announcement.date}</span>
              </div>
              <div className="detail-item">
                <FaClock />
                <span>{announcement.time}</span>
              </div>
              <div className="detail-item">
                <FaMapMarkerAlt />
                <span>{announcement.location}</span>
              </div>
              <div className="detail-item">
                <FaUsers />
                <span>{announcement.audience}</span>
              </div>
            </div>

            <p className="announcement-description">{announcement.description}</p>
            <button className="read-more" onClick={() => handleReadMoreClick(announcement)}>Soma Byinshi</button>
          </div>
        ))}
      </div>

      <div className="upcoming-events">
        <h2>Ibikorwa Biteganyijwe</h2>
        <div className="events-grid">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <FaCalendarAlt />
                <span>{event.date}</span>
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button className="event-button" onClick={() => handleEventClick(event)}>Reba Gahunda</button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {modalContent.title && <h2>{modalContent.title}</h2>}
            {modalContent.date && <p><strong>Itariki:</strong> {modalContent.date}</p>}
            {modalContent.time && <p><strong>Igihe:</strong> {modalContent.time}</p>}
            {modalContent.location && <p><strong>Aho Biba:</strong> {modalContent.location}</p>}
            {modalContent.category && <p><strong>Icyiciro:</strong> {modalContent.category}</p>}
            {modalContent.audience && <p><strong>Abantu Bateganijwe:</strong> {modalContent.audience}</p>}
            {modalContent.description && <p><strong>Ibikubiye Mu Itangazo:</strong> {modalContent.description}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcement;