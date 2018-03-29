$stage=(function(){
  function show(){
      $(app.config.appContainer).append('<div class="admin-app-stage"></div>')
   
  }
  function load(router){
     var panel=parsePanel(rounter);
  }
  function appContainer(rounter){
    return '';
  }
   return{load:load,show:show};


})();
