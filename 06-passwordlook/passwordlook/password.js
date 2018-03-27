var i=document.getElementById('i');
var p=document.getElementById('p');

i.onmouseover=function(){
  i.setAttribute('src','eye.jpg');
  p.setAttribute('type','text');
}
i.onmouseout=function(){
  i.setAttribute('src','eyee.png');
  p.setAttribute('type','password');
}
