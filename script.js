let btn=document.querySelector("button");
let bulb=document.querySelector(".bulb");

let flag=true;
btn.addEventListener('click',function(){
   if(flag){
    bulb.style.backgroundColor="yellow";
   btn.textContent="off";
   flag=false;
   }else{
    bulb.style.backgroundColor="transparent";
   btn.textContent="on";
   flag=true;
   }
})