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

function mobileLink(){
let mobile = document.getElementById("show");
mobile.style.display = 'block'
if(mobile.checked){
mobile.style.display = 'none'
}else{
mobile.style.display = 'block'
}
}

function mobileClose(){
let mobile = document.getElementById("show");
mobile.style.transform="translate(-100%)  ";
}