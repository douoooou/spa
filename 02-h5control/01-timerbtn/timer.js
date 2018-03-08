var i=9;
var btn=document.getElementById('btn');
var timer=setInterval(function(){
     btn.value="同意"+'('+ i-- +'s)';
     if(i<0){
        clearInterval(timer);
        btn.value="同意";
        btn.removeAttribute("disabled");i
        btn.style.backgroundColor="red";

     }
  },1000);
btn.onclick=function(){
  alert("您已同意！");
}
