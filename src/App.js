import "./App.css";
import Chat from "./Chat/Chat";
import Chatbot from "react-chatbot-kit";

import ActionProvider from "./Chat/SimpleBot/ActionProvider";
import MessageParser from "./Chat/SimpleBot/MessageParser";
import config from "./Chat/SimpleBot/config";
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

// function App() {
//   return (
//     <div className="App">
//       <Chat />
//     </div>
//   );
// }

export default App;
