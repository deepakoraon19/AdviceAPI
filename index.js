let adviceTxt = document.querySelector(".text");
let adviceId = document.querySelector(".adviceID");
let next = document.querySelector(".next");
let advice;

document.addEventListener('keypress',(e)=>{
    if(e.code='Space'){
        api();
    }
})
next.addEventListener('click',(e)=>{
           api();    
})

if(screen.width<768){
    next.innerHTML="Press here to reload"
}

let api = async()=>{
    await fetch("https://api.adviceslip.com/advice").then(response=>{
        if(!response.ok){
           throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    }).then(data=>{
        advice=data.slip.advice
        console.log(data.slip.advice)
        adviceId.textContent="ADVICE #"+data.slip.id;        
        adviceTxt.innerHTML=`"${data.slip.advice}"`;
    })
}
api();