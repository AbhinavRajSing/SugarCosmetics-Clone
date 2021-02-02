let chatIcon = document.getElementById("chatDiv")
let popup = document.getElementById("chatPopup")
let closeBtn = document.getElementById("closeBtn")
let chatInput = document.getElementById("chatInput")
let msgReply = document.getElementById("reply")
showPopup = () => {
    chatIcon.setAttribute("class", "hideItem")
    popup.setAttribute("class", "chatPopup")
}

closeEverything = () => {
    chatIcon.setAttribute("class", "chatDiv")
    popup.setAttribute("class", "hideItem")
}

displayMsg = (msg) => {
    // alert(msg)
    msgReply.value = ""
}

closeBtn.addEventListener("click", closeEverything)
chatIcon.addEventListener("click", showPopup)


chatInput.addEventListener('submit', e => {
    e.preventDefault();
    // alert(e.currentTarget.myText.value);
    let msg = e.currentTarget.myText.value
    displayMsg(msg)
});