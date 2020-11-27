const hamburger = document.getElementById("hamburger");
const hamburgerList = document.getElementsByClassName("hamburger-list")[0];
hamburger.addEventListener("click",()=>{
hamburgerList.classList.toggle("flex");
hamburger.classList.toggle("active");
})