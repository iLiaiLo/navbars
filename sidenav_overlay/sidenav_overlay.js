const menu=document.querySelector(".menu");
const closeButton=document.querySelector(".close");
const nav=document.querySelector("#nav");

menu.addEventListener("click",()=>{
    nav.style.width="250px";
});

closeButton.addEventListener("click",()=>{
    nav.style.width="0";
});
