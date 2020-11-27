const bigImage = document.querySelector(".bigImage");
const smallImages = document.querySelector(".smallImages");
const smallImagesNode = document.querySelectorAll(".small");
smallImages.addEventListener("click",(t)=>{
    if(t.target.getAttribute("class")=="small"){
        bigImage.innerHTML = `<img src="${t.target.getAttribute("src")}" class="big">`
        smallImagesNode.forEach((e)=>{
            e.classList.remove("active");
        })
        t.target.classList.toggle("active");
    }
    
})