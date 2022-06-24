import React from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket('https://socket-map.herokuapp.com/');

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
