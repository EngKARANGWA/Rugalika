import React from 'react';
import { FaNewspaper, FaCalendarAlt, FaFolder, FaUser } from 'react-icons/fa';
import './Landing.css';

const Landing = () => {
  const contentItems = [
    {
      id: 1,
      title: "Iterambere ry'Umurenge wa Nyarutovu",
      category: "Iterambere",
      date: "25/03/2024",
      author: "Ubuyobozi bw'Umurenge",
      image: "development.jpg",
      summary: "Gahunda z'iterambere mu murenge wa Nyarutovu zirimo kubera abaturage benshi ingirakamaro.",
      content: "Mu murenge wa Nyarutovu, gahunda z'iterambere zirimo gutera imbere ku buryo bushimishije..."
    },
    {
      id: 2,
      title: "Imihigo y'Umurenge 2024",
      category: "Imihigo",
      date: "24/03/2024",
      author: "Komite y'Imihigo",
      image: "goals.jpg",
      summary: "Imihigo y'umurenge wa Nyarutovu y'umwaka wa 2024 yashyizwe ahagaragara.",
      content: "Mu nama y'Inama Njyanama y'Umurenge, hashyizwe ahagaragara imihigo y'umwaka wa 2024..."
    },
    {
      id: 3,
      title: "Uburezi mu Murenge",
      category: "Uburezi",
      date: "23/03/2024",
      author: "Ushinzwe Uburezi",
      image: "education.jpg",
      summary: "Raporo y'uburezi mu murenge wa Nyarutovu yerekana iterambere rishimishije.",
      content: "Uburezi mu murenge wa Nyarutovu burimo gutera imbere ku buryo bushimishije..."
    }
  ];

  const categories = [
    { name: "Iterambere", count: 12 },
    { name: "Imihigo", count: 8 },
    { name: "Uburezi", count: 15 },
    { name: "Ubuzima", count: 10 },
    { name: "Umutekano", count: 6 }
  ];

  return (
    <div className="landing-container">
      {/* Other landing page content */}
      
      <section className="content-section">
        <div className="content-header">
          <h1>Amakuru y'Umurenge</h1>
          <p>Amakuru arambuye ku bikorwa by'umurenge wa Nyarutovu</p>
        </div>

        <div className="content-layout">
          <main className="content-main">
            {contentItems.map(item => (
              <article key={item.id} className="content-card">
                <div className="content-image">
                  <img src={item.image} alt={item.title} />
                  <span className="content-category">{item.category}</span>
                </div>
                
                <div className="content-info">
                  <div className="content-meta">
                    <span><FaCalendarAlt /> {item.date}</span>
                    <span><FaUser /> {item.author}</span>
                  </div>
                  
                  <h2>{item.title}</h2>
                  <p className="content-summary">{item.summary}</p>
                  
                  <div className="content-footer">
                    <button className="read-more">Soma Byinshi</button>
                  </div>
                </div>
              </article>
            ))}
          </main>

          <aside className="content-sidebar">
            <div className="sidebar-section">
              <h3>Ingeri z'Amakuru</h3>
              <ul className="categories-list">
                {categories.map((category, index) => (
                  <li key={index}>
                    <span className="category-name">
                      <FaFolder /> {category.name}
                    </span>
                    <span className="category-count">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>Amakuru Mashya</h3>
              <div className="recent-news">
                {contentItems.slice(0, 3).map(item => (
                  <div key={item.id} className="recent-news-item">
                    <FaNewspaper className="news-icon" />
                    <div className="news-details">
                      <h4>{item.title}</h4>
                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Landing; 