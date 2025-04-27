import React, { useState } from 'react';
import { FaHospital, FaUserMd, FaAmbulance, FaCalendarCheck, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import './health.css';
import vaccin from '../images/child.jpg'
import Clear from '../images/12 copy.jpg'
import HealthCenter from '../images/health.jpeg'
const Health = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const healthNews = [
    {
      id: 1,
      title: "Gahunda yo Gukingira Abana",
      date: "25/03/2024",
      category: "Gukingira",
      description: "Gahunda yo gukingira abana bazajya bakirwa ku bigo nderabuzima byose byo mu murenge wa Nyarutovu.",
      image: vaccin,
      fullContent: "Gahunda yo gukingira abana yatangiye mu kigo nderabuzima cya Nyarutovu. Iyi gahunda izajya ikorwa buri wa kabiri na wa kane kuva saa moya kugeza saa sita. Abana bose bari munsi y'imyaka 5 bagomba gukingirwa. Inkingo zitangwa ni: BCG, DPT, Polio, Measles na Rotavirus. Ababyeyi basabwe kuzana ibitabo by'ubuzima by'abana babo."
    },
    {
      id: 2,
      title: "Ubukangurambaga bw'Isuku",
      date: "24/03/2024",
      category: "Isuku",
      description: "Ubukangurambaga ku isuku n'isukura mu miryango no mu baturage muri rusange.",
      image: Clear
    },
    {
      id: 3,
      title: "Serivisi z'Ubuzima",
      date: "23/03/2024",
      category: "Serivisi",
      description: "Serivisi nshya zitangiye gutangwa ku kigo nderabuzima cya Nyarutovu.",
      image: HealthCenter
    }
  ];

  const healthStats = [
    { id: 1, title: "Ibigo Nderabuzima", value: "3", icon: <FaHospital /> },
    { id: 2, title: "Abaganga", value: "12", icon: <FaUserMd /> },
    { id: 3, title: "Ambulansi", value: "2", icon: <FaAmbulance /> },
    { id: 4, title: "Gahunda za buri munsi", value: "50+", icon: <FaCalendarCheck /> }
  ];

  const emergencyContacts = [
    { title: "Ambulansi", number: "912" },
    { title: "Ikigo Nderabuzima Nyarutovu", number: "0788123456" },
    { title: "Umuganga Mukuru", number: "0788234567" },
    { title: "Serivisi y'Ubutabazi", number: "0788345678" }
  ];

  const serviceDetails = {
    "Gukingira Abana": {
      schedule: "Kuwa Kabiri na Kuwa Kane: 7:00 - 12:00",
      details: "Serivisi yo gukingira abana irabera ku kigo nderabuzima. Inkingo zose za ngombwa ziratangwa ku buntu.",
      requirements: [
        "Igitabo cy'ubuzima cy'umwana",
        "Indangamuntu y'umubyeyi",
        "Kuba ufite gahunda yagenwe"
      ]
    },
    "Ubuzima bw'Umubyeyi": {
      schedule: "Buri munsi: 8:00 - 15:00",
      details: "Isuzuma n'ubujyanama ku babyeyi batwite n'ababyaye",
      requirements: [
        "Igitabo cy'ubuzima",
        "Indangamuntu",
        "Raporo y'isuzuma riheruka"
      ]
    },
    "Gahunda y'Imiti": {
      schedule: "Buri munsi: 7:00 - 17:00",
      details: "Serivisi yo gutanga imiti n'ubujyanama ku buryo bwo kuyifata",
      requirements: [
        "Urupapuro rwa muganga",
        "Indangamuntu",
        "Ikarita y'ubwishingizi"
      ]
    },
    "Isuzuma Rusange": {
      schedule: "Kuwa Mbere - Kuwa Gatanu: 8:00 - 16:00",
      details: "Isuzuma rusange ry'indwara zitandukanye",
      requirements: [
        "Indangamuntu",
        "Ikarita y'ubwishingizi",
        "Amafaranga y'isuzuma"
      ]
    },
    "Ubujyanama": {
      schedule: "Kuwa Mbere - Kuwa Gatanu: 9:00 - 15:00",
      details: "Serivisi z'ubujyanama ku buzima no kurwanya indwara",
      requirements: [
        "Indangamuntu",
        "Gufata randevu"
      ]
    },
    "Laboratwari": {
      schedule: "Kuwa Mbere - Kuwa Gatanu: 7:00 - 14:00",
      details: "Isuzuma rya laboratwari ku ndwara zitandukanye",
      requirements: [
        "Urupapuro rwa muganga",
        "Indangamuntu",
        "Ikarita y'ubwishingizi",
        "Amafaranga y'isuzuma"
      ]
    }
  };

  return (
    <div className="health-container">
      <div className="health-header">
        <h1>Serivisi z'Ubuzima</h1>
        <p>Menya amakuru yerekeye ubuzima n'ubuvuzi mu murenge wa Nyarutovu</p>
      </div>

      <div className="emergency-banner">
        <FaPhoneAlt className="emergency-icon" />
        <div className="emergency-text">
          <h2>Nimero z'Ubutabazi</h2>
          <div className="emergency-numbers">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="emergency-contact">
                <span className="contact-title">{contact.title}:</span>
                <span className="contact-number">{contact.number}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="stats-container">
        {healthStats.map(stat => (
          <div key={stat.id} className="stat-box">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-title">{stat.title}</div>
          </div>
        ))}
      </div>

      <div className="news-grid">
        {healthNews.map(news => (
          <div key={news.id} className="news-card">
            <div className="news-image">
              <img src={news.image} alt={news.title} />
              <span className="news-category">{news.category}</span>
            </div>
            <div className="news-content">
              <div className="news-date">{news.date}</div>
              <h3 className="news-title">{news.title}</h3>
              <p className="news-description">{news.description}</p>
              <button 
                className="read-more"
                onClick={() => setSelectedNews(news)}
              >
                Soma Byinshi
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="health-services">
        <h2>Serivisi Zitangwa</h2>
        <div className="services-grid">
          {[
            "Gukingira Abana",
            "Ubuzima bw'Umubyeyi",
            "Gahunda y'Imiti",
            "Isuzuma Rusange",
            "Ubujyanama",
            "Laboratwari"
          ].map((service, index) => (
            <div key={index} className="service-card">
              <FaUserMd className="service-icon" />
              <h3>{service}</h3>
              <p className="service-schedule">Kuwa Mbere - Kuwa Gatanu</p>
              <button 
                className="service-button"
                onClick={() => setSelectedService(service)}
              >
                Reba Gahunda
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div className="modal-overlay" onClick={() => setSelectedNews(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedNews.title}</h2>
              <button className="close-modal" onClick={() => setSelectedNews(null)}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <img src={selectedNews.image} alt={selectedNews.title} className="modal-image" />
              <div className="modal-info">
                <span>{selectedNews.date}</span>
                <span>{selectedNews.category}</span>
              </div>
              <p>{selectedNews.fullContent}</p>
            </div>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedService}</h2>
              <button className="close-modal" onClick={() => setSelectedService(null)}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <h3>Amasaha yo Gutanga Serivisi</h3>
              <p>{serviceDetails[selectedService].schedule}</p>
              
              <h3>Ibisobanuro</h3>
              <p>{serviceDetails[selectedService].details}</p>
              
              <h3>Ibikenerwa</h3>
              <ul>
                {serviceDetails[selectedService].requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Health;