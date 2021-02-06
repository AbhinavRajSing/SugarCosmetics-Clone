# Carbon_SugarCosmetics
# Sugar Cosmetics
 Our team was given a task to Clone the Sugar Cosmetics Website.
 We have to create the website using the Mock Server which was created in JSON file.

## Team Members
* Abhinav Raj
* Lokesh Nimje
* Vinesh Nair
* Akash Vaghela

## Tech Stack
* Java Script
* HTML
* CSS
![alt Icons](https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png)

## Sample Image
![alt Sugar Cosmetics](https://cdn.shopify.com/s/files/1/0906/2558/files/Triple-Treat-HP-Web_1a5d9351-390c-4b35-a8fd-9aa59ff06108.gif)

## Example Codes

```function settols(e){
        let id = e.getAttribute("data-id")
        let title = e.getAttribute("data-title")
        let price = e.getAttribute("data-price")
        let img = e.getAttribute("data-img")
        console.log(img)
        console.log(title)
        console.log(price)
        console.log(id)
        var temp = {}
        temp.id=id
        temp.title=title
        temp.price=price
        temp.img = img
        
        arr = [...arr,temp]
        localStorage.setItem("cart-products",JSON.stringify(arr))
    }
```
```<div class="Header">
            <div class="Header__Logo">
                <a href="/Header&Footer/H&F.html"><img class="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Festive-logo_ba6a68ab-b29e-4109-ab60-bc8132bb153b_600x.jpg?v=1609495364" alt="Sugar Cosmetics Logo"></a>
            </div>
            <div class="Header__Search">
                <div><input id="searchItems" class="Header__Search__inputBox" type="text" placeholder="Search for products"></div>
                <div class="Header__Search__searchicon"><i class="fas fa-search"></i></div>
            </div>
            <div class="Header__Login"> 
                <a id="loginLink" class="Header__Login__P">Login / Register</a>
            </div>
            <div class="Header__LikeCart">
                <div>
                    <a href="/wishlist/wishlist.html"><i class="far fa-heart"></i></a>
                    <div class="wishlist_active"></div>
                 </div>
                <div>
                    <a href="/Cart_page/cart.html"><i class="fas fa-shopping-cart"></i></a>
                    <div class="cart_active"></div>
                </div>
            </div>
        </div>
```
```.wishlist_active {
    width: 14px;
    height: 14px;
    /* border: 1px solid black; */
    background-color: #FC2779;
    border-radius: 50%;
    font-size: 12px;
    color: white;
    margin: 0px;
    float: right;
    position: absolute;
    top: 4%;
    left: 88.8%;
    display: none;
}

.cart_active {
    width: 14px;
    height: 14px;
    /* border: 1px solid black; */
    background-color: #FC2779;
    border-radius: 50%;
    font-size: 12px;
    color: white;
    margin: 0px;
    float: right;
    position: absolute;
    top: 4%;
    right: 6%;
    display: none;
}
```

