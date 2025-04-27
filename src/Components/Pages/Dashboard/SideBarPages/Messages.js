import React, { useState } from 'react';
import { FaReply, FaTrash, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';
import './SideBarCss/Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      email: "john@example.com",
      subject: "Land Registration Query",
      message: "I need information about land registration process.",
      date: "2024-03-20",
      isRead: false,
      replies: []
    },
    {
      id: 2,
      sender: "Jane Smith",
      email: "jane@example.com",
      subject: "Building Permit",
      message: "How can I apply for a building permit?",
      date: "2024-03-19",
      isRead: true,
      replies: [
        {
          id: 1,
          message: "Please visit our office with your documents.",
          date: "2024-03-19",
          isAdmin: true
        }
      ]
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    if (!message.isRead) {
      setMessages(messages.map(msg => 
        msg.id === message.id ? { ...msg, isRead: true } : msg
      ));
    }
    setShowReplyForm(false);
  };

  const handleReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newReply = {
      id: selectedMessage.replies.length + 1,
      message: replyText,
      date: new Date().toISOString().split('T')[0],
      isAdmin: true
    };

    setMessages(messages.map(msg => 
      msg.id === selectedMessage.id 
        ? { ...msg, replies: [...msg.replies, newReply] }
        : msg
    ));

    setReplyText('');
    setShowReplyForm(false);
    setSelectedMessage({ ...selectedMessage, replies: [...selectedMessage.replies, newReply] });
  };

  const handleDelete = (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(msg => msg.id !== messageId));
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
      }
    }
  };

  return (
    <div className="messages-container">
      <div className="messages-sidebar">
        <div className="messages-header">
          <h2>Messages</h2>
          <span className="message-count">
            {messages.filter(msg => !msg.isRead).length} unread
          </span>
        </div>
        <div className="messages-list">
          {messages.map(message => (
            <div
              key={message.id}
              className={`message-item ${!message.isRead ? 'unread' : ''} ${selectedMessage?.id === message.id ? 'selected' : ''}`}
              onClick={() => handleMessageClick(message)}
            >
              <div className="message-icon">
                {message.isRead ? <FaEnvelopeOpen /> : <FaEnvelope />}
              </div>
              <div className="message-preview">
                <div className="message-sender">{message.sender}</div>
                <div className="message-subject">{message.subject}</div>
                <div className="message-date">{message.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="message-content">
        {selectedMessage ? (
          <div className="selected-message">
            <div className="message-header">
              <div className="message-info">
                <h3>{selectedMessage.subject}</h3>
                <p>From: {selectedMessage.sender} ({selectedMessage.email})</p>
                <p>Date: {selectedMessage.date}</p>
              </div>
              <div className="message-actions">
                <button 
                  className="reply-btn"
                  onClick={() => setShowReplyForm(true)}
                >
                  <FaReply /> Reply
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(selectedMessage.id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>

            <div className="message-body">
              <p>{selectedMessage.message}</p>
            </div>

            {selectedMessage.replies.length > 0 && (
              <div className="message-replies">
                <h4>Replies</h4>
                {selectedMessage.replies.map(reply => (
                  <div key={reply.id} className={`reply ${reply.isAdmin ? 'admin-reply' : ''}`}>
                    <p>{reply.message}</p>
                    <span className="reply-date">{reply.date}</span>
                  </div>
                ))}
              </div>
            )}

            {showReplyForm && (
              <form onSubmit={handleReply} className="reply-form">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply..."
                  required
                />
                <div className="reply-actions">
                  <button type="button" onClick={() => setShowReplyForm(false)}>
                    Cancel
                  </button>
                  <button type="submit">Send Reply</button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="no-message-selected">
            <FaEnvelope />
            <p>Select a message to read</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages; 