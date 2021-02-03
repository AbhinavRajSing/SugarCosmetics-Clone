//---------------------------------------loading Animation starts here-------------------------------------------//
let loader = `
                <div class="boxLoading">
                    <img class=img"" src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif">
                </div>`;
//---------------------------------------Loading Animation ends here-------------------------------------------//

//---------------------------------------Featured pagination starts here-------------------------------------------//
window.addEventListener('load', getFeaData)

function getFeaData(){
    let count = 1
    document.getElementById("nextBtn").addEventListener('click', function(){
        count++
        if(count>3){
            document.getElementById("diaplayFData").innerHTML = loader
            fetch(`http://localhost:3000/featured?_page=3&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
            count = 3
        }
        else{
            document.getElementById("diaplayFData").innerHTML = loader
            fetch(`http://localhost:3000/featured?_page=${count}&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
        }
    })

    document.getElementById("prevBtn").addEventListener('click', function(){
        count--
        if(count == 1 || count < 1){
            document.getElementById("diaplayFData").innerHTML = loader
            fetch(`http://localhost:3000/featured?_page=1&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
            count = 1
        }
        else{
            document.getElementById("diaplayFData").innerHTML = loader
            fetch(`http://localhost:3000/featured?_page=${count}&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
        }
    })

    document.getElementById("diaplayFData").innerHTML = loader
    fetch(`http://localhost:3000/featured?_page=1&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
}

function displayData(data){
    let html = ""
    for(i in data){
        let img = data[i].img
        // console.log(img)
        html += `                
        <div class="displayCard">
            <img class="img" src="${img}" alt="">
        </div>`
        
        document.getElementById("diaplayFData").innerHTML = html
    }
}

//---------------------------------------Featured pagination ends here-------------------------------------------//

//---------------------------------------JustIn pagination starts here-------------------------------------------//
window.addEventListener('load', getJustInData)

function getJustInData(){
    let count = 1

    document.getElementById("nextBtnIn").addEventListener('click', function(){
        count++
        if(count>8){
            document.getElementById("diaplayJustInData").innerHTML = loader
            fetch(`http://localhost:3000/combined?_page=8&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
            count = 8
        }
        else{
            document.getElementById("diaplayJustInData").innerHTML = loader
            fetch(`http://localhost:3000/combined?_page=${count}&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
        }
    })

    document.getElementById("prevBtnIn").addEventListener('click', function(){
        count--
        if(count == 1 || count < 1){
            document.getElementById("diaplayJustInData").innerHTML = loader
            fetch(`http://localhost:3000/combined?_page=1&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
            count = 1
        }
        else{
            document.getElementById("diaplayJustInData").innerHTML = loader
            fetch(`http://localhost:3000/combined?_page=${count}&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
        }
    })
    document.getElementById("diaplayJustInData").innerHTML = loader
    fetch(`http://localhost:3000/combined?_page=1&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
}

function displayJustInData(data){
    let Jhtml = ""
    for(i in data){
        let img = data[i].img
        // console.log(img)
        Jhtml += `                
        <div class="displayCard">
            <img class="img" src="${img}" alt="">
        </div>`
        
        document.getElementById("diaplayJustInData").innerHTML = Jhtml
    }
}

//---------------------------------------JustIn pagination ends here-------------------------------------------//

//---------------------------------------live search starts here-------------------------------------------//

document.getElementById("searchItems").addEventListener('keyup', liveSearch)

function liveSearch(e){
    let search = e.target.value
    search.trim()
    extractItems(search)
}

function extractItems(val){ 
    let data = val
    document.getElementById("midDisplay").innerHTML = loader
    fetch(`http://localhost:3000/combined/?q=${data}`).then(res => res.json()).then(Sdata => displaySearchData(Sdata, val)).catch((Error) => console.log(Error))
}

function displaySearchData(Sdata, val){
    console.log(val)

    if(val !== ""){
        let Shtml = ""
        document.getElementById("midDisplay").setAttribute('class', 'displaySearchItem')
        for(i in Sdata){
            let img = Sdata[i].img
            // console.log(img)
            Shtml += `             
                <div class="displayCard">
                    <img class="img" src="${img}" alt="">
                </div>`
            
            document.getElementById("midDisplay").innerHTML = Shtml
        }
    }
    else if(val === "" || val === [] || val === null){
        window.location.href = "H&F.html"
    }
}

//---------------------------------------live search ends here-------------------------------------------//

//---------------------------------------mid Ads banner starts here-------------------------------------------//

window.addEventListener('load', function(){
    document.getElementById("display__Adds").innerHTML = loader
    fetch('http://localhost:3000/bannerAdds').then(res => res.json()).then(data => displayAddsBanner(data)).catch((Error) => console.log(Error))
})

function displayAddsBanner(data){
    let Ahtml = ""
    for(i in data){
        let img = data[i].img
        
        Ahtml += `                
        <div class="adds__Cards">
            <img class="img" src="${img}" alt="">
        </div>`
        
        document.getElementById("display__Adds").innerHTML = Ahtml
    }
}

//---------------------------------------mid Ads banner ends here-------------------------------------------//

//---------------------------------------clearance div starts here-------------------------------------------//

window.addEventListener('load', function(){
    document.getElementById("display__Clearance__page").innerHTML = loader
    fetch('http://localhost:3000/clearance').then(res => res.json()).then(data => displayClearance(data)).catch((Error) => console.log(Error))
})

function displayClearance(data){
    let Chtml = ""
    for(i in data){
        let img = data[i].img
        
        Chtml += `                
        <div class="adds__Cards">
            <img class="img" src="${img}" alt="">
        </div>`
        
        document.getElementById("display__Clearance__page").innerHTML = Chtml
    }
}
//---------------------------------------clearance div starts here-------------------------------------------//
//---------------------------------------slides for top carousel starts here-------------------------------------------//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//---------------------------------------slides for top carousel ends here-------------------------------------------//

//---------------------------------------ChatBot code starts here-------------------------------------------//

let welcomeFlag = false
let line1 = "Hello there! Need help? Reach out to us right here, and we'll get back to you as soon as we can!";
let line2 = "Yes I'm live!!";
let line3 = "I'm your ChatBot Gryffindor";
let line4 = "let me know if you need Any Help"
let welcomeLines = [line1, line2, line3, line4]
let chatIcon = document.getElementById("chatDiv")
let popup = document.getElementById("chatPopup")
let closeBtn = document.getElementById("closeBtn")
let chatInput = document.getElementById("chatInput")
let msgReply = document.getElementById("reply")
let chatBox = document.getElementById("chatBox")
let botAnswers = {
    "product": ["We have lipsticks with variety of different colours and shades ranging from ₹199 to ₹1299", 
            "Checkout our Liquid Lip Colors, i'm sure you will be Amazed", 
            "Checkout our value set which has discounted product combos", 
            "did you checked our recent blog post ? we have added list of some new product there.", 
            "There is new Gifting section, from there you can choose wide range of most suitable gifting sets.", 
            "Our Limited Edition Makeup kit is Back, place your order before it again get out of stock", 
            "We have introduce some mini sets for teenager like you, take a look at it in Mini set section",],
    "offer": ["Beginne's Must have kit 2.0, Bestselling Makeup Hits + Sheet Mask + Quirkly Doodle Pouch, Only at ₹999",
            "DEAL OF THE MONTH, Get A Beauty Bestseller, worth up to ₹149 on shopping of ₹499",
            "DEAL OF THE MONTH, Get A Treandy Croc Pouch Or A makeup Bestseller, worth up to ₹599 on shopping of ₹999",
            "DEAL OF THE MONTH, Get A Luxe Lipstick or  Fun Merchandise, worth up to ₹1198 on shopping of ₹1999",
            "DEAL OF THE MONTH, Get An Eyeshadow Palette + Lip Crayon, worth up to ₹1998 on shopping of ₹2499"],
    "face": ["Charcoal Patrol Face Mask at only ₹99",
            "Sugar Cheat Sheet Brightening Mask at only ₹149",
            "Charcoal Patrol Bubble Mask at only ₹149",
            "Aquaholic Water Boost Mask at only ₹149",
            "Cheat Sheet Anti-Aging Mask at only ₹99",
            "Power Clay Peel Off Mask at only ₹499",
            "Cheat Sheet Clarifying Mask at only ₹99",
            "Power Clay 3-Min Pore Cleansing Mask at only ₹499",
            "Sugar Cheat Sheet Pore Care Mask at only ₹149"]
}
let keyArr = Object.keys(botAnswers)
let audio = new Audio("https://tgdown.eu-gb.mybluemix.net/4292994105966528/ting.mp3")

showPopup = () => {
    chatIcon.setAttribute("class", "hideItem")
    popup.setAttribute("class", "chatPopup")
    showWelcomeMsg()
}

showWelcomeMsg = () => {
    if(welcomeFlag == false){
        let arrIndex = 0
        setInterval(()=>{
            if(arrIndex < welcomeLines.length){
                let url = "https://sugar-cosmetics.webpush.freshchat.com/5fe107e92ec49ebae945f0cedffc02a1f71c8cfcc175080ae2db0c652019a90b/f_hlimage/u_be1d8877d49e57a14b5be6e9cfc109a6d91d88702e89141f6559bdf9c348b663/img_1524456641013.png"
                let botMsgDiv = document.createElement("div")
                let chatIconDiv = document.createElement("div")
                let botReplyDiv = document.createElement("div")
                let botDP = document.createElement("img")
                let botMsg = document.createElement("p")
                botDP.setAttribute("src", url)
                botMsg.textContent = welcomeLines[arrIndex]
                botMsgDiv.setAttribute("class", "botMsg")
                chatIconDiv.setAttribute("class", "chatIconDiv")
                botReplyDiv.setAttribute("class", "botReplyDiv")
                chatIconDiv.append(botDP)
                botReplyDiv.append(botMsg)
                botMsgDiv.append(chatIconDiv, botReplyDiv)
                chatBox.append(botMsgDiv)
                scrollDown()
                audio.play();
                arrIndex++
            }
        },1500)
    }
    welcomeFlag = true;
}

closeEverything = () => {
    chatIcon.setAttribute("class", "chatDiv")
    popup.setAttribute("class", "hideItem")
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
    chatBotReply(msg)
}

chatBotReply = (msg) => {
    for(let i = 0; i < keyArr.length; i++){
        setTimeout(()=>{
            if(msg == keyArr[i]){
                let botReply = botAnswers[msg][Math.floor(Math.random() * botAnswers[msg].length)]
                let url = "https://sugar-cosmetics.webpush.freshchat.com/5fe107e92ec49ebae945f0cedffc02a1f71c8cfcc175080ae2db0c652019a90b/f_hlimage/u_be1d8877d49e57a14b5be6e9cfc109a6d91d88702e89141f6559bdf9c348b663/img_1524456641013.png"
                let botMsgDiv = document.createElement("div")
                let chatIconDiv = document.createElement("div")
                let botReplyDiv = document.createElement("div")
                let botDP = document.createElement("img")
                let botMsg = document.createElement("p")
                botDP.setAttribute("src", url)
                botMsg.textContent = botReply
                botMsgDiv.setAttribute("class", "botMsg")
                chatIconDiv.setAttribute("class", "chatIconDiv")
                botReplyDiv.setAttribute("class", "botReplyDiv")
                chatIconDiv.append(botDP)
                botReplyDiv.append(botMsg)
                botMsgDiv.append(chatIconDiv, botReplyDiv)
                chatBox.append(botMsgDiv)
                scrollDown()
                audio.play();
            }
        },2000)
    }
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

//---------------------------------------ChatBot code ende here-------------------------------------------//