// script.js
const userNameInput = document.getElementById("userName");
const chatCodeInput = document.getElementById("chatCode");
const welcomeDiv = document.querySelector(".welcome");
const chatDiv = document.getElementById("chat");
const chatMessagesDiv = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");

function startChat() {
    const userName = userNameInput.value;
    const chatCode = chatCodeInput.value;

    // Validate user input (e.g., check if name is not empty and code is 4 digits)
    if (!userName || !chatCode.match(/^\d{4}$/)) {
        alert("Please enter a valid name and a 4-digit code.");
        return;
    }

    // Hide welcome div, show chat div
    welcomeDiv.style.display = "none";
    chatDiv.style.display = "block";
}

function sendMessage() {
    const message = messageInput.value;
    // Add the message to the chat interface (you can format it as needed)
    chatMessagesDiv.innerHTML += `<div>${userName}: ${message}</div>`;
    messageInput.value = "";
}

// Add more code to handle receiving messages and sending them to friends
