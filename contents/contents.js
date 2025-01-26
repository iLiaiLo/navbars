const subjects={
    "math":{
        "topology":["differencial topology","algebraic topology","geometrical topology"],
        "calculus":["single variable","multivariable"],
        "analisys":["math","real"]
    },
    "physics":{
        "mechanics":["classical","quantum"],
        "electricity":["electromagnetism"],
        "optics":["quantum optics","classical optics"]
    }
}

const subject=document.getElementById("subject");
const branches=document.getElementById("branches");
const topics=document.getElementById("topics");

for (let x in subjects){
    subject.options[subject.options.length]=new Option(x,x);
}

subject.addEventListener("change",function(){
    branches.length=1;
    topics.length=1;
    
    for(let y in subjects[this.value]){
        branches.options[branches.options.length]=new Option(y,y);
    }
})

branches.addEventListener("change",function(){
    topics.length=1;
    const z=subjects[subject.value][this.value];
    for(let i=0;i<z.length;i++){
        topics.options[topics.options.length]=new Option(z[i],z[i])
    }
})


