import React, { useEffect, useState } from "react";

function BotCollection({onAddBot, OnDeleteBot}) {
  // Your code here
const [bots, setBots]=useState([])

useEffect(()=>{
  fetch("/bots")
  .then(response=> response.json())
  .then(data=>setBots(data))
  .catch(error=>console.error("Error fetching boots:", error));
},[]);

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map(bot=>(
           <div className="column" key={bot.id}>
           <BotCard
             bot={bot}
             onAddBot={onAddBot}
             onDeleteBot={onDeleteBot}
           />
           </div>
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
