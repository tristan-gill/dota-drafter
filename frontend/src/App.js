import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Board from './components/Board';
import Home from './components/Home';
import { socket, SocketContext } from './context/socket';
import './App.css';

const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:boardName" element={<Board />} />
        </Routes>
      </Router>
    </SocketContext.Provider>
  );
};

export default App;

