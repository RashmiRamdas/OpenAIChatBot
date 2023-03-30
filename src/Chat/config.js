import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hello! how may I help you today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ff4d00",//"#376B7E",
    },
    chatButton: {
      backgroundColor: "#ff4d00",//"#376B7E",
    },
  },
}

export default config
