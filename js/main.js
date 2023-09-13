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

// form validation
let form = document.getElementById("form");

let NameInput = document.querySelector("[name= 'user']")
let EmailInput = document.querySelector("[name= 'email']")

form.onsubmit = (event) => {
    if(!(validation(NameInput,EmailInput)))
        event.preventDefault();
}   

function validation(target1,target2){
    if(target1 != "" && target1 != Number){
        if(target2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            return true;
        }
    }
    else{
        return false
    }

}
