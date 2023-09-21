btn = document.getElementById("drp");
ul = document.getElementById("ul");

// navbar button
btn.onclick = () =>{
    if(ul.style.left == "-100%"){
        ul.style.left = "0";
    }
    else{
        ul.style.left = "-100%";
    }
}

navlink = document.getElementsByClassName("nav-link");

for(let i = 0 ; i < navlink.length ; i++){
   navlink[i].onclick = () =>{
    ul.style.left = "-100%";
   }
}


// scrollUp button
let up = document.getElementById("up");

window.onscroll = scrollbtn;
function scrollbtn(){
    if(window.scrollY >= 100){
        up.style.display = "block";
    }
    else{
        up.style.display = "none";
    }
}

up.onclick = () =>{
    window.scrollTo({
        top:0 ,
        behavior:"smooth"
    })
}


// reveal animation

window.addEventListener('scroll',reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
    } else {
        reveals[i].classList.remove("active");
    }
    }
  }
