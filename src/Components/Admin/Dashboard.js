import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadNews from '../Pages/Dashboard/SideBarPages/UploadNews.js';
import './Dashboard.css';
import { 
  FaCalendarAlt, FaEnvelope, FaChartLine, FaClock, FaSignOutAlt, 
  FaUserCircle, FaBell, FaBars, FaNewspaper, FaBullhorn, 
  FaCalendarCheck, FaComments, FaChartBar, FaTimes, FaCheckCircle 
} from 'react-icons/fa';
import Appointments from '../Pages/Dashboard/SideBarPages/Appointments.js';
import Charts from '../Pages/Dashboard/SideBarPages/Charts.js';
import Messages from '../Pages/Dashboard/SideBarPages/Messages.js';
import Tasks from '../Pages/Dashboard/SideBarPages/Tasks.js';
import Announcement from '../Pages/Dashboard/SideBarPages/Announcements.js';
import Planning from '../Pages/Dashboard/SideBarPages/Planning.js';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Sample data - replace with real data from your backend
  const appointments = [
    { id: 1, name: "John Doe", service: "Ubutaka", date: "2024-03-25", status: "pending" },
    { id: 2, name: "Jane Smith", service: "Imiturire", date: "2024-03-26", status: "approved" },
    { id: 3, name: "Mike Johnson", service: "Amashyamba", date: "2024-03-27", status: "pending" },
  ];

  const meetings = [
    { id: 1, title: "Weekly Staff Meeting", date: "2024-03-25", time: "09:00 AM" },
    { id: 2, title: "Community Development", date: "2024-03-26", time: "02:00 PM" },
    { id: 3, title: "Budget Review", date: "2024-03-28", time: "10:00 AM" },
  ];

  const progressData = {
    daily: {
      appointments: 12,
      resolved: 8,
      pending: 4
    },
    weekly: {
      appointments: 45,
      resolved: 38,
      pending: 7
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaChartBar /> },
    { id: 'tasks', label: 'Tasks', icon: <FaCheckCircle /> },
    { id: 'upload-news', label: 'Upload News', icon: <FaNewspaper /> },
    { id: 'announcements', label: 'Announcements', icon: <FaBullhorn /> },
    { id: 'appointments', label: 'Appointments', icon: <FaCalendarCheck /> },
    { id: 'messages', label: 'Messages', icon: <FaComments /> },
    { id: 'planning', label: 'Planning', icon: <FaCalendarAlt /> },
    { id: 'progress', label: 'Progress Chart', icon: <FaChartLine /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <FaUserCircle className="sidebar-avatar" />
          <span>Admin Panel</span>
          <button className="close-sidebar" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`dashboard-main ${isSidebarOpen ? 'shifted' : ''}`}>
        {/* Top Bar */}
        <div className="dashboard-top-bar">
          <div className="top-bar-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <span className="current-section">
              {menuItems.find(item => item.id === activeSection)?.label}
            </span>
          </div>
          <div className="top-bar-actions">
            <button className="notification-btn">
              <FaBell />
              <span className="notification-badge">3</span>
            </button>
            <button className="logout-button" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* Dynamic Content Based on Active Section */}
        <div className="dashboard-content">
          {activeSection === 'dashboard' && (
            // Your existing dashboard content
            <>
              <div className="stats-overview">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaCalendarAlt />
                  </div>
                  <div className="stat-info">
                    <h3>Today's Appointments</h3>
                    <p>{progressData.daily.appointments}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaEnvelope />
                  </div>
                  <div className="stat-info">
                    <h3>New Messages</h3>
                    <p>15</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaChartLine />
                  </div>
                  <div className="stat-info">
                    <h3>Weekly Progress</h3>
                    <p>{Math.round((progressData.weekly.resolved / progressData.weekly.appointments) * 100)}%</p>
                  </div>
                </div>
              </div>
              <div className="dashboard-grid">
                {/* Appointments Section */}
                <div className="dashboard-section">
                  <h2>Recent Appointments</h2>
                  <div className="appointments-list">
                    {appointments.map(appointment => (
                      <div key={appointment.id} className={`appointment-card ${appointment.status}`}>
                        <div className="appointment-info">
                          <h3>{appointment.name}</h3>
                          <p>{appointment.service}</p>
                          <span className="appointment-date">
                            <FaClock /> {appointment.date}
                          </span>
                        </div>
                        <div className="appointment-status">
                          {appointment.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Meetings */}
                <div className="dashboard-section">
                  <h2>Upcoming Meetings</h2>
                  <div className="meetings-list">
                    {meetings.map(meeting => (
                      <div key={meeting.id} className="meeting-card">
                        <div className="meeting-time">
                          <FaClock />
                          <span>{meeting.time}</span>
                        </div>
                        <div className="meeting-info">
                          <h3>{meeting.title}</h3>
                          <p>{meeting.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Section */}
                <div className="dashboard-section progress-section">
                  <h2>Progress Overview</h2>
                  <div className="progress-cards">
                    <div className="progress-card">
                      <h3>Daily Progress</h3>
                      <div className="progress-stats">
                        <div className="progress-item">
                          <span>Total</span>
                          <span>{progressData.daily.appointments}</span>
                        </div>
                        <div className="progress-item">
                          <span>Resolved</span>
                          <span>{progressData.daily.resolved}</span>
                        </div>
                        <div className="progress-item">
                          <span>Pending</span>
                          <span>{progressData.daily.pending}</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-card">
                      <h3>Weekly Progress</h3>
                      <div className="progress-stats">
                        <div className="progress-item">
                          <span>Total</span>
                          <span>{progressData.weekly.appointments}</span>
                        </div>
                        <div className="progress-item">
                          <span>Resolved</span>
                          <span>{progressData.weekly.resolved}</span>
                        </div>
                        <div className="progress-item">
                          <span>Pending</span>
                          <span>{progressData.weekly.pending}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {activeSection === 'tasks' && (
            <div className="section-content">
              <Tasks />
            </div>
          )}

          {activeSection === 'upload-news' && (
            <div className="section-content">
              <UploadNews />
            </div>
          )}

          {activeSection === 'announcements' && (
            <div className="section-content">
              <h2>Announcements</h2>
             < Announcement/>
            </div>
          )}

          {activeSection === 'appointments' && (
            <div className="section-content">
              <Appointments />
            </div>
          )}

          {activeSection === 'messages' && (
            <div className="section-content">
              <Messages />
            </div>
          )}
          {activeSection === 'Planning' && (
             <div className="section-content">
               <Planning />
            </div>
          )}
          {activeSection === 'progress' && (
            <div className="section-content">
              <Charts />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 