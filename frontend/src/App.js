import './App.css';
import React, { useState, useEffect } from 'react'
import { io } from "socket.io-client";

import Board from './components/Board';

const socket = io.connect('http://localhost:3000');

const App = () => {
  const [draft, setDraft] = useState(null);

  useEffect(() => {
    socket.on('draft', (d) => {
      setDraft(d)
    });

    return () => {
      socket.off('draft');
    };
  }, []);

  return (
    <div>
      <Board draft={draft} />
    </div>
  );
};

export default App;

