import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import Navibar from './Components/Navibar.js';
import Ibitekerezo from './Components/Pages/Ibitekerezo.js';
import Home from './Home.js';
import Ubufasha from './Components/Pages/Ubufasha.js';
import Announcement from './Components/Pages/Announcement.js';
import Health from './Components/Pages/Health.js';
import Commercial from './Components/Pages/commercial.js';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Education from './Components/Pages/Education.js';
import Dashboard from './Components/Admin/Dashboard.js';
import ProtectedRoute from './Components/Auth/ProtectedRoute.js';
import Login from './Components/Pages/Login.js';
import UploadNews from './Components/Pages/Dashboard/SideBarPages/UploadNews.js';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/dashboard' || location.pathname === '/login' || location.pathname.startsWith('/dashboard/');

  if (isAdminRoute) {
    return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/dashboard/upload-news" element={
            <ProtectedRoute>
              <UploadNews />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="Ibitekerezo" element={<Ibitekerezo />} />
        <Route path="Ubufasha" element={<Ubufasha />} />
        <Route path="Announcement" element={<Announcement />} />
        <Route path="Health" element={<Health />} />
        <Route path="Commercial" element={<Commercial />} />
        <Route path="Education" element={<Education />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
