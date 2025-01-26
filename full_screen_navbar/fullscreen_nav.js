const menu=document.querySelector(".menu");
const nav=document.querySelector("#nav");
const closeNav=document.querySelector(".close");

menu.addEventListener("click",()=>{
    nav.style.height="100%";
})
closeNav.addEventListener("click",()=>{
    nav.style.height="0";
})
