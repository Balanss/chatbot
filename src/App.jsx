/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import './index.css';

const App = () => {



  useEffect(() => {
    const script = document.createElement("script");
script.src="https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with Purry",
        botConversationDescription: "This chatbot was built surprisingly fast with Botpress",
        botId: import.meta.env.VITE_SOME_API_KEY,
        hostUrl: import.meta.env.VITE_SOME_HOST_URL,
        messagingUrl: import.meta.env.VITE_SOME_MESSAGE_URL,
        clientId: import.meta.env.VITE_SOME_CLIENT_ID,
        botName: import.meta.env.VITE_SOME_BOT,
        useSessionStorage: true,
        showPoweredBy: true,
        // stylesheet: 'https://style-.....a.vercel.app/bot.css',
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  





  return (
    <div>
      <div id="botpress-webchat"></div>
    </div>
  );
};

export default App;
