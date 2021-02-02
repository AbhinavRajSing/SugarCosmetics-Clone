window.addEventListener('load', getFeaData)

function getFeaData(){
    let count = 1
    document.getElementById("nextBtn").addEventListener('click', function(){
        count++
        if(count>3){
            fetch(`http://localhost:3000/featured?_page=3&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
            count = 3
        }
        else{
            fetch(`http://localhost:3000/featured?_page=${count}&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
        }
    })

    document.getElementById("prevBtn").addEventListener('click', function(){
        count--
        if(count == 1 || count < 1){
            fetch(`http://localhost:3000/featured?_page=1&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
            count = 1
        }
        else{
            fetch(`http://localhost:3000/featured?_page=${count}&_limit=4`).then(res => res.json()).then(data => displayData(data)).catch((Error) => console.log(Error))
        }
    })


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

window.addEventListener('load', getJustInData)

function getJustInData(){
    let count = 1

    document.getElementById("nextBtnIn").addEventListener('click', function(){
        count++
        if(count>8){
            fetch(`http://localhost:3000/combined?_page=8&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
            count = 8
        }
        else{
            fetch(`http://localhost:3000/combined?_page=${count}&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
        }
    })

    document.getElementById("prevBtnIn").addEventListener('click', function(){
        count--
        if(count == 1 || count < 1){
            fetch(`http://localhost:3000/combined?_page=1&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
            count = 1
        }
        else{
            fetch(`http://localhost:3000/combined?_page=${count}&_limit=4`).then(res => res.json()).then(data => displayJustInData(data)).catch((Error) => console.log(Error))
        }
    })

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

document.getElementById("searchItems").addEventListener('keyup', liveSearch)

function liveSearch(e){
    let search = e.target.value
    search.trim()
    extractItems(search)
}

function extractItems(val){ 
    let data = val
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

window.addEventListener('load', function(){
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

window.addEventListener('load', function(){
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