// src/App.js
import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [army, setArmy] = useState([]);

  const handleEnlistBot = (bot) => {
    if (!army.find(b => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    }
  };

  const handleDischargeBot = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  const handlePermanentlyRemoveBot = (id) => {
    fetch(`/bots/${id}`, {
      method: 'DELETE',
    })
    .then(() => setArmy(army.filter(bot => bot.id !== id)));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <div className="bot-collection-container">
        <BotCollection onEnlistBot={handleEnlistBot} />
      </div>
      <div className="your-bot-army-container">
        <YourBotArmy
          bots={army}
          onDischargeBot={handleDischargeBot}
          onPermanentlyRemoveBot={handlePermanentlyRemoveBot}
        />
      </div>
    </div>
  );
}

export default App;
