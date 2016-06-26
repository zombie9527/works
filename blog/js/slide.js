$(document).ready(function(){
    var flag = true;
    var slideBox = $("#slide");
    $("#closeSlide").on("click",function(){
        if(flag){
            slideBox.animate({width:"30px"},500);
            $("#slide").addClass("hideSldie");
            $("#slide").removeClass("showSldie");
            flag = false;
        }
        else{
            slideBox.animate({width:"100px"},500);
            $("#slide").addClass("showSldie");
            $("#slide").removeClass("hideSldie");
            flag = true;
        }
    })
 });