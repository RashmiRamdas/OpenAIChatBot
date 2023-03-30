import "./App.css";
import Chatbot from "react-chatbot-kit";

import ActionProvider from "./Chat/ActionProvider";
import MessageParser from "./Chat/MessageParser";
import config from "./Chat/config";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [show, setShow] = useState(false);

  const toggleChatIcon = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <div>
        {show && (
          <Chatbot
            headerText="Droplets Buddy"
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        )}
      </div>

      <i class="fa-solid fa-user"></i>
      <FontAwesomeIcon
        className="chat-icon"
        icon={faEnvelope}
        onClick={toggleChatIcon}
      />
    </div>
  );
}


export default App;
