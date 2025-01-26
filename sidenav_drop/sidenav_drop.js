const dropDown=document.querySelector(".drop-btn");
const container=document.querySelector(".container");

dropDown.addEventListener("click",()=>{
    container.style.display=container.style.display==="block"?"none":"block";
})
