import React, { useState, useEffect } from 'react';
import './Messages.css';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMessages();
    }, []);

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

    if (loading) return <div className="loading">Loading messages...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="messages-container">
            <h1>Help Requests</h1>
            <div className="messages-list">
                {messages.map((message) => (
                    <div key={message._id} className="message-card">
                        <div className="message-header">
                            <h3>{message.name}</h3>
                            <span className={`status ${message.status}`}>{message.status}</span>
                        </div>
                        <div className="message-details">
                            <p><strong>Phone:</strong> {message.phone}</p>
                            <p><strong>Email:</strong> {message.email}</p>
                            <p><strong>Type:</strong> {message.ubwoko}</p>
                            <p><strong>Description:</strong> {message.description}</p>
                            <p><strong>Date:</strong> {new Date(message.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Messages; 