const menu=document.querySelector(".menu");
const closeButton=document.querySelector(".close");
const nav=document.querySelector(".container");
const main=document.querySelector("#main");

menu.addEventListener("click",()=>{
    nav.style.width = "300px";
    main.style.marginLeft = "300px";
})

closeButton.addEventListener("click",()=>{
    nav.style.width = "0";
    main.style.marginLeft = "0";
})


