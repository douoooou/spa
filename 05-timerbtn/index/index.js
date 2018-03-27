$(function(){

  var $btn=timerButton({
    'container':'div main',
      'title':'同意',
      'tlength':9,
      'enable':false
  });


  $btn.on('timer-button-click',function(){
    alert('您已经同意了！');
  });
  
  var $btn2=timerButton({
     'container':'div.main',
      'title':'发送短信',
      'tlength':9,
      'enable':true
  });

  $btn2.on('timer-button-click',function(){
    alert('同意了！');
  });
});
