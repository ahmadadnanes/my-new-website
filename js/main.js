btn = document.getElementById("drp");
ul = document.getElementById("ul");

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