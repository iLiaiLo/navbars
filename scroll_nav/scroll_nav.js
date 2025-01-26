const nav=document.getElementById("nav");

window.addEventListener("scroll",()=>{
    //document.body.scrollTop for older browsers
    const statement= document.documentElement.scrollTop>20||document.body.scrollTop>20;
    statement?nav.style.top="0":nav.style.top="-100px";
})
