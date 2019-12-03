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

  $("#btn").submit(function(event){
    var cuddle = $("select#cuddlevirdict").val();
    var age = parseInt($("input#age").val());
    var pick = "";

    if (cuddle === 'All' || cuddle === "Some" && age > 40){
      pick = "Panda";
    } else if (cuddle === "Never"){
      pick = "Giraffe";
    } else if (cuddle === 'All' || cuddle === "Some" && age <= 40){
      pick = "Penguin";
    } else {
      pick = "something else"
    }

    $("#animal").empty().append(pick);
    $("#results").show();


    event.preventDefault();
  });
});
