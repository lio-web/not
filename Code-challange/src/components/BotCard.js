import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onAddBot, onDeleteBot }) {

  const handleAddBot = () => {
    if (onAddBot) {
      onAddBot(bot);
    }
  };

  const handleDeleteBot = (event) => {
    event.stopPropagation(); // Prevents event bubbling
    if (onDeleteBot) {
      onDeleteBot(bot.id);
    }
  };

  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={handleAddBot}>
        <div className="image">
          <img alt={`${bot.name} avatar`} src={bot.avatar_url} /> {/* Improved alt text */}
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <div className="ui center aligned segment basic">
            <button
              className="ui mini red button"
              onClick={handleDeleteBot}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
