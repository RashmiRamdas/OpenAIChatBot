import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form
        className="chat-form"
        onSubmit={(event) => {
          event.preventDefault();
          const input = event.target.elements.message;
          const text = input.value;
          input.value = "";
          // Send the message to the GPT-3 model and add the response to the chat
          // Add your code here…
          openai
            .createCompletion({
              model: "text-davinci-003",
              prompt: text,
            })
            .then((response) => {
              const message = response.data.choices[0].text;
              addMessage(message);
            });
        }}
      >
        <input type="text" placeholder="Enter your message" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
