
import React from 'react';
import BotCard from './BotCard';

function YourArmyBot({ bots, onDischargeBot, onPermanentlyRemoveBot }) {
  return (
    <div className="your-army-bot">
      {bots.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          onDischarge={() => onDischargeBot(bot.id)}
          onRemove={() => onPermanentlyRemoveBot(bot.id)}
          showRemoveButton={true}
        />
      ))}
    </div>
  );
}

export default YourArmyBot;
