$(function() {
  var editor = new Behave({
        textarea: $('#h textarea').get(0),
          replaceTab: true,
          softTabs: true,
          tabSize: 2,
          autoOpen: true,
          overwrite: true,
          autoStrip: true,
          autoIndent: true,
          fence: false
      
  });
})
var btn=document.getElementById('btn');

var l=document.getElementById('l');
btn.onclick=function(){

   if($('#txt').val()!=""){ 
    var light=$('#l').html('<pre><code>'+$('#txt').val()+'</code></pre>');
   hljs.highlightBlock(light.get(0));
 
  }
}
