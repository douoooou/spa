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

});
