let btn = document.getElementById("drp");
let ul = document.getElementById("ul");
let projects = document.getElementById("projects");

//github api
fetch("https://api.github.com/users/ahmadadnanes/repos")
    .then(
        (result) => {
            return result.json();
    }).then(
        (data) =>{
            data.slice(1).forEach(element => {
                const project = document.createElement("div");
                project.classList.add("project" , "reveal");

                const img = document.createElement("img");
                img.setAttribute("src" , `img/${element.name}.jpg`);

                const text = document.createElement("div");
                text.classList.add("text");

                const button = document.createElement("div");
                button.classList.add("button");

                const Github = document.createElement("a");
                Github.classList.add("btn" , "btn-primary");

                Github.href = element.html_url;
                const gText = document.createTextNode("Github");
                Github.appendChild(gText);

                button.appendChild(Github);


                const h2 = document.createElement("h2");
                const repoTitle = document.createTextNode(`${element.name}`);
                h2.appendChild(repoTitle);

                const p = document.createElement("p");
                const repoDisc = document.createTextNode(`${element.description}`);
                p.appendChild(repoDisc);

                text.appendChild(h2);
                text.appendChild(p);
                text.appendChild(button);

                project.appendChild(img);
                project.appendChild(text);

                projects.appendChild(project);
            });
        }
    )

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
