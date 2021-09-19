

$(window).ready(function(){

  drawSvg();

  var width = window.innerWidth;
  var height = window.innerHeight;

console.log("ancho:" + width);
console.log("alto:" + height);


$('#siguiente').click(function(){
  $("#ventana1").css("display", "none");
  $("#ventana2").css("display", "flex");
});
$('#siguiente2').click(function(){
  $("#ventana2").css("display", "none");
  $("#ventana3").css("display", "flex");
});
$('#siguiente3').click(function(){
  $("#ventana3").css("display", "none");
  $("#ventana4").css("display", "flex");
});
$('#siguiente4').click(function(){
  $("#ventana4").css("display", "none");
  $("#ventana5").css("display", "flex");
});
$('#siguiente5').click(function(){
  $("#ventana5").css("display", "none");
  $("#ventana6").css("display", "flex");
});

$('#atras2').click(function(){
  $("#ventana2").css("display", "none");
  $("#ventana1").css("display", "flex");
});

$('#atras3').click(function(){
  $("#ventana3").css("display", "none");
  $("#ventana2").css("display", "flex");
});

$('#atras4').click(function(){
  $("#ventana4").css("display", "none");
  $("#ventana3").css("display", "flex");
});

$('#atras5').click(function(){
  $("#ventana5").css("display", "none");
  $("#ventana4").css("display", "flex");
});

$('#atras6').click(function(){
  $("#ventana6").css("display", "none");
  $("#ventana5").css("display", "flex");
});

});

function drawSvg() {

  var s= Snap("#nubesSvg");
  //var g = s.group();


/*  var ancho = $("#mapaSvg").width();
  var alto = $("#mapaSvg").width();
  console.log(ancho);
  var viewBoxString= "0 0 " + ancho*/
  s.attr({ viewBox: "0 0 1500 400 "});


  var mapa = Snap.load('./assets/svgNubes/nubes.svg', function ( loadedFragment ) {

      botones = loadedFragment.select("g");
      nube1 = botones.select("#nube1");
      nube2 =botones.select("#nube2");
      nube3 =botones.select("#nube3");
      nube4 =botones.select("#nube4");

      var g = botones.group(nube1,nube2,nube3,nube4);
      s.append(g);


      //mover aguitaa

      nube1.mover = function(){
        var animating = true;

        function animOn() {
        //  console.log("moverahia");
          if( animating ) {
            nube1.animate({ transform:'t80,0' }, 5000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube1.animate({transform:'t-80,-0'}, 5000, mina.linear, animOn);
        }

        animOn();
      }


      nube2.mover = function(){
        var animating = true;

        function animOn() {
        //  console.log("moverahia");
          if( animating ) {
            nube2.animate({ transform:'t-80,0' }, 5000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube2.animate({transform:'t80,-0'}, 5000, mina.linear, animOn);
        }

        animOn();
      }

      nube3.mover = function(){
        var animating = true;

        function animOn() {
        //  console.log("moverahia");
          if( animating ) {
            nube3.animate({ transform:'t80,0' }, 5000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube3.animate({transform:'t-80,-0'}, 5000, mina.linear, animOn);
        }

        animOn();
      }

      nube4.mover = function(){
        var animating = true;

        function animOn() {
        //  console.log("moverahia");
          if( animating ) {
            nube4.animate({ transform:'t-80,0' }, 5000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube4.animate({transform:'t80,-0'}, 5000, mina.linear, animOn);
        }

        animOn();
      }



      nube1.mover();
      nube2.mover();
      nube3.mover();
      nube4.mover();


  } );



}
