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
    width.focus();
  }

 if(isNaN(width.value)==true){
       warn.innerHTML="信息格式不正确";
       width.focus();
 }
 if(width.value<0){
   warn.innerHTML="宽度必须大于零";
   width.focus();
 } 
}

height.onblur=function(){
  if(height.value==""){
    warnn.innerHTML="高度不能为空";
    height.focus();
  }
  if(isNaN(height.value)==true){
    warnn.innerHTML="信息格式不正确";
    height.focus();
  }
  if(height.value<0){
    warnn.innerHTML="高度必须大于零";
    height.focus();
  }
}

function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
          
}


 btn.onclick=function (){
     warn.innerHTML="";
     warnn.innerHTML="";
     circum.value=roundFractional((width.value)*2+(height.value)*2,1);
      area.value=roundFractional(width.value*height.value,1);
   } 

