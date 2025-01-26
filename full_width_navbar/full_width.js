const closeButton=document.querySelector(".close");
const openNav=document.querySelector(".menu");
const nav=document.querySelector("#nav");

openNav.addEventListener("click",()=>{
    nav.style.width="100%";
})
closeButton.addEventListener("click",()=>{
    nav.style.width="0";
})
