let loginPage = document.getElementById("loginPage")
let registerPage = document.getElementById("registerPage")
let showLoginBtn = document.getElementById("showLoginBtn")
let showRegisterBtn = document.getElementById("showRegisterBtn")
let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let getName = document.getElementById("getName")
let getEmail = document.getElementById("getEmail")
let getPassword = document.getElementById("getPassword")
let getNumber = document.getElementById("getNumber")
let getAddress = document.getElementById("getAddress")

let loginBtn = document.getElementById("loginBtn")
let registerBtn = document.getElementById("registerBtn")

showRegisterPage = () => {
    loginPage.setAttribute("class", "hideItems")
    registerPage.setAttribute("class", "loginContainer")
}

showLoginPage = () => {
    registerPage.setAttribute("class",  "hideItems")
    loginPage.setAttribute("class", "loginContainer")
}


// let login = document.getElementsByClassName("loginContainer")
// let afterlogin = document.getElementsByClassName("afterlogin")
userLogin = () => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then((res) => {

        let login = document.getElementById("loginPage")
        let afterlogin = document.getElementById("aftlgn")

        let currUserEmail = userEmail.value;
        let currUserPassword = userPassword.value;
        let currUserName = getName .value;
        let currUserAddress = getAddress.value;
        let currUserPhone = getNumber.value;

        let user = false

        for(let i = 0; i < res.length; i++){
            let email = res[i].email;
            let password = res[i].password;

            if((currUserEmail == email) && (currUserPassword == password)){
                user =true
                let userStatus = []
                let tempObj = {}

                tempObj.name = res[i].name
                tempObj.email = res[i].email
                tempObj.number = res[i].number
                tempObj.address = res[i].address

                userStatus = [tempObj]
                localStorage.setItem("userStatus", JSON.stringify(userStatus))



                let accuser = localStorage.getItem("userStatus")
                console.log(JSON.parse(accuser))
                accuser = JSON.parse(accuser)
                let name = accuser[0].name
                let emails = accuser[0].email
                let address = accuser[0].address
                let number = accuser[0].number
                console.log(name)

                login.style.display="none";
                
                // alert("loggedin")
                let html=""
                html+=`<div class="left">
                <div class="profile1" ><p class="profile">Profile</p></div>
                <div class="profile1"><p class="profile">Orders</p></div>
                <div class="profile1"><p class="profile">Address</p></div>
                <div class="profile1"><p class="profile">Wishlist</p></div>
                <div class="profile1"><p class="profile">Log out</p></div>
            </div>

            <div class="right">
                <div class="top">
                    
                        <p  class="p">Hello ${name} (not ${name}? Sign out)</p>

                    
                </div>

                <div class="acc">
                    
                        <p  class="p1">Account details :</p>

                    
                </div>

                <div class="names">
                    
                        <p  class="p2">Name:	${name}</p>

                    
                </div>

                <div class="mail">
                    
                        <p  class="p3">E-mail:	${email}</p>

                    
                </div>
                <div class="mail">
                    
                        <p  class="p3">Address:	${address}</p>

                    
                </div>
                <div class="mail">
                    
                        <p  class="p3">Phone No.:	${number}</p>

                    
                </div>`
                document.getElementById("aftlgn").innerHTML+=html
                afterlogin.style.display="flex"

            }

        }
        if(user == false){
            alert("This user does not exist...Register First")
        }

        document.getElementsByClassName("loginContainer")
    })
}

showRegisterBtn.addEventListener("click", showRegisterPage)
showLoginBtn.addEventListener("click", showLoginPage)
loginBtn.addEventListener("click", userLogin)
