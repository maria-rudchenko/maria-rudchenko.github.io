$(document).ready(function(){
  $(document).mousemove(function(event){
    $(".cursor").css("top",event.pageY-75);
     $(".cursor").css("left",event.pageX-75);
  });

});