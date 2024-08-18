
import React from 'react';

function BotCard({ bot, onEnlist, onDischarge, onRemove, showRemoveButton }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      {onEnlist && <button onClick={() => onEnlist(bot)}>Enlist</button>}
      {showRemoveButton && <button className="remove-button" onClick={() => onRemove(bot.id)}>x</button>}
    </div>
  );
}

export default BotCard;
