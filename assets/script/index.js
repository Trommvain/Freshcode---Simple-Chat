const chatWindow = document.querySelector("#chat-window");
const userMessageForm = document.querySelector("#user-message-form");

let botMessageCounter = 0;
function sendBotMessage() {
  const botMsg = document.createElement("div");
  botMsg.classList.add("bot", "msg");
  botMsg.textContent = `This is ${++botMessageCounter} message from our bot. Want some more? ;-)`;
  chatWindow.append(botMsg);
}

userMessageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { target: formElem } = e;
  if (formElem.elements.textarea.value !== "") {
    const userMsg = document.createElement("div");
    userMsg.classList.add("user", "msg");
    userMsg.textContent = formElem.elements.textarea.value;
    chatWindow.append(userMsg);
    userMessageForm.reset();
    sendBotMessage();
  }
});
