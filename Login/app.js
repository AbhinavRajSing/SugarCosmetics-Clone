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

userLogin = () => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then((res) => {

        let currUserEmail = userEmail.value;
        let currUserPassword = userPassword.value;

        for(let i = 0; i < res.length; i++){
            let email = res[i].email;
            let password = res[i].password;

            if((currUserEmail == email) && (currUserPassword == password)){

                let userStatus = []
                let tempObj = {}

                tempObj.name = res[i].name
                tempObj.email = res[i].email
                tempObj.number = res[i].number
                tempObj.address = res[i].address

                userStatus = [tempObj]
                localStorage.setItem("userStatus", JSON.stringify(userStatus))
            }
        }
    })
}

showRegisterBtn.addEventListener("click", showRegisterPage)
showLoginBtn.addEventListener("click", showLoginPage)
loginBtn.addEventListener("click", userLogin)
