import { createContext } from 'react'
import { io } from "socket.io-client";

export const socket = io.connect('https://dota-drafter-6a4237bd4184.herokuapp.com/');
export const SocketContext = createContext();
