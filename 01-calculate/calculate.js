var width=document.getElementById('wid');
var height=document.getElementById('hei');
var btn=document.getElementById('btn');
var circum=document.getElementById('cir');
var area=document.getElementById('are');
var warn=document.getElementById('warn');
var warnn=document.getElementById('warnn');

width.onblur=function(){
  if(width.value==""){
    warn.innerHTML="宽度不能为空";
  }

 if(isNaN(width.value)==true){
       warn.innerHTML="信息格式不正确";
  }
  
}

height.onblur=function(){
  if(height.value==""){
    warnn.innerHTML="高度不能为空";
  }
  if(isNaN(height.value)==true){
    warnn.innerHTML="信息格式不正确";
  }
}

btn.onclick=function (){
      warn.innerHTML="";
      warnn.innerHTML="";
      circum.value=(parseInt(width.value)+parseInt(height.value))*2;
      area.value=width.value*height.value;
 }
 

