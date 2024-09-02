import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, removeBotFromArmy, dischargeBot }) {
  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        
        {army.length > 0 ? (
            army.map(bot => (
              <div className="column" key={bot.id}>
                <BotCard
                  bot={bot}
                  onAddBot={removeBotFromArmy} // Use onAddBot to remove the bot from the army
                  onDeleteBot={dischargeBot}   // Use onDeleteBot to discharge the bot permanently
                />
              </div>
            ))
          ) : (
            <div className="column">
              <p>Your bot army is empty.</p>
            </div>
          )}
         
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
