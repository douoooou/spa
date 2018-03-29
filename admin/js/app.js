$(function(){
//  $login.show({'container':'#admin-app'})
$header.show();
$menu.show();
$stage.show();
$footer.show();

window.onhashchange=function(){
  console.log(location.hash);
}
});
