import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const BotPage = () => {
  const [army, setArmy] = useState([]);

  const addBotToArmy = (bot) => {
    setArmy(prevArmy => [...prevArmy, bot]);
  };

  const removeBotFromArmy = (botId) => {
    setArmy(prevArmy => prevArmy.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setArmy(prevArmy => prevArmy.filter(bot => bot.id !== botId));
      });
  };

  return (
    <div>
      <BotCollection onAddBot={addBotToArmy} onDeleteBot={dischargeBot} />
      <YourBotArmy
        army={army}
        removeBotFromArmy={removeBotFromArmy}
        dischargeBot={dischargeBot}
      />
    </div>
  );
};

export default BotPage;
