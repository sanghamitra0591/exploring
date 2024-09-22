const wrapper = document.getElementById("wrapper");
const container = document.getElementById("container");
const addUserPopup = document.getElementById("addUserPopup");
const nameInput = document.getElementById("nameInput");
const cancelAddUserPopup = document.getElementById("cancelAddUserPopup");
const confirmAddUserButton = document.getElementById("confirmAddUserButton");

const userData = JSON.parse(localStorage.getItem("userData")) || [];
let nameInputValue = "";

window.addEventListener("load", ()=> {
    displayUserBox();
})

function displayUserBox() {
    container.innerHTML = "";
    userData.length > 0 && userData.forEach((el)=>{
        const div = document.createElement("div");
        div.className = "avatar";
        const p = document.createElement("p");
        const p1 = document.createElement("p");
        p.innerText = el;
        p.className = "avatarBox";
        p1.innerText = "+";
        div.append(p, p1);
        container.append(div);
    })
    const addUserButton = document.createElement("p");
    addUserButton.innerText = "+";
    addUserButton.className = "avatarBox";
    addUserButton.addEventListener("click", ()=>{
        addUser();
    })
    container.append(addUserButton);
}

function addUser(){
    addUserPopup.style.display = "block";
}

nameInput.addEventListener("keyup", (e)=>{
    e.preventDefault();
    nameInputValue = e.target.value;
})

cancelAddUserPopup.addEventListener("click", ()=>{
    addUserPopup.style.display = "none";
})

confirmAddUserButton.addEventListener("click", ()=>{
    userData.push(nameInputValue);
    console.log(nameInputValue, userData);
    nameInput.value = "";
    nameInputValue = "";
    localStorage.setItem("userData", JSON.stringify(userData));
    displayUserBox();
    addUserPopup.style.display = "none";
})