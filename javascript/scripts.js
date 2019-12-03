$(document).ready(function() {
  $("img#peng").click(function(){
    $("#Penguin").toggle();
    $("#Giraffe").hide();
    $("#Panda").hide();

  });
  $("img#ger").click(function(){
    $("#Giraffe").toggle();
    $("#Penguin").hide();
    $("#Panda").hide();
  });
  $("img#pan").click(function(){
    $("#Panda").toggle();
    $("#Penguin").hide();
    $("#Giraffe").hide();
  });
});
