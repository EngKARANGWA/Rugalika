import React, { useState } from 'react';
import { FaStore, FaChartLine, FaHandshake, FaNewspaper, FaTimes } from 'react-icons/fa';
import './commercial.css';
import imag1 from '../images/RDB.jpg';
import ImgFruit from '../images/fruit.jpg';
import Market from '../images/Nkoto.jpg';

const Commercial = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);

  const commercialNews = [
    {
      id: 1,
      title: "Isoko Rishya rya Rugalika",
      date: "25/03/2024",
      category: "Amakuru y'Isoko",
      description: "Isoko rishya rizafasha abacuruzi bo mu murenge wa Rugalika guteza imbere ubucuruzi bwabo.",
      image: Market,
      fullContent: "Isoko rishya rya Rugalika ryatangiye kubakwa mu murenge wacu. Iri soko rizafasha abacuruzi bo mu murenge wa Rugalika guteza imbere ubucuruzi bwabo. Rizaba rifite ibyumba 200 by'ubucuruzi, aho gukaraba n'ubwiherero bukoreshwa n'abagore n'abagabo ukwawo. Iri soko rizaba rifite n'aho kwakirira ibicuruzwa biva hanze ndetse n'aho kubika ibicuruzwa. Rizaba rifite kandi umuriro w'amashanyarazi n'amazi meza. Ibi bizafasha abacuruzi gukorera mu buryo bwiza kandi bunoze."
    },
    {
      id: 2,
      title: "Kwiyandikisha Ubucuruzi",
      date: "24/03/2024",
      category: "Iterambere ry'Ubucuruzi",
      description: "Ubuyobozi buratangaza uburyo bworoshye bwo kwiyandikisha k'ubucuruzi buciriritse.",
      image: imag1,
      fullContent: "Ubuyobozi bw'umurenge wa Rugalika bwatangaje uburyo bushya bworoshye bwo kwiyandikisha k'ubucuruzi buciriritse. Ubu buryo buzafasha abacuruzi benshi kwandikisha ubucuruzi bwabo mu buryo bworoshye kandi bwihuse. Abacuruzi bashya bazashobora kwiyandikisha mu masaha 24 gusa. Ibi bizafasha guteza imbere ubukungu bw'umurenge wacu."
    },
    {
      id: 3,
      title: "Imurika Buhinzi n'Ubworozi",
      date: "23/03/2024",
      category: "Ibikorwa",
      description: "Imurika ry'umusaruro w'ubuhinzi n'ubworozi rizabera mu murenge wacu ukwezi gutaha.",
      image: ImgFruit,
      fullContent: "Imurika ry'umusaruro w'ubuhinzi n'ubworozi rizabera mu murenge wa Rugalika ukwezi gutaha. Abahinzi n'aborozi bazabona umwanya wo kwerekana umusaruro wabo no guhana ubunararibonye. Hazaba hari n'ibiganiro ku buryo bwo kunoza ubuhinzi n'ubworozi. Abaturage bose barasabwa kwitabira iri murika."
    }
  ];

  const businessStats = [
    { id: 1, title: "Ubucuruzi Bwanditse", value: "150+", icon: <FaStore /> },
    { id: 2, title: "Iterambere ry'Isoko", value: "25%", icon: <FaChartLine /> },
    { id: 3, title: "Ubufatanye", value: "45", icon: <FaHandshake /> },
    { id: 4, title: "Amakuru ya Buri Kwezi", value: "20+", icon: <FaNewspaper /> }
  ];

  const resources = [
    {
      title: "Uburyo bwo Kwandikisha Ubucuruzi",
      details: `Ibyangombwa Bikenerwa:
        • Indangamuntu
        • Icyemezo cy'aho utuye
        • Ifoto passport
        • Inyemezabwishyu y'amafaranga 5,000 Frw
        
        Inzira Ukurikiza:
        1. Uzana ibyangombwa byose mu biro by'umurenge
        2. Wuzuza inyandiko yo gusaba
        3. Utegereza iminsi 2 kugira ngo ubone igisubizo
        4. Wakira uruhushya rw'ubucuruzi`
    },
    {
      title: "Amategeko y'Isoko",
      details: `Amasaha y'Akazi:
        • Kuwa mbere - Kuwa gatandatu: 6:00 - 18:00
        • Ku cyumweru: 6:00 - 13:00
        
        Amategeko y'Ibanze:
        1. Buri mucuruzi agomba kugira icyemezo cy'ubucuruzi
        2. Gukoresha ibipimo byemewe na leta
        3. Kubahiriza isuku ku buryo buhoraho
        4. Kwishyura umusoro ku gihe`
    },
    {
      title: "Impushya z'Ubucuruzi",
      details: `Ubwoko bw'Impushya:
        1. Uruhushya rw'Ubucuruzi Buciriritse
           • Amafaranga: 5,000 Frw
           • Igihe kimara: Umwaka 1
        
        2. Uruhushya rw'Ubucuruzi Bunini
           • Amafaranga: 20,000 Frw
           • Igihe kimara: Umwaka 1
        
        3. Uruhushya rw'Isoko
           • Amafaranga: 2,000 Frw
           • Igihe kimara: Ukwezi 1`
    },
    {
      title: "Amakuru y'Imisoro",
      details: `Ingeri z'Imisoro:
        1. Umusoro ku Isoko
           • Ishyurwa: Buri kwezi
           • Ingano: 2,000 - 5,000 Frw
        
        2. Umusoro ku Nyungu
           • Ishyurwa: Buri mwaka
           • Ingano: 3% by'inyungu
        
        Uburyo bwo Kwishyura:
        • Kuri Mobile Money
        • Mu biro by'umurenge
        • Kuri konti ya banki`
    }
  ];

  return (
    <div className="commercial-container">
      <div className="commercial-header">
        <h1>Amakuru y'Ubucuruzi</h1>
        <p>Menya amakuru y'ubucuruzi n'amahirwe y'ishoramari mu murenge wacu</p>
      </div>

      <div className="stats-container">
        {businessStats.map(stat => (
          <div key={stat.id} className="stat-box">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-title">{stat.title}</div>
          </div>
        ))}
      </div>

      <div className="news-grid">
        {commercialNews.map(news => (
          <div key={news.id} className="news-card">
            <div className="news-image">
              <img 
                src={news.image === imag1 ? imag1 : news.image} 
                alt={news.title} 
                className="news-img"
              />
              <span className="news-category">{news.category}</span>
            </div>
            <div className="news-content">
              <div className="news-date">{news.date}</div>
              <h3 className="news-title">{news.title}</h3>
              <p className="news-description">{news.description}</p>
              <button 
                className="read-more-btn"
                onClick={() => setSelectedNews(news)}
              >
                Soma Byinshi
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedNews && (
        <div className="modal-overlay" onClick={() => setSelectedNews(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedNews.title}</h2>
              <button 
                className="close-modal"
                onClick={() => setSelectedNews(null)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <img 
                src={selectedNews.image === imag1 ? imag1 : selectedNews.image} 
                alt={selectedNews.title}
                className="modal-image"
              />
              <div className="modal-info">
                <span className="modal-date">{selectedNews.date}</span>
                <span className="modal-category">{selectedNews.category}</span>
              </div>
              <p className="modal-content">{selectedNews.fullContent}</p>
            </div>
          </div>
        </div>
      )}

      <div className="business-resources">
        <h2>Amakuru y'Ingenzi</h2>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <FaHandshake className="resource-icon" />
              <h3>{resource.title}</h3>
              <button 
                className="resource-button"
                onClick={() => setSelectedResource(resource)}
              >
                Reba Birambuye
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedResource && (
        <div className="modal-overlay" onClick={() => setSelectedResource(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedResource.title}</h2>
              <button className="close-modal" onClick={() => setSelectedResource(null)}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <p>{selectedResource.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commercial;