const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const menu = document.querySelector(".nav-bar");
const modal = document.querySelector(".modal");

// OPEN MENU MOBILE 

hamburger.addEventListener("click", () => {
    menu.classList.add("open");
    modal.style.display = "block";
    hamburger.style.display = "none";
    cross.style.display = "block";
})

// CLOSE MENU MOBILE 

cross.addEventListener("click", () => {
    menu.classList.remove("open");
    modal.style.display = "none";
    hamburger.style.display = "block";
    cross.style.display = "none";
})



// REGEX MAIL 

function Validate(mail) {

    let regx = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (regx.test(mail)) {
        return true 
    } else {
        return false
    }
}




const goButton = document.querySelector("#go");
const error = document.querySelector(".error");
const mailInput = document.querySelector("#inputMail");

goButton.addEventListener("click", () => {
    error.style.display = "none";
    mailInput.style.color = "hsl(227, 12%, 61%)"
    if (Validate(mailInput.value) === false) {
        error.style.display = "block";
        mailInput.style.color = "red"
    }
})




// CHANGE COMMENT TAB MOBILE 

const comment = document.querySelectorAll(".comment");
const comButton = document.querySelectorAll(".check");

for (let i = 0; i < comment.length; i++) {
    comButton[i].addEventListener("click", () => {
        comment.forEach(com => {
            com.style.display = "none";
        })
        comment[i].style.display = "flex"
    })
}