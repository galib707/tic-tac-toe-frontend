import React from "react";
import { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/socketContext";

function Home() {
  const { socket, room, setRoom, ifX, setIfX } = useContext(SocketContext);
  const goTo = useNavigate();
  let [randomKey, setRandomKey] = useState(null);
  let [joinID, setJoinID] = useState(null);

  const createArena = () => {
    let randomK = Math.random().toString(36).substring(2, 13);
    // let randomK = "ABC";
    setRoom(() => randomK);
    setIfX(() => true);
    socket.emit("create-room", { roomID: randomK, owner: socket.id });
    goTo(`/${randomK}`);
  };

  function joinRoom() {
    socket.emit("join-room", { roomID: joinID, joiner: socket.id });
    socket.on("join-access", (data) => {
      if (data.valid) {
        setRoom(() => joinID);
        goTo(`/${joinID}`);
        console.log(data.resp);
      } else {
        alert(data.resp);
        console.log(data.resp);
      }
    });
  }

  return (
    <div className="home">
      <button
        onClick={() => {
          createArena();
        }}
      >
        create room
      </button>
      <div className="join-room">
        <input type="text" onChange={(e) => setJoinID(e.target.value)} />
        <button
          onClick={() => {
            joinRoom();
          }}
        >
          join room
        </button>
      </div>
    </div>
  );
}

export default Home;
