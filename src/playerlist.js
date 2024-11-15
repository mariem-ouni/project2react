// src/PlayersList.js
import React from "react";
import Player from "./player";
import players from "./players";

const Playerslist = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default Playerslist;
