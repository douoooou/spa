var d=document.getElementById('d');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var timer=0;
function startPlay(){

  timer=setInterval(function(){
           if(d.value!=100){
             d.value++;
           }
         else d.value=0;

  },100);
}

function stopPlay(){
   clearInterval(timer); 
}

function resetPlay(){
  d.value=0;
}
