import React from 'react';
import './App.css';
import Contents from './Components/Contents.js';
import { Link } from 'react-router-dom';

function App() {
  return (
    // <Router>
      <div className="App">
        <Contents />
        <div className="quick-links">
          {/* Quick link to navigate to the /u route */}
          <Link to="/Ibitekerezo" className="quick-link">
            Go to Idea Page
          </Link>
        </div>
      </div>
    // </Router>
  );
}

export default App;
