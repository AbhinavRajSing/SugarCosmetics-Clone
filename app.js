let chatIcon = document.getElementById("chatDiv")
let popup = document.getElementById("chatPopup")
let closeBtn = document.getElementById("closeBtn")
let chatInput = document.getElementById("chatInput")
let msgReply = document.getElementById("reply")
let chatBox = document.getElementById("chatBox")
showPopup = () => {
    chatIcon.setAttribute("class", "hideItem")
    popup.setAttribute("class", "chatPopup")
    // showWelcomeMsg()
}

closeEverything = () => {
    chatIcon.setAttribute("class", "chatDiv")
    popup.setAttribute("class", "hideItem")
    chatBox.innerHTML = ""
}

displayMsg = (msg) => {
    msgReply.value = ""
    let userMsg = document.createElement("div")
    let msgText = document.createElement("p")
    userMsg.setAttribute("class", "userMsg")
    msgText.textContent = msg
    userMsg.append(msgText)
    chatBox.append(userMsg)
    scrollDown()
}

scrollDown = () => {
    chatBox.scrollTop = chatBox.scrollHeight;
}

closeBtn.addEventListener("click", closeEverything)
chatIcon.addEventListener("click", showPopup)


chatInput.addEventListener('submit', e => {
    e.preventDefault();
    let msg = e.currentTarget.myText.value
    displayMsg(msg)
});

