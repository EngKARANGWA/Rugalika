// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./pages css/Help.css";
import React, { useState } from "react";
import { FaHandHoldingHeart, FaGraduationCap, FaHospital, FaHome, FaTimes, FaTree,  FaBookReader } from 'react-icons/fa';
import './ubufasha.css';

const Ubufasha = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        ubwoko: '',
        description: ''
    });

    const helpCategories = [
        {
            icon: <FaHandHoldingHeart />,
            title: "Ubufasha bw'Imibereho",
            description: "Gufasha abaturage mu bibazo by'imibereho yabo ya buri munsi"
        },
        {
            icon: <FaGraduationCap />,
            title: "Ubufasha bw'Uburezi",
            description: "Gufasha abanyeshuri batishoboye mu mashuri"
        },
        {
            icon: <FaHospital />,
            title: "Ubufasha bw'Imibereho myiza",
            description: "Gufasha abarwayi n'abandi bakeneye ubufasha bw'ubuzima"
        },
        {
            icon: <FaTree/>,
            title: "Ubufasha bw'Amashyamba",
            description: "Nasabaga uburenganzira bwo gutema ishyamba"
        },
        {
            icon: <FaBookReader/>,
            title: "Ubufasha bw'Irangamimerere",
            description: "Gufasha ubufasha bwo kwandikisha abana n'ibindi bikorwa bijyanye n'iranga mimerere"
        },
        {
            icon: <FaHome />,
            title: "Ubufasha bw'Imiturire",
            description: "Gufasha abakeneye icumbi n'ibindi bijyanye n'imiturire"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <div className="ubufasha-container">
            <div className="ubufasha-header">
                <h1>Ubufasha</h1>
                <p>Hitamo ubwoko bw'ubufasha ukeneye cyangwa wandike ubufasha bukenewe</p>
            </div>

            <div className="help-categories">
                {helpCategories.map((category, index) => (
                    <div key={index} className="help-card" onClick={() => setIsModalOpen(true)}>
                        <div className="help-icon">{category.icon}</div>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                        <button className="help-button">Saba Ubufasha</button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Saba Ubufasha</h2>
                            <button className="close-button" onClick={() => setIsModalOpen(false)}>
                                <FaTimes />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="help-form">
                            <div className="form-group">
                                <label htmlFor="name">Amazina*</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Andika amazina yawe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Telefoni*</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Andika numero ya telefoni"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Imeyili</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Andika imeyili yawe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="ubwoko">Ubwoko bw'Ubufasha*</label>
                                <select
                                    id="ubwoko"
                                    value={formData.ubwoko}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Hitamo ubwoko bw'ubufasha</option>
                                    <option value="imibereho">Ubufasha bw'Imibereho Mwiza</option>
                                    <option value="uburezi">Ubufasha bw'Uburezi</option>
                                    <option value="ubuzima">Ubufasha bw'Amashyamba</option>
                                    <option value="icumbi">Ubufasha bw'Imiturire</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Ibisobanuro*</label>
                                <textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Sobanura ubufasha ukeneye..."
                                />
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="submit-button">
                                    Ohereza
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Ubufasha;
