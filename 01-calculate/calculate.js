var width=document.getElementById('wid');
var height=document.getElementById('hei');
var btn=document.getElementById('btn');
var circum=document.getElementById('cir');
var area=document.getElementById('are');
var warn=document.getElementById('warn');
var warnn=document.getElementById('warnn');


var focus= document.getElementById('wid').focus();
width.onblur=function(){
  if(width.value==""){
    warn.innerHTML="宽度不能为空";
  }

 if(isNaN(width.value)==true){
       warn.innerHTML="信息格式不正确";
 }
 if(width.value<0){
   warn.innerHTML="宽度必须大于零";
 } 
}

height.onblur=function(){
  if(height.value==""){
    warnn.innerHTML="高度不能为空";
  }
  if(isNaN(height.value)==true){
    warnn.innerHTML="信息格式不正确";
  }
  if(height.value<0){
    warnn.innerHTML="高度必须大于零";
  }
}

   btn.onclick=function (){
     warn.innerHTML="";
     warnn.innerHTML="";
      circum.value=(parseInt(width.value)+parseInt(height.value))*2;
      area.value=width.value*height.value;
   } 

