// ------------------------------------------------wishlist code starts Here------------------------------------------------
window.addEventListener('load', execute)
function execute(e){
    e.preventDefault()
    getPurchaseData()
}
// let data =[ {
//     id: 2,
//     title: "SMUDGE ME NOT LIP DUO",
//     mrp: 999,
//     price: 599,
//     discount: 30,
//     img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-01-brazen-raisin-burgundy-13200661643347.progressive.jpg?v=1577305698      "
//   },
//   {
//     id: 3,
//     title: "SMUDGE ME NOT MINIS SET- BLACK",
//     mrp: 589,
//     price: 459,
//     discount: 18,
//     img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-minis-set-black-14964843151443.progressive.jpg?v=1611061746"
//   }
// ]
//   localStorage.setItem( "add-wishlist",JSON.stringify(data))

function getPurchaseData(){
    let added = localStorage.getItem("add-wishlist")
    let added_prod = JSON.parse(added)
    // console.log(added_prod)
    if(added_prod !== ''){
        document.querySelector('.empty-cart').style.display = 'none'
        showWishlistData(added_prod)
    }
}
let display = document.querySelector('.data')

function showWishlistData(data){
    // console.log(data)
    display.innerHTML = ""
    
    let clearCart = document.createElement('button')
    clearCart.textContent = 'CLEAR WISHLIST'
    clearCart.setAttribute('class', 'clear')
    clearCart.setAttribute('onclick', 'remove()')

    let html = ""
    for(i in data){
        console.log(data[i].price)
        html += `<div class="card">
        <div class="product">
            <img src="${data[i].img}" alt="product image">
            <h3 style="margin-left: 20px;">${data[i].title} </h3>
        </div>
        <div class="price">
             <span style="text-decoration: line-through; color: grey;">Rs. ${data[i].mrp}</span>
            <span style="font-weight: bold;">Rs. ${data[i].price}</span>
        </div>
        <div>
            <button class="add_cart" id=${data[i].id} onclick="add(this)">ADD TO CART</button>
        </div>
        <button class="delete" onclick=delet(${data[i].id})>X</button>
        </div>`
    }
  display.innerHTML= html
  display.append(clearCart)
}
let arayOfProd = []

function add(event) {
    event.textContent = "ADDED "
    event.style.backgroundColor ="green"

    let added = localStorage.getItem("add-wishlist")
    let data = JSON.parse(added)
    for(i in data){
        if(data[i].id == event.id){
            // console.log(data[i])
            arayOfProd = [...arayOfProd, data[i]]
        }
    }
    
    localStorage.setItem("cart-products", JSON.stringify(arayOfProd))
}

let temp = JSON.parse(localStorage.getItem('add-wishlist'))
localStorage.setItem('temp_wish', JSON.stringify(temp))

function delet(did){
    let added = localStorage.getItem("temp_wish")
    let data = JSON.parse(added)
    let cart_remained = data.filter(el => {
        return (el.id !== did)
    })
    
    localStorage.setItem('temp_wish', JSON.stringify(cart_remained))
   
    let final = JSON.parse(localStorage.getItem('temp_wish'))

    if(JSON.stringify(final) !== JSON.stringify([])){
        showWishlistData(final)
    } else {
        remove()
    }
    
}

function remove (){
    document.querySelector('.empty-cart').style.display = 'block'
    display.style.display = 'none'
    // localStorage.removeItem('cart-products')
    localStorage.removeItem('temp_wish')
}


// ------------------------------------------------wishlist code ends Here------------------------------------------------