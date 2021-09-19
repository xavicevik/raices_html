

$(window).ready(function(){

  width = window.innerWidth;
  height = window.innerHeight;

console.log("ancho:" + width);
console.log("alto:" + height);

  var encendido = true;
$("#audio").click(function() {

  if(encendido==true){
      $("#cancion")[0].pause();
      $(".iconoAudio").css("display","none");
      $(".iconoNoAudio").css("display","flex");
      encendido=false;

  }else{
      $("#cancion")[0].play();
      $(".iconoAudio").css("display","flex");
      $(".iconoNoAudio").css("display","none");
      encendido=true;

  }



 });


});
