var r=document.getElementById('r');
var s=document.getElementById('s');
s.innerHTML=r.value;
r.onchange=function(){
  s.innerHTML=r.value;
}
