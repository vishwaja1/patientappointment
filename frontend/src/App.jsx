import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello, PAM!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
