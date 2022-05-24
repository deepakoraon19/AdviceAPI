let adviceTxt = document.querySelector(".text");
let adviceId = document.querySelector(".adviceID");
let advice;
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