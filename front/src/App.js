import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MetadataList from './MetadataList';
import MetadataForm from './MetadataForm';

function App()
{
  return (
    <Router>
      <div className="App">
        <h1>Metadata Management</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/metadata/all">Metadata List</Link></li>
            <li><Link to="/metadata/new">Add Metadata</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Welcome to Metadata Management</h2>} /> 
          <Route path="/metadata/all" element={<MetadataList />} />
          <Route path="/metadata/new" element={<MetadataForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
