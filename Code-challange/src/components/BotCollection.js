import React, { useEffect, useState } from "react";
import BotCard from "./BotCard"; // Import BotCard component

function BotCollection({ onAddBot, onDeleteBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <div className="column" key={bot.id}>
            <BotCard bot={bot} onAddBot={onAddBot} onDeleteBot={onDeleteBot} /> 
          </div>
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
