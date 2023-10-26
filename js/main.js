let btn = document.getElementById("drp");
let ul = document.getElementById("ul");
let projects = document.getElementById("projects");

//github api
async function getRepo(){
    const response = await fetch("https://api.github.com/users/ahmadadnanes/repos");
    const data = await response.json();
    data.slice(1).forEach(element => {
        projects.innerHTML += `
                    <div class="project reveal">
                        <img src='img/${element.name}.jpg'>
                        <div class="text">
                            <h2>${element.name}</h2>
                            <p>${element.description}</p>
                            <div class='button'>
                                <a class='btn btn-primary' href=${element.html_url}>
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                `
    });

}
getRepo();


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
