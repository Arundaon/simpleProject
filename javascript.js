const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("nav ul");
const li = document.querySelectorAll("nav ul li");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", ()=>{
    ul.classList.toggle("ul-active");
    nav.classList.toggle("nav-active");
    li.forEach((list)=>{
        list.classList.toggle("li-active");
    })

})