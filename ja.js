let btn = document.querySelector('.product-1btn');
let pbtn = document.querySelector('.button22');
let mbtn = document.querySelector('.button2');    

btn.addEventListener("click",()=>{
     btn.innerText = '1';
     pbtn.style.display = 'inline-block';
     mbtn.style.display = 'inline-block';
     
})
mbtn.addEventListener("click",()=>{
     btn.innerText = btn.innerText - 1;
     pbtn.style.display = 'inline-block';
     mbtn.style.display = 'inline-block';
     
})
pbtn.addEventListener("click",()=>{
     btn.innerText = btn.innerText + 1;
     pbtn.style.display = 'inline-block';
     mbtn.style.display = 'inline-block';
     
})


