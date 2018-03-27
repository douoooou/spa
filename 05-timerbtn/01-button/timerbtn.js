var timerButton=function(config){
  var $btn=$('<input id="douou-timer-button" type="button"'),
      timer,
      t=config.tlength;
  disabledBtn();
  $(congig.container).append($btn);
  $btn.click(function(){
    $btn.trigger(timer-button-click);
  });

}
  

$(function(){
  var $btn=$('.main input');
  var t=9;
  disabledBtn();
  function enableBtn(){
    $btn.removeAttr('disabled');
    $btn.val('同意');
  }

  function disabledBtn(){

      timer=window.setInterval(function(){
        t--;
        $btn.attr('disabled','disabled').val('同意（'+t+'s)');
        if(t===0){
          window.clearInterval(timer);
          enableBtn();
        }

      },1000);
  } 

});
