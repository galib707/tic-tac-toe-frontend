import React, { useContext } from "react";
import Game from "./components/Game";
import { Route, Routes } from "react-router-dom";
import { socket, SocketContext } from "./context/socketContext";
import { useEffect } from "react";
import { useState } from "react";
import Home from "./components/Home";

export default function App() {
  //console.log(socket);
  let [room, setRoom] = useState(null);
  let [ifX, setIfX] = useState(false);
  useEffect(() => {
    socket.on("ID", (data) => {
      //console.log(data);
    });
  }, []);
  return (
    <SocketContext.Provider value={{ socket, room, setRoom, ifX, setIfX }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:roomID" element={<Game />} />
      </Routes>
    </SocketContext.Provider>
  );
}
