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
            fetch(`http://localhost:3000/featured?_page=1&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
            count = 1
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
        let title = data[i].title
        let mrp = data[i].mrp
        let price = data[i].price
        // console.log(data)
        html += `                
        <div class="displayCard" id=${data[i].id} onClick="testClick(this)" onmouseover="showItemsOnCard(this)" 
        onmouseout="removeItemsOnCard(this)">
            <div class="productImage"><img class="img" src="${img}" alt=""></div>
            <div class="productTitle"><label id="titleUnderline">${title}</label></div>
            <div class="flat" id="${data[i].id}" onClick="addToWishList(this)"><i class="far fa-heart"></i></div>
            <div class="plain" id="${data[i].id}" onClick="viewProductModal(this)"><i class="fas fa-search-plus"></i></div>
            <button data-id="${data[i].id}" onclick="settols(this)" class="cart1">Add to Cart</button>
            <div class="productFinalSalePrice">
                <div class="productActualPrice"><label id="priceStriked">Rs. ${mrp}</label></div>
                <div class="productSalePrice">Rs. ${price}</div>
            </div>
        </div>`
        
        document.getElementById("diaplayFData").innerHTML = html
    }
}

//---------------------------------------Featured pagination ends here-------------------------------------------//

//---------------------------------------Add to wishList starts here-------------------------------------------//
function addToWishList(pID){
    let id = pID.id
    console.log(id)
}
//---------------------------------------Add to wishList ends here-------------------------------------------//
//---------------------------------------Product view modal starts here-------------------------------------------//
function viewProductModal(pID){
    let id = pID.id
    console.log(id)
    fetch(`http://localhost:3000/combined?id=${id}`).then(res => res.json()).then(data => diaplayModalData(data)).catch((Error) => console.log(Error))
}

function diaplayModalData(val){

    console.log(val)
    let html = ""
    let title = val[0].title
    let img = val[0].img
    let mrp = val[0].mrp
    let price = val[0].price
    var countItmsub = 1
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    html+= `
        <div class="modalMainContainer">
            <div>
                <img class="img" src="${img}" alt="${title}">
            </div>
            <div>
            <div class="modalTitle"><label>${title}</label></div>
                <div class="modalPrice">
                    <div class="mrpPrice">Rs. ${mrp}</div>
                    <div class="salePrice">Rs. ${price}</div>
                </div>
                <div class="modalAddBtn">
                    <button class="addCartBtnModal" data-id="${val[0].id}" onclick="settols(this)">ADD TO CART</button>
                </div>
                <div class="modalAddwishlist">
                    <i class="far fa-heart">Add to Wishlist</i>
                </div>
                <div class="modalBanner">
                    <img class="img" src="//cdn.shopify.com/s/files/1/0906/2558/files/SUGAR_Trust_Seal_473x.progressive.jpg?v=1597728764" alt="">
                </div>
            </div>
        </div>
    `

    document.getElementById("modalData").innerHTML = html

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


//---------------------------------------Product view modal ends here-------------------------------------------//
//---------------------------------------whishlist and product view starts here-------------------------------------------//

function showItemsOnCard(val){
    let ide = val.id
    // console.log(ide.dataset)
    let elem = document.getElementsByClassName("flat");
    for(let i = 0; i <elem.length; i+=1){
        elem[i].style.display = "block"
    }

    let elems = document.getElementsByClassName("plain");
    for(let j = 0; j <elems.length; j+=1){
        elems[j].style.display = "block"
    }
    let elems1 = document.getElementsByClassName("cart1");
    for(let k = 0; k <elems1.length; k+=1){
        elems1[k].style.display = "block"
    }
}

function removeItemsOnCard(val){
    let id = val.id
    let eleme = document.getElementsByClassName("flat");
    for(let i = 0; i <eleme.length; i+=1){
        eleme[i].style.display = "none"
    }

    let elemes = document.getElementsByClassName("plain");
    for(let j = 0; j <elemes.length; j+=1){
        elemes[j].style.display = "none"
    }
    let elemes1 = document.getElementsByClassName("cart1");
    for(let k = 0; k <elemes1.length; k+=1){
        elemes1[k].style.display = "none"
    }
}

//---------------------------------------whishlist and product view ends here-------------------------------------------//

//---------------------------------------Onclick getting product details starts here------------------------------------//

function testClick(elem){
    let id = elem.id
    // console.log(id)

    fetch(`http://localhost:3000/combined?id=${id}`).then(res => res.json()).then(data => addToLocalStorageCart(data)).catch((Error) => console.log(Error))
}

//---------------------------------------Onclick getting product details ends here--------------------------------------//

//---------------------------------------Add to localstorage starts here--------------------------------------//

function addToLocalStorageCart(val){
    let id = val[0].id
    let img = val[0].img
    let price = val[0].price
    let title = val[0].title
    // console.log(title, price)
}

let arr = []
function settols(e){
    // console.log("object")
    let id = e.getAttribute("data-id")
    fetch(`http://localhost:3000/combined?id=${id}`).then(res => res.json()).then(data => AddToLSFromHp(data)).catch((Error) => console.log(Error))
}

function AddToLSFromHp(data){
    let title = data[0].title
    let price = data[0].price
    let img = data[0].img
    let id = data[0].id

    var temp = {}
    temp.id=id
    temp.title=title
    temp.price=price
    temp.img = img

    console.log(temp)
    
    arr = [...arr,temp]
    localStorage.setItem("cart-products",JSON.stringify(arr))
}

//---------------------------------------Add to localstorage ends here--------------------------------------//

//---------------------------------------JustIn pagination starts here-------------------------------------------//
window.addEventListener('load', getJustInData)

function getJustInData(){
    let count = 1

    document.getElementById("nextBtnIn").addEventListener('click', function(){
        count++
        if(count>8){
            document.getElementById("diaplayJustInData").innerHTML = loader
            fetch(`http://localhost:3000/combined?_page=1&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
            count = 1
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
        let title = data[i].title
        let mrp = data[i].mrp
        let price = data[i].price
        // console.log(data)
        Jhtml += `                
        <div class="displayCard" id=${data[i].id} onClick="testClick(this)" onClick="testClick(this)" onmouseover="showItemsOnCard(this)" 
        onmouseout="removeItemsOnCard(this)">
            <div class="productImage"><img class="img" src="${img}" alt=""></div>
            <div class="productTitle"><label id="titleUnderline">${title}</label></div>
            <div class="flat" id="${data[i].id}" onClick="addToWishList(this)"><i class="far fa-heart"></i></div>
            <div class="plain" id="${data[i].id}" onClick="viewProductModal(this)"><i class="fas fa-search-plus"></i></div>
            <button data-id="${data[i].id}" onclick="settols(this)" class="cart1">Add to Cart</button>
            <div class="productFinalSalePrice">
                <div class="productActualPrice"><label id="priceStriked">Rs. ${mrp}</label></div>
                <div class="productSalePrice">Rs. ${price}</div>
            </div>
        </div>`
        
        document.getElementById("diaplayJustInData").innerHTML = Jhtml
    }
}

//---------------------------------------JustIn pagination ends here-------------------------------------------//

//---------------------------------------Skincare pagination starts here-------------------------------------------//

window.addEventListener('load', getSkincareData)

function getSkincareData(){
    let count = 1

    document.getElementById("nextBtnInSc").addEventListener('click', function(){
        count++
        if(count>3){
            document.getElementById("diaplaySkincareData").innerHTML = loader
            fetch(`http://localhost:3000/skin?_page=1&_limit=4`).then(res => res.json()).then(data => displaySkincareData(data)).catch((Error) => console.log(Error))
            count = 1
        }
        else{
            document.getElementById("diaplaySkincareData").innerHTML = loader
            fetch(`http://localhost:3000/skin?_page=${count}&_limit=4`).then(res => res.json()).then(data => displaySkincareData(data)).catch((Error) => console.log(Error))
        }
    })

    document.getElementById("prevBtnInSc").addEventListener('click', function(){
        count--
        if(count == 1 || count < 1){
            document.getElementById("diaplaySkincareData").innerHTML = loader
            fetch(`http://localhost:3000/skin?_page=1&_limit=4`).then(res => res.json()).then(data => displaySkincareData(data)).catch((Error) => console.log(Error))
            count = 1
        }
        else{
            document.getElementById("diaplaySkincareData").innerHTML = loader
            fetch(`http://localhost:3000/skin?_page=${count}&_limit=4`).then(res => res.json()).then(data => displaySkincareData(data)).catch((Error) => console.log(Error))
        }
    })
    document.getElementById("diaplaySkincareData").innerHTML = loader
    fetch(`http://localhost:3000/skin?_page=1&_limit=4`).then(res => res.json()).then(data => displaySkincareData(data)).catch((Error) => console.log(Error))
}

function displaySkincareData(data){
    let Jhtml = ""
    for(i in data){
        let img = data[i].img
        let title = data[i].title
        let mrp = data[i].mrp
        let price = data[i].price
        // console.log(data)
        Jhtml += `                
        <div class="displayCard" id=${data[i].id} onClick="testClick(this)" onmouseover="showItemsOnCard(this)" 
        onmouseout="removeItemsOnCard(this)">
            <div class="productImage"><img class="img" src="${img}" alt=""></div>
            <div class="productTitle"><label id="titleUnderline">${title}</label></div>
            <div class="flat" id="${data[i].id}" onClick="addToWishList(this)"><i class="far fa-heart"></i></div>
            <div class="plain" id="${data[i].id}" onClick="viewProductModal(this)"><i class="fas fa-search-plus"></i></div>
            <button data-id="${data[i].id}" onclick="settols(this)" class="cart1">Add to Cart</button>
            <div class="productFinalSalePrice">
                <div class="productActualPrice"><label id="priceStriked">Rs. ${mrp}</label></div>
                <div class="productSalePrice">Rs. ${price}</div>
            </div>
        </div>`
        
        document.getElementById("diaplaySkincareData").innerHTML = Jhtml
    }
}

//---------------------------------------Skincare pagination ends here-------------------------------------------//

//---------------------------------------Explore pagination starts here-------------------------------------------//

window.addEventListener('load', getExploreData)

function getExploreData(){
    let count = 1

    document.getElementById("nextBtnInSE").addEventListener('click', function(){
        count++
        if(count>2){
            document.getElementById("diaplayExpolreData").innerHTML = loader
            fetch(`http://localhost:3000/explore?_page=1&_limit=5`).then(res => res.json()).then(data => displayExploreData(data)).catch((Error) => console.log(Error))
            count = 1
        }
        else{
            document.getElementById("diaplayExpolreData").innerHTML = loader
            fetch(`http://localhost:3000/explore?_page=${count}&_limit=5`).then(res => res.json()).then(data => displayExploreData(data)).catch((Error) => console.log(Error))
        }
    })

    document.getElementById("prevBtnInE").addEventListener('click', function(){
        count--
        if(count == 1 || count < 1){
            document.getElementById("diaplayExpolreData").innerHTML = loader
            fetch(`http://localhost:3000/explore?_page=1&_limit=5`).then(res => res.json()).then(data => displayExploreData(data)).catch((Error) => console.log(Error))
            count = 1
        }
        else{
            document.getElementById("diaplayExpolreData").innerHTML = loader
            fetch(`http://localhost:3000/explore?_page=${count}&_limit=5`).then(res => res.json()).then(data => displayExploreData(data)).catch((Error) => console.log(Error))
        }
    })

    document.getElementById("diaplayExpolreData").innerHTML = loader
    fetch(`http://localhost:3000/explore?_page=1&_limit=5`).then(res => res.json()).then(data => displayExploreData(data)).catch((Error) => console.log(Error))
}

function displayExploreData(data){
    let html = ""
    for(i in data){
        let img = data[i].img

        html += `                
        <div class="displayCardExplore">
            <img class="img" src="${img}" alt="">
        </div>`
        
        document.getElementById("diaplayExpolreData").innerHTML = html
    }
}


//---------------------------------------Explore pagination ends here-------------------------------------------//

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
            let title = Sdata[i].title
            let mrp = Sdata[i].mrp
            let price = Sdata[i].price
            // console.log(img)
            Shtml += `             
            <div class="displayCard" id=${Sdata[i].id} onClick="testClick(this)" onmouseover="showItemsOnCard(this)" 
            onmouseout="removeItemsOnCard(this)">
                <div class="productImage"><img class="img" src="${img}" alt=""></div>
                <div class="productTitle"><label id="titleUnderline">${title}</label></div>
                <button data-id="${Sdata[i].id}" onclick="settols(this)" class="cart1">Add to Cart</button>
                <div class="productFinalSalePrice">
                    <div class="productActualPrice"><label id="priceStriked">Rs. ${mrp}</label></div>
                    <div class="productSalePrice">Rs. ${price}</div>
                </div>
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
        let title = data[i].title
        let mrp = data[i].mrp
        let price = data[i].price
        // console.log(data)
        Chtml += `                
        <div class="displayCard" id=${data[i].id} onClick="testClick(this)" onmouseover="showItemsOnCard(this)" 
        onmouseout="removeItemsOnCard(this)">
            <div class="productImage"><img class="img" src="${img}" alt=""></div>
            <div class="productTitle"><label id="titleUnderline">${title}</label></div>
            <div class="flat" id="${data[i].id}" onClick="addToWishList(this)"><i class="far fa-heart"></i></div>
            <div class="plain" id="${data[i].id}" onClick="viewProductModal(this)"><i class="fas fa-search-plus"></i></div>
            <button data-id="${data[i].id}" onclick="settols(this)" class="cart1">Add to Cart</button>
            <div class="productFinalSalePrice">
                <div class="productActualPrice"><label id="priceStriked">Rs. ${mrp}</label></div>
                <div class="productSalePrice">Rs. ${price}</div>
            </div>
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

//---------------------------------------slides for daySpecial carousel starts here--------------------------------------//

let slideIndexDS = 1;
showSlidesDS(slideIndexDS);

function plusSlides(n) {
  showSlidesDS(slideIndexDS += n);
}

function currentSlideDS(n) {
  showSlidesDS(slideIndexDS = n);
}

function showSlidesDS(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesDS");
  let dots = document.getElementsByClassName("dotDS");
  if (n > slides.length) {slideIndexDS = 1}    
  if (n < 1) {slideIndexDS = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeDS", "");
  }
  slides[slideIndexDS-1].style.display = "block";  
  dots[slideIndexDS-1].className += " activeDS";
}

//---------------------------------------slides for daySpecial carousel ends here--------------------------------------//

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
let defaultAnswer = ["Need Help ? Ask something relavent like 'product', 'offer' or 'face'"]

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
                botReply = welcomeLines[arrIndex]
                printBotMsg(botReply)
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
        if(msg == keyArr[i]){
            setTimeout(()=>{
                let botReply = botAnswers[msg][Math.floor(Math.random() * botAnswers[msg].length)]
                printBotMsg(botReply)
                },1500)
                break
        }

        if(keyArr[i+1] == undefined){
            setTimeout(()=>{
                let botReply = defaultAnswer
                printBotMsg(botReply)
            }, 2000)
        }
    }
}

printBotMsg = (para) => {
    let url = "https://sugar-cosmetics.webpush.freshchat.com/5fe107e92ec49ebae945f0cedffc02a1f71c8cfcc175080ae2db0c652019a90b/f_hlimage/u_be1d8877d49e57a14b5be6e9cfc109a6d91d88702e89141f6559bdf9c348b663/img_1524456641013.png"
    let botMsgDiv = document.createElement("div")
    let chatIconDiv = document.createElement("div")
    let botReplyDiv = document.createElement("div")
    let botDP = document.createElement("img")
    let botMsg = document.createElement("p")
    botDP.setAttribute("src", url)
    botMsg.textContent = para
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

//---------------------------------------ChatBot code Ends here-------------------------------------------//

////////// Login Code Starts Here //////////

let loginLink = document.getElementById("loginLink")
let sideClose = document.getElementById("sideClose")
let mainContainer = document.getElementById("mainContainer")
let shadow = document.getElementById("shadow")
let sidebar = document.getElementById("loginSidebar")
let loginSide = document.getElementById("loginSide")
let registerSide = document.getElementById("registerSide")
let registerFormBtn = document.getElementById("createAcc")
let loginFormBtn = document.getElementById("createLogin")

displayLoginForm = () => {
    shadow.setAttribute("class", "shadow")
    sidebar.setAttribute("class", "loginSidebar")
    loginSide.setAttribute("class", "sidebarMid")
    registerSide.setAttribute("class", "hideSide")
}

displayRegisterForm = () => {
    shadow.setAttribute("class", "shadow")
    sidebar.setAttribute("class", "loginSidebar")
    registerSide.setAttribute("class", "sidebarMid")
    loginSide.setAttribute("class", "hideSide")
}

closeSideBar = () => {
    shadow.setAttribute("class", "hideSide")
    sidebar.setAttribute("class", "hideSide")
}

alertxxx = () => {
    alert("hi")
}

loginLink.addEventListener("dblclick", alertxxx)
loginLink.addEventListener("click", displayLoginForm)
sideClose.addEventListener("click", closeSideBar)
shadow.addEventListener("click", closeSideBar)
loginFormBtn.addEventListener("click", displayLoginForm)
registerFormBtn.addEventListener("click", displayRegisterForm)

////////// Login Code Ends Here //////////
