class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    this.actionProvider.greet(lowerCaseMessage);
  }
}

export default MessageParser;
