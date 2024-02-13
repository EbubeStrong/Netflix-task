function firstRight(){
    let left = document.querySelector("#playlist-1");
    left.scrollBy(350, 0)
}

function firstLeft(){
    console.log("scrollLeft function called");
    let right = document.querySelector("#playlist-1");
    right.scrollBy(-350, 0)
}

function secondRight(){
    let left = document.querySelector(".playlist-2");
    left.scrollBy(350, 0)
}

function secondLeft(){
    console.log("scrollLeft function called");
    let right = document.querySelector(".playlist-2");
    right.scrollBy(-350, 0)
}

function thirdRight(){
    let left = document.querySelector(".playlist-3");
    left.scrollBy(350, 0)
}

function thirdLeft(){
    // console.log("scrollLeft function called");
    let right = document.querySelector(".playlist-3");
    right.scrollBy(-350, 0)
}

function fourthRight(){
    let left = document.querySelector(".playlist-4");
    left.scrollBy(350, 0)
}

function fourthLeft(){
    // console.log("scrollLeft function called");
    let right = document.querySelector(".playlist-4");
    right.scrollBy(-350, 0)
}

function fifthRight(){
    let left = document.querySelector(".playlist-5");
    left.scrollBy(350, 0)
}

function fifthLeft(){
    // console.log("scrollLeft function called");
    let right = document.querySelector(".playlist-5");
    right.scrollBy(-350, 0)
}
function sixthRight(){
    let left = document.querySelector(".playlist-6");
    left.scrollBy(350, 0)
}

function sixthLeft(){
    // console.log("scrollLeft function called");
    let right = document.querySelector(".playlist-6");
    right.scrollBy(-350, 0)
}
function seventhRight(){
    let left = document.querySelector(".playlist-7");
    left.scrollBy(350, 0)
}

function seventhLeft(){
    // console.log("scrollLeft function called");
    let right = document.querySelector(".playlist-7");
    right.scrollBy(-350, 0)
}

function openNav(){
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "60%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

const loginForm =document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const checkBox = document.getElementById('remember');
const passwordInput = document.getElementById('passwordInput');

loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    if(emailInput.value === '' || passwordInput.value === ''){
        alert('Please fill in all the required fields.');
    }else if(!checkBox.checked){
        alert('Please click on the checkbox')
    }else{
        window.location.href = 'user-page.html'
    }
});
