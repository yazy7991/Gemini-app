const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(message, className){
    const messageDiv = document.createElement('div')
    messageDiv.classList.add("message", className);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight

}

function showTyping(){
    const typingDiv = document.createElement('div')
    typingDiv.classList.add("message", "bot-message");
    typingDiv.textContent = "Gemini is typing...";
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight
    return typingDiv;
}

sendBtn.onclick = async () =>{
    const message = userInput.value.trim();
    if(message === "") return;
    
    addMessage(message, "user-message");

    userInput.value = "";

    const typingDiv = showTyping();

    const botReply = "Reply";

    typingDiv.remove();

    addMessage(botReply, 'bot-message');

    localStorage.setItem("chatHistory", chatBox.innerHTML)
 
}

userInput.addEventListener('keypress', (e)=>{
    if(e.key === "Enter") sendBtn.click();

})

