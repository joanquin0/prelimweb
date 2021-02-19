let addProduct = document.querySelector('.cartbutton');    
addProduct.addEventListener("click",()=>{


const x = document.getElementById("simplemodal");
     if (x.style.display === "block") {
     x.style.display = "none";
     } else {
     x.style.display = "block";
     }
})
{
     let purchase1Details = {

          name: 'Hawaiian Paradise',
          Price: 'Price: ₱599',
          orders: 0
     
     };
     let btn = document.querySelector('.product-1btn');
     let pbtn = document.querySelector('.buttonn1');
     let mbtn = document.querySelector('.button1'); 
     let item = document.querySelector('.item-1'); 
     let orders = document.querySelector('.orders-1'); 
     let Price = document.querySelector('.price-1');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase1Details.orders = 1;
          item.innerText = purchase1Details.name;
          orders.innerText = purchase1Details.orders;
          Price.innerText = purchase1Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase1Details.orders = purchase1Details.orders - 1;
          item.innerText = purchase1Details.name;
          orders.innerText = purchase1Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase1Details.orders = purchase1Details.orders + 1;
          item.innerText = purchase1Details.name;
          orders.innerText = purchase1Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}


{
     let purchase2Details = {

          name: 'Hawaiian Paradise',
          Price: 'Price: ₱599',
          orders: 0
     
     };
     let btn = document.querySelector('.product-2btn');
     let pbtn = document.querySelector('.buttonn2');
     let mbtn = document.querySelector('.button2'); 
     let item = document.querySelector('.item-2'); 
     let orders = document.querySelector('.orders-2'); 
     let Price = document.querySelector('.price-2');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase2Details.orders = 1;
          item.innerText = purchase2Details.name;
          orders.innerText = purchase2Details.orders;
          Price.innerText = purchase2Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase2Details.orders = purchase2Details.orders - 1;
          item.innerText = purchase2Details.name;
          orders.innerText = purchase2Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase2Details.orders = purchase2Details.orders + 1;
          item.innerText = purchase2Details.name;
          orders.innerText = purchase2Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}



{
     let purchase3Details = {

          name: 'Veggie Overload',
          Price: 'Price: ₱599',
          orders: 0
     
     };
     let btn = document.querySelector('.product-3btn');
     let pbtn = document.querySelector('.buttonn3');
     let mbtn = document.querySelector('.button3'); 
     let item = document.querySelector('.item-3'); 
     let orders = document.querySelector('.orders-3'); 
     let Price = document.querySelector('.price-3');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase3Details.orders = 1;
          item.innerText = purchase3Details.name;
          orders.innerText = purchase3Details.orders;
          Price.innerText = purchase3Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase3Details.orders = purchase3Details.orders - 1;
          item.innerText = purchase3Details.name;
          orders.innerText = purchase3Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase3Details.orders = purchase3Details.orders + 1;
          item.innerText = purchase3Details.name;
          orders.innerText = purchase3Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}

{
     let purchase4Details = {

          name: 'Over Load Pizza',
          Price: 'Price: ₱599',
          orders: 0
     
     };
     let btn = document.querySelector('.product-4btn');
     let pbtn = document.querySelector('.buttonn4');
     let mbtn = document.querySelector('.button4'); 
     let item = document.querySelector('.item-4'); 
     let orders = document.querySelector('.orders-4'); 
     let Price = document.querySelector('.price-4');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase4Details.orders = 1;
          item.innerText = purchase4Details.name;
          orders.innerText = purchase4Details.orders;
          Price.innerText = purchase4Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase4Details.orders = purchase4Details.orders - 1;
          item.innerText = purchase4Details.name;
          orders.innerText = purchase4Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase4Details.orders = purchase4Details.orders + 1;
          item.innerText = purchase4Details.name;
          orders.innerText = purchase4Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}

{
     let purchase5Details = {

          name: 'Conneizzar',
          Price: 'Price: ₱599',
          orders: 0
     
     };
     let btn = document.querySelector('.product-5btn');
     let pbtn = document.querySelector('.buttonn5');
     let mbtn = document.querySelector('.button5'); 
     let item = document.querySelector('.item-5'); 
     let orders = document.querySelector('.orders-5'); 
     let Price = document.querySelector('.price-5');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase5Details.orders = 1;
          item.innerText = purchase5Details.name;
          orders.innerText = purchase5Details.orders;
          Price.innerText = purchase5Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase5Details.orders = purchase5Details.orders - 1;
          item.innerText = purchase5Details.name;
          orders.innerText = purchase5Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase5Details.orders = purchase5Details.orders + 1;
          item.innerText = purchase5Details.name;
          orders.innerText = purchase5Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}


{
     let purchase6Details = {

          name: 'Caramel Wonder',
          Price: 'Price: ₱250',
          orders: 0
     
     };
     let btn = document.querySelector('.product-6btn');
     let pbtn = document.querySelector('.buttonn6');
     let mbtn = document.querySelector('.button6'); 
     let item = document.querySelector('.item-6'); 
     let orders = document.querySelector('.orders-6'); 
     let Price = document.querySelector('.price-6');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase6Details.orders = 1;
          item.innerText = purchase6Details.name;
          orders.innerText = purchase6Details.orders;
          Price.innerText = purchase6Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase6Details.orders = purchase6Details.orders - 1;
          item.innerText = purchase6Details.name;
          orders.innerText = purchase6Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase6Details.orders = purchase6Details.orders + 1;
          item.innerText = purchase6Details.name;
          orders.innerText = purchase6Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}

{
     let purchase7Details = {

          name: 'Caramel Wonder',
          Price: 'Price: ₱250',
          orders: 0
     
     };
     let btn = document.querySelector('.product-7btn');
     let pbtn = document.querySelector('.buttonn7');
     let mbtn = document.querySelector('.button7'); 
     let item = document.querySelector('.item-7'); 
     let orders = document.querySelector('.orders-7'); 
     let Price = document.querySelector('.price-7');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase7Details.orders = 1;
          item.innerText = purchase7Details.name;
          orders.innerText = purchase7Details.orders;
          Price.innerText = purchase7Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase7Details.orders = purchase7Details.orders - 1;
          item.innerText = purchase7Details.name;
          orders.innerText = purchase7Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase7Details.orders = purchase7Details.orders + 1;
          item.innerText = purchase7Details.name;
          orders.innerText = purchase7Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}

{
     let purchase8Details = {

          name: 'Douglicius',
          Price: 'Price: ₱250',
          orders: 0
     
     };
     let btn = document.querySelector('.product-8btn');
     let pbtn = document.querySelector('.buttonn8');
     let mbtn = document.querySelector('.button8'); 
     let item = document.querySelector('.item-8'); 
     let orders = document.querySelector('.orders-8'); 
     let Price = document.querySelector('.price-8');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase8Details.orders = 1;
          item.innerText = purchase8Details.name;
          orders.innerText = purchase8Details.orders;
          Price.innerText = purchase8Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase8Details.orders = purchase8Details.orders - 1;
          item.innerText = purchase8Details.name;
          orders.innerText = purchase8Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase8Details.orders = purchase8Details.orders + 1;
          item.innerText = purchase8Details.name;
          orders.innerText = purchase8Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}



{
     let purchase9Details = {

          name: 'Name: Cream stick',
          Price: 'Price: ₱250',
          orders: 0
     
     };
     let btn = document.querySelector('.product-9btn');
     let pbtn = document.querySelector('.buttonn9');
     let mbtn = document.querySelector('.button9'); 
     let item = document.querySelector('.item-9'); 
     let orders = document.querySelector('.orders-9'); 
     let Price = document.querySelector('.price-9');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase9Details.orders = 1;
          item.innerText = purchase9Details.name;
          orders.innerText = purchase9Details.orders;
          Price.innerText = purchase9Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase9Details.orders = purchase9Details.orders - 1;
          item.innerText = purchase9Details.name;
          orders.innerText = purchase9Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase9Details.orders = purchase9Details.orders + 1;
          item.innerText = purchase9Details.name;
          orders.innerText = purchase9Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}


{
     let purchase10Details = {

          name: 'Cream stick',
          Price: '₱250',
          orders: 0
     
     };
     let btn = document.querySelector('.product-10btn');
     let pbtn = document.querySelector('.buttonn10');
     let mbtn = document.querySelector('.button10'); 
     let item = document.querySelector('.item-10'); 
     let orders = document.querySelector('.orders-10'); 
     let Price = document.querySelector('.price-10');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase10Details.orders = 1;
          item.innerText = purchase10Details.name;
          orders.innerText = purchase10Details.orders;
          Price.innerText = purchase10Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase10Details.orders = purchase10Details.orders - 1;
          item.innerText = purchase10Details.name;
          orders.innerText = purchase10Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase10Details.orders = purchase10Details.orders + 1;
          item.innerText = purchase10Details.name;
          orders.innerText = purchase10Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}


{
     let purchase11Details = {

          name: ' Name : Cream stick',
          Price: 'Price :₱250',
          orders: 0
     
     };
     let btn = document.querySelector('.product-11btn');
     let pbtn = document.querySelector('.buttonn11');
     let mbtn = document.querySelector('.button11'); 
     let item = document.querySelector('.item-11'); 
     let orders = document.querySelector('.orders-11'); 
     let Price = document.querySelector('.price-11');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase11Details.orders = 1;
          item.innerText = purchase11Details.name;
          orders.innerText = purchase11Details.orders;
          Price.innerText = purchase11Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase11Details.orders = purchase11Details.orders - 1;
          item.innerText = purchase11Details.name;
          orders.innerText = purchase11Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase11Details.orders = purchase11Details.orders + 1;
          item.innerText = purchase11Details.name;
          orders.innerText = purchase11Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}



{
     let purchase12Details = {

          name: 'Vanilla Cream stick',
          Price: '₱250',
          orders: 0
     
     };
     let btn = document.querySelector('.product-12btn');
     let pbtn = document.querySelector('.buttonn12');
     let mbtn = document.querySelector('.button12'); 
     let item = document.querySelector('.item-12'); 
     let orders = document.querySelector('.orders-12'); 
     let Price = document.querySelector('.price-12');


     btn.addEventListener("click",()=>{
          btn.innerText = '1';
          pbtn.style.display = 'inline-block';
          mbtn.style.display = 'inline-block';

          purchase12Details.orders = 1;
          item.innerText = purchase12Details.name;
          orders.innerText = purchase12Details.orders;
          Price.innerText = purchase12Details.Price
     })


     mbtn.addEventListener("click", () => {
          purchase12Details.orders = purchase12Details.orders - 1;
          item.innerText = purchase12Details.name;
          orders.innerText = purchase12Details.orders;

          if (btn.innerText<2) {
               btn.innerText = 'ADD TO CART';
               pbtn.style.display = 'none';
               mbtn.style.display = 'none';
               
          } else {
               btn.innerText = btn.innerText -1;
          }
     })

     pbtn.addEventListener("click",()=>{
          btn.innerText = +(btn.innerText) + 1;

          purchase12Details.orders = purchase12Details.orders + 1;
          item.innerText = purchase12Details.name;
          orders.innerText = purchase12Details.orders;

          if(btn.innerText == 5){
               pbtn.style.display = 'none';
               
          }
     })


     

}

