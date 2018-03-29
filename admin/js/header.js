var $header=(function(){

   $headerDOM=$(''+
        +'<div class="admin-app-header">'
        + '<div class="title"><h1>匠人牛品集团后台</h1></div>'
        + '<div class="account">'
        +   '<div class="logo"></div>'
        +   '<span>管理</span>'
        +   '<i></i>'
        +   '<div class="submenu">'
        +     '<i class=""></i>'
        +     '<span>注销</span>'
        +   '</div>'
        + '</div>'
        +'</div>');

  function show(){
    $(app.config.appContainer).append('<div class="admin-app-header"></div>');
  }
  return{show:show};
})();
