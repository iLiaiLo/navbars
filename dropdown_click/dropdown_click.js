// Assuming you have multiple buttons with this class

// const btns=document.querySelectorAll(".btn");
// const dropDown = document.querySelector(".content");

// window.addEventListener("click", (e) => {
//     [...btns].includes(e.target)?dropDown.classList.toggle("show"):dropDown.classList.remove("show");
// });


//in our case:
const dropDown=document.querySelector(".content");
window.addEventListener("click",(e)=>{
    e.target.tagName==="BUTTON"?dropDown.classList.toggle("show"):dropDown.classList.remove("show");
})