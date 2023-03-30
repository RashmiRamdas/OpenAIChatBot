import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: "API_KEY",
});
const openai = new OpenAIApi(configuration);

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet(lowerCaseMessage) {
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: lowerCaseMessage,
      })
      .then((response) => {
        const message = response.data.choices[0].text;
        const greetingMessage = this.createChatBotMessage(message);
        this.updateChatbotState(greetingMessage);
      });
    // const greetingMessage = this.createChatBotMessage("Hi, friend.");
    // this.updateChatbotState(greetingMessage);
  }

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in
    // from the top level Chatbot component. The setState function here
    // actually manipulates the top level state of the Chatbot, so it's
    // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
