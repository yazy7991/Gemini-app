const chatBox = document.getElementById("chat-box"); // Chat container
const userInput = document.getElementById("user-input"); // Input field
const sendBtn = document.getElementById("send-btn"); // Send button

function addMessage(message, className){
    const messageDiv = document.createElement('div')
    messageDiv.classList.add("message", className);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight

} // Function to add message to chat box

function showTyping(){
    const typingDiv = document.createElement('div')
    typingDiv.classList.add("message", "bot-message");
    typingDiv.textContent = "Gemini is typing...";
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight
    return typingDiv;
} // Function to show typing indicator

async function getBotReply(userMessage){
   const backendURL = "http://localhost:3001/api/v1/chat";
   console.log(userMessage)

   const reply = JSON.stringify({message: userMessage})

   console.log(reply);

   const response = await fetch(backendURL, {
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({message: userMessage})
   })

   

   return response;

} // Function to get bot reply from backend

sendBtn.onclick = async () =>{
    const message = userInput.value.trim();
    if(message === "") return;
    
    addMessage(message, "user-message");

    userInput.value = "";

    const typingDiv = showTyping();

    const botReply = await getBotReply(message);

    typingDiv.remove();

    addMessage(botReply, 'bot-message');

    localStorage.setItem("chatHistory", chatBox.innerHTML)
} // Send button click event

userInput.addEventListener('keypress', (e)=>{
    if(e.key === "Enter") sendBtn.click();
})

window.addEventListener('load', ()=>{
    const savedChat = localStorage.getItem("chatHistory");
    if(savedChat) chatBox.innerHTML = savedChat;
}) // Load chat history on page load



