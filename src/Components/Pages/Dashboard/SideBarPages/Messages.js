import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaUser, FaCalendarAlt, FaInfoCircle, FaSpinner } from 'react-icons/fa';
import './SideBarCss/Messages.css';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all'); // 'all', 'unread', 'read'
    const [updatingId, setUpdatingId] = useState(null);

    // Fetch initial messages
    useEffect(() => {
        fetchMessages();
    }, []);

    // Watch for message status changes and update backend
    useEffect(() => {
        const updateBackend = async (messageId, newStatus) => {
            try {
                setUpdatingId(messageId);
                const response = await fetch(`http://localhost:5000/api/help/update/${messageId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: newStatus })
                });

                const result = await response.json();
                
                if (!result.success) {
                    throw new Error('Failed to update message status');
                }
            } catch (err) {
                console.error('Error updating message status:', err);
                setError('Failed to update message status. Please try again.');
                // Revert the local state change
                setMessages(prevMessages => 
                    prevMessages.map(msg => 
                        msg._id === messageId
                            ? { ...msg, status: msg.status === 'read' ? 'unread' : 'read' }
                            : msg
                    )
                );
            } finally {
                setUpdatingId(null);
            }
        };

        // Find any messages that need to be updated
        messages.forEach(message => {
            if (message.status === 'read' && !updatingId) {
                updateBackend(message._id, 'read');
            }
        });
    }, [messages, updatingId]);

    const fetchMessages = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/help');
            const result = await response.json();
            
            if (result.success) {
                setMessages(result.data);
            } else {
                setError('Failed to fetch messages');
            }
        } catch (err) {
            setError('Error fetching messages: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleMessageClick = (messageId) => {
        setMessages(prevMessages => 
            prevMessages.map(msg => 
                msg._id === messageId && msg.status === 'unread'
                    ? { ...msg, status: 'read' }
                    : msg
            )
        );
    };

    const filteredMessages = messages.filter(message => {
        if (filter === 'all') return true;
        return message.status === filter;
    });

    if (loading) {
        return (
            <div className="loading-container">
                <FaSpinner className="spinner" />
                <p>Loading messages...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <FaInfoCircle className="error-icon" />
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="messages-container">
            <div className="messages-header">
                <h1>Help Requests</h1>
                <div className="filter-buttons">
                    <button 
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
                        onClick={() => setFilter('unread')}
                    >
                        Unread
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'read' ? 'active' : ''}`}
                        onClick={() => setFilter('read')}
                    >
                        Read
                    </button>
                </div>
            </div>

            <div className="messages-stats">
                <div className="stat-card">
                    <FaEnvelope className="stat-icon" />
                    <div className="stat-info">
                        <h3>Total Requests</h3>
                        <p>{messages.length}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FaEnvelope className="stat-icon unread" />
                    <div className="stat-info">
                        <h3>Unread</h3>
                        <p>{messages.filter(m => m.status === 'unread').length}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FaEnvelope className="stat-icon read" />
                    <div className="stat-info">
                        <h3>Read</h3>
                        <p>{messages.filter(m => m.status === 'read').length}</p>
                    </div>
                </div>
            </div>

            <div className="messages-list">
                {filteredMessages.map((message) => (
                    <div 
                        key={message._id} 
                        className={`message-card ${message.status === 'unread' ? 'unread' : ''} ${updatingId === message._id ? 'updating' : ''}`}
                        onClick={() => message.status === 'unread' && handleMessageClick(message._id)}
                    >
                        <div className="message-header">
                            <div className="message-title">
                                <FaUser className="message-icon" />
                                <h3>{message.name}</h3>
                            </div>
                            <span className={`status ${message.status}`}>
                                {updatingId === message._id ? (
                                    <FaSpinner className="status-spinner" />
                                ) : (
                                    message.status
                                )}
                            </span>
                        </div>
                        <div className="message-details">
                            <div className="detail-item">
                                <FaPhone className="detail-icon" />
                                <p><strong>Phone:</strong> {message.phone}</p>
                            </div>
                            <div className="detail-item">
                                <FaEnvelope className="detail-icon" />
                                <p><strong>Email:</strong> {message.email}</p>
                            </div>
                            <div className="detail-item">
                                <FaInfoCircle className="detail-icon" />
                                <p><strong>Type:</strong> {message.ubwoko}</p>
                            </div>
                            <div className="detail-item description">
                                <p><strong>Description:</strong> {message.description}</p>
                            </div>
                            <div className="detail-item">
                                <FaCalendarAlt className="detail-icon" />
                                <p><strong>Date:</strong> {new Date(message.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Messages; 