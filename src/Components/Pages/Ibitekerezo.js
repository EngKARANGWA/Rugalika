import React, { useState } from 'react';
import { FaLightbulb, FaComment, FaThumbsUp, FaShare, FaUserCircle } from 'react-icons/fa';
import './ibitekerezo.css';

const Ibitekerezo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newIdea, setNewIdea] = useState({
    title: '',
    description: '',
    category: '',
    author: ''
  });

  const ideas = [
    {
      id: 1,
      title: "Gushyiraho Isoko Nshya",
      author: "Kamana Jean",
      date: "25 Werurwe 2024",
      category: "Iterambere",
      description: "Twakwifuza ko muri aka gace hashyirwaho isoko nshya kugirango bitwororohereze kugura ibintu by'ibanze...",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      title: "Kubaka Ikigo Nderabuzima",
      author: "Uwase Marie",
      date: "24 Werurwe 2024",
      category: "Ubuzima",
      description: "Kubera intera ndende tugenda tujya kwa muganga, twasaba ko hakorwa ibishoboka ikigo nderabuzima kikubakwa...",
      likes: 45,
      comments: 12
    },
    {
      id: 3,
      title: "Gushyiraho Amashuri y'Imyuga",
      author: "Mugisha Eric",
      date: "23 Werurwe 2024",
      category: "Uburezi",
      description: "Urubyiruko rwacu rukeneye ubumenyi bw'imyuga. Twakwifuza ko hashyirwaho ishuri ry'imyuga...",
      likes: 32,
      comments: 15
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(newIdea);
    setIsModalOpen(false);
    setNewIdea({ title: '', description: '', category: '', author: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIdea(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="ibitekerezo-container">
      <div className="ibitekerezo-header">
        <h1>Ibitekerezo by'Abaturage</h1>
        <p>Tanga ibitekerezo byawe ku iterambere ry'umurenge wacu</p>
        <button className="add-idea-btn" onClick={() => setIsModalOpen(true)}>
          <FaLightbulb /> Tanga Igitekerezo
        </button>
      </div>

      <div className="ideas-grid">
        {ideas.map(idea => (
          <div key={idea.id} className="idea-card">
            <div className="idea-header">
              <div className="author-info">
                <FaUserCircle className="avatar" />
                <div>
                  <h3>{idea.author}</h3>
                  <span>{idea.date}</span>
                </div>
              </div>
              <span className="category-tag">{idea.category}</span>
            </div>

            <div className="idea-content">
              <h2>{idea.title}</h2>
              <p>{idea.description}</p>
            </div>

            <div className="idea-actions">
              <button className="action-btn">
                <FaThumbsUp /> {idea.likes}
              </button>
              <button className="action-btn">
                <FaComment /> {idea.comments}
              </button>
              <button className="action-btn">
                <FaShare />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Tanga Igitekerezo</h2>
              <button className="close-button" onClick={() => setIsModalOpen(false)}>×</button>
            </div>

            <form onSubmit={handleSubmit} className="idea-form">
              <div className="form-group">
                <label htmlFor="author">Amazina*</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={newIdea.author}
                  onChange={handleInputChange}
                  required
                  placeholder="Andika amazina yawe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Umutwe w'Igitekerezo*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newIdea.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Andika umutwe w'igitekerezo cyawe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Icyiciro*</label>
                <select
                  id="category"
                  name="category"
                  value={newIdea.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Hitamo icyiciro</option>
                  <option value="Iterambere">Iterambere</option>
                  <option value="Ubuzima">Ubuzima</option>
                  <option value="Uburezi">Uburezi</option>
                  <option value="Umutekano">Umutekano</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Igitekerezo*</label>
                <textarea
                  id="description"
                  name="description"
                  value={newIdea.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Andika igitekerezo cyawe..."
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">
                  Ohereza Igitekerezo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ibitekerezo;