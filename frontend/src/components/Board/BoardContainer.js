import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

import Board from './Board';

const BoardContainer = () => {
  const { boardName } = useParams();
  const [draft, setDraft] = useState(null);

  useEffect(() => {
    if (!boardName) return;

    const socket = io.connect('https://dota-drafter-6a4237bd4184.herokuapp.com/');
    
    socket.emit('join', boardName);

    socket.on('draft', (d) => {
      setDraft(d)
    });

    return () => {
      socket.off('draft');
    };
  }, [boardName]);

  return (
    <div>
      <Board draft={draft} boardName={boardName} />
    </div>
  );
}

export default BoardContainer;
