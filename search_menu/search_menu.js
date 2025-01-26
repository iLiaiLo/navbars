const textInput=document.querySelector("#input");

textInput.addEventListener("input",()=>{
    const filter=textInput.value.toUpperCase();
    const ul=document.querySelector("#list");
    const li=ul.getElementsByTagName("li");

    for(let i=0;i<li.length;i++){
        const a=li[i].firstChild;
        a.textContent.toUpperCase().indexOf(filter)>-1?li[i].style.display="block":li[i].style.display="none";
    }

})
