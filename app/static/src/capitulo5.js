

$(window).ready(function(){

  drawSvg();


  $('#botonSabiasQue').click(function(){
    if($(this).next().hasClass('contenidoDesplegable')){
       $(this).next().removeClass('contenidoDesplegable');
    }else{
       $(this).next().addClass('contenidoDesplegable');
    }
  });

 /* CAPITULO 2*/
  /* Ver vídeo Zimbaue*/

  $('#verVideo1').click(function(){
    $("#video1").css("display", "flex");
    $("#videoTrata1")[0].play();
  });

  $('#verVideo2').click(function(){
    $("#video2").css("display", "flex");
    $("#videoTrata2")[0].play();
  });

  $('#siguiente').click(function(){
    $("#ventana1").css("display", "none");
    $("#ventana1S2").css("display", "flex");

  });

  $('#siguiente2').click(function(){
    $("#ventana1S2").css("display", "none");
    $("#ventana1S3").css("display", "flex");

  });

  $('#siguienteVentana1S3').click(function(){
    $("#ventana1S3").css("display", "none");
    $("#ventana1S4").css("display", "flex");

  });

  $('#siguienteVentana1S4').click(function(){
    $("#ventana1S4").css("display", "none");
    $("#ventana1S5").css("display", "flex");

  });

  $('#siguienteVentana1S5').click(function(){
    $("#ventana1S5").css("display", "none");
    $("#ventana1S6").css("display", "flex");

  });

  $('#siguienteVentana1S6').click(function(){
    $("#ventana1S6").css("display", "none");
    $("#ventana1S7").css("display", "flex");

  });

  $('#siguienteVentana1S7').click(function(){
    $("#ventana1S7").css("display", "none");
    $("#ventana1S8").css("display", "flex");

  });

  $('#siguienteVentana2').click(function(){
    $("#ventana2").css("display", "none");
    $("#ventana2S2").css("display", "flex");

  });

  $('#siguienteVentana2S2').click(function(){
    $("#ventana2S2").css("display", "none");
    $("#ventana2S3").css("display", "flex");

  });

  $('#siguienteVentana2S3').click(function(){
    $("#ventana2S3").css("display", "none");
    $("#ventana2S4").css("display", "flex");

  });

  $('#siguienteVentana2S4').click(function(){
    $("#ventana2S4").css("display", "none");
    $("#ventana2S5").css("display", "flex");

  });

  $('#siguienteVentana2S5').click(function(){
    $("#ventana2S5").css("display", "none");
    $("#ventana2S6").css("display", "flex");

  });

  $('#siguienteVentana2S6').click(function(){
    $("#ventana2S6").css("display", "none");
    $("#ventana2S7").css("display", "flex");

  });

  $('#siguienteVentana2S7').click(function(){
    $("#ventana2S7").css("display", "none");
    $("#ventana2S8").css("display", "flex");

  });


  $('#siguienteVentana3').click(function(){
    $("#ventana3").css("display", "none");
    $("#ventana3S2").css("display", "flex");

  });

  $('#siguienteVentana3S2').click(function(){
    $("#ventana3S2").css("display", "none");
    $("#ventana3S3").css("display", "flex");

  });

  $('#siguienteVentana3S3').click(function(){
    $("#ventana3S3").css("display", "none");
    $("#ventana3S4").css("display", "flex");

  });

  $('#siguienteVentana3S4').click(function(){
    $("#ventana3S4").css("display", "none");
    $("#ventana3S5").css("display", "flex");

  });

  $('#siguienteVentana3S5').click(function(){
    $("#ventana3S5").css("display", "none");
    $("#ventana3S6").css("display", "flex");

  });

  $('#siguienteVentana3S6').click(function(){
    $("#ventana3S6").css("display", "none");
    $("#ventana3S7").css("display", "flex");

  });

  $('#siguienteVentana5').click(function(){
    $("#ventana5").css("display", "none");
    $("#ventana5S2").css("display", "flex");

  });

  $('#atrasBoton1').click(function(){
    $("#ventana1S2").css("display", "none");
    $("#ventana1").css("display", "flex");
  });



  $('#atrasBotonVentana1S3').click(function(){
    $("#ventana1S3").css("display", "none");
    $("#ventana1S2").css("display", "flex");
  });

  $('#atrasBotonVentana1S4').click(function(){
    $("#ventana1S4").css("display", "none");
    $("#ventana1S3").css("display", "flex");
  });

  $('#atrasBotonVentana1S5').click(function(){
    $("#ventana1S5").css("display", "none");
    $("#ventana1S4").css("display", "flex");
  });

  $('#atrasBotonVentana1S6').click(function(){
    $("#ventana1S6").css("display", "none");
    $("#ventana1S5").css("display", "flex");
  });

  $('#atrasBotonVentana1S7').click(function(){
    $("#ventana1S7").css("display", "none");
    $("#ventana1S6").css("display", "flex");
  });
  $('#atrasBotonVentana1S8').click(function(){
    $("#ventana1S8").css("display", "none");
    $("#ventana1S7").css("display", "flex");
  });

  $('#atrasBoton2').click(function(){
    $("#ventana1S3").css("display", "none");
    $("#ventana1S2").css("display", "flex");
  });

  $('#atrasBotonVentana2S2').click(function(){
    $("#ventana2S2").css("display", "none");
    $("#ventana2").css("display", "flex");
  });

  $('#atrasBotonVentana2S3').click(function(){
    $("#ventana2S3").css("display", "none");
    $("#ventana2S2").css("display", "flex");
  });

  $('#atrasBotonVentana2S4').click(function(){
    $("#ventana2S4").css("display", "none");
    $("#ventana2S3").css("display", "flex");
  });

  $('#atrasBotonVentana2S5').click(function(){
    $("#ventana2S5").css("display", "none");
    $("#ventana2S4").css("display", "flex");
  });

  $('#atrasBotonVentana2S6').click(function(){
    $("#ventana2S6").css("display", "none");
    $("#ventana2S5").css("display", "flex");
  });

  $('#atrasBotonVentana2S7').click(function(){
    $("#ventana2S7").css("display", "none");
    $("#ventana2S6").css("display", "flex");
  });

  $('#atrasBotonVentana2S8').click(function(){
    $("#ventana2S8").css("display", "none");
    $("#ventana2S7").css("display", "flex");
  });

  $('#atrasBotonVentana3S2').click(function(){
    $("#ventana3S2").css("display", "none");
    $("#ventana3").css("display", "flex");
  });

  $('#atrasBotonVentana3S3').click(function(){
    $("#ventana3S3").css("display", "none");
    $("#ventana3S2").css("display", "flex");
  });

  $('#atrasBotonVentana3S4').click(function(){
    $("#ventana3S4").css("display", "none");
    $("#ventana3S3").css("display", "flex");
  });

  $('#atrasBotonVentana3S5').click(function(){
    $("#ventana3S5").css("display", "none");
    $("#ventana3S4").css("display", "flex");
  });

  $('#atrasBotonVentana3S6').click(function(){
    $("#ventana3S6").css("display", "none");
    $("#ventana3S5").css("display", "flex");
  });

  $('#atrasBotonVentana3S7').click(function(){
    $("#ventana3S7").css("display", "none");
    $("#ventana3S6").css("display", "flex");
  });

  $('#atrasBotonVentana5S2').click(function(){
    $("#ventana5S2").css("display", "none");
    $("#ventana5").css("display", "flex");
  });

/* cerrar video zimbaue*/

  $('#cerrarVideo1').click(function(){
    $("#video1").css("display", "none");
    $("#videoTrata1")[0].pause();
  });

  $('#cerrarVideo2').click(function(){
    $("#video2").css("display", "none");
    $("#videoTrata2")[0].pause();
  });

/* CERRAR VISTAS*/

  $('#cerrarVentana1').click(function(){
    $("#ventana1").css("display", "none");
  });

  $('#cerrarVentana1S2').click(function(){
    $("#ventana1S2").css("display", "none");
  });

  $('#cerrarVentana1S3').click(function(){
    $("#ventana1S3").css("display", "none");
  });

  $('#cerrarVentana1S4').click(function(){
    $("#ventana1S4").css("display", "none");
  });
  $('#cerrarVentana1S5').click(function(){
    $("#ventana1S5").css("display", "none");
  });
  $('#cerrarVentana1S6').click(function(){
    $("#ventana1S6").css("display", "none");
  });
  $('#cerrarVentana1S7').click(function(){
    $("#ventana1S7").css("display", "none");
  });
  $('#cerrarVentana1S8').click(function(){
    $("#ventana1S8").css("display", "none");
  });

  $('#cerrarVentana2').click(function(){
    $("#ventana2").css("display", "none");
  });

  $('#cerrarVentana2S2').click(function(){
    $("#ventana2S2").css("display", "none");
  });

  $('#cerrarVentana2S3').click(function(){
    $("#ventana2S3").css("display", "none");
  });

  $('#cerrarVentana2S4').click(function(){
    $("#ventana2S4").css("display", "none");
  });

  $('#cerrarVentana2S5').click(function(){
    $("#ventana2S5").css("display", "none");
  });
  $('#cerrarVentana2S6').click(function(){
    $("#ventana2S6").css("display", "none");
  });
  $('#cerrarVentana2S7').click(function(){
    $("#ventana2S7").css("display", "none");
  });
  $('#cerrarVentana2S8').click(function(){
    $("#ventana2S8").css("display", "none");
  });

  $('#cerrarVentana3').click(function(){
    $("#ventana3").css("display", "none");
  });

  $('#cerrarVentana3S2').click(function(){
    $("#ventana3S2").css("display", "none");
  });

  $('#cerrarVentana3S3').click(function(){
    $("#ventana3S3").css("display", "none");
  });

  $('#cerrarVentana3S4').click(function(){
    $("#ventana3S4").css("display", "none");
  });

  $('#cerrarVentana3S5').click(function(){
    $("#ventana3S5").css("display", "none");
  });

  $('#cerrarVentana3S6').click(function(){
    $("#ventana3S6").css("display", "none");
  });

  $('#cerrarVentana3S7').click(function(){
    $("#ventana3S7").css("display", "none");
  });

  $('#cerrarVentana4').click(function(){
    $("#ventana4").css("display", "none");
  });

  $('#cerrarVentana5').click(function(){
    $("#ventana5").css("display", "none");
  });

  $('#cerrarVentana5S2').click(function(){
    $("#ventana5S2").css("display", "none");
  });

  $('#cerrarVentana6').click(function(){
    $("#ventana6").css("display", "none");
  });

  $('#cerrarVentana7').click(function(){
    $("#ventana7").css("display", "none");
  });

  /* PDFFSS*/


  $('#pdfVentana1').click(function(){
    $('#irPdfVentana1').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/musica.pdf"});
  });

  $('#pdfVentana1S2').click(function(){
    $('#irPdfVentana1S2').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/musica.pdf"});
  });

  $('#pdfVentana1S3').click(function(){
    $('#irPdfVentana1S3').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/musica.pdf"});
  });

  $('#pdfVentana1S5').click(function(){
    $('#irPdfVentana1S5').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/musica.pdf"});
  });

  $('#pdfVentana1S4').click(function(){
    $('#irPdfVentana1S4').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/musica.pdf"});
  });

  $('#pdfVentana1S6').click(function(){
    $('#irPdfVentana1S6').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/musica.pdf"});
  });

  $('#pdfVentana1S7').click(function(){
    $('#irPdfVentana1S7').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/musica.pdf"});
  });

  $('#pdfVentana1S8').click(function(){
    $('#irPdfVentana1S8').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/musica.pdf"});
  });

  $('#pdfVentana1S3').click(function(){
    $('#irPdfVentana1S3').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/musica.pdf"});
  });

  $('#pdfVentana2').click(function(){
    $('#irPdfVentana2').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/festividades.pdf"});
  });

  $('#pdfVentana2S2').click(function(){
    $('#irPdfVentana2S2').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/festividades.pdf"});
  });

  $('#pdfVentana2S3').click(function(){
    $('#irPdfVentana2S3').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/festividades.pdf"});
  });

  $('#pdfVentana2S4').click(function(){
    $('#irPdfVentana2S4').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/festividades.pdf"});
  });

  $('#pdfVentana2S5').click(function(){
    $('#irPdfVentana2S5').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/festividades.pdf"});
  });


  $('#pdfVentana3').click(function(){
    $('#irPdfVentana3').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/literaturaAfricana.pdf"});
  });

  $('#pdfVentana3S2').click(function(){
    $('#irPdfVentana3S2').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/literaturaAfricana.pdf"});
  });

  $('#pdfVentana3S3').click(function(){
    $('#irPdfVentana3S3').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/literaturaAfricana.pdf"});
  });

  $('#pdfVentana3S4').click(function(){
    $('#irPdfVentana3S4').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/literaturaAfricana.pdf"});
  });

  $('#pdfVentana3S5').click(function(){
    $('#irPdfVentana3S5').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/poesiaAfrocolombiana.pdf"});
  });

  $('#pdfVentana3S6').click(function(){
    $('#irPdfVentana3S6').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/poesiaAfrocolombiana.pdf"});
  });

  $('#pdfVentana3S7').click(function(){
    $('#irPdfVentana3S7').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/mitosLeyendas.pdf"});
  });
  $('#pdfVentana4').click(function(){
    $('#irPdfVentana4').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/cocina.pdf"});
  });

  $('#pdfVentana5').click(function(){
    $('#irPdfVentana5').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/arte.pdf"});
  });

  $('#pdfVentana6').click(function(){
    $('#irPdfVentana6').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/raizal.pdf"});
  });

  $('#pdfVentana62').click(function(){
    $('#irPdfVentana62').attr({
      target: '_blank',
     href  : "./assets/pdf/QuintoCapitulo/origenApellidosAfricanos.pdf"});
  });


  width = window.innerWidth;
  height = window.innerHeight;

console.log("ancho:" + width);
console.log("alto:" + height);


});

function drawSvg() {

  var s= Snap("#botonesSvg");
  s.attr({ viewBox: "0 0 4500 1300 "});

  var botonesCapitulo3 = Snap.load('./assets/capitulo5/svg/botonesCapitulo5.svg', function ( loadedFragment ) {

      botones = loadedFragment.select("g");

      raizales=botones.select("#raizales");
      trenzar=botones.select("#trenzar");
      gastronomia=botones.select("#gastronomia");
      literatura=botones.select("#literatura");
      festividades=botones.select("#festividades_1_");
      musica=botones.select("#musica");
      maraca1=botones.select("#maraca1");
      maraca2=botones.select("#maraca2");
      tambor1=botones.select("#tambor1");
      tambor2=botones.select("#tambor2");
      bocaPersonaje1 = botones.select("#bocaPersonaje1");
      bocaPersonaje2 = botones.select("#bocaPersonaje2");
      personajes = botones.select("#personajes");

      var g = botones.group(raizales,trenzar,gastronomia,literatura,festividades,musica,personajes,maraca1,maraca2,tambor1,tambor2,bocaPersonaje1,bocaPersonaje2);
      s.append(g);
      raizales.hover( hoveroverM, hoveroutM);
      trenzar.hover( hoveroverY, hoveroutY);
      gastronomia.hover( hoveroverG, hoveroutG);
      literatura.hover( hoveroverB, hoveroutB);
      festividades.hover( hoveroverK, hoveroutK);
      musica.hover( hoveroverZ, hoveroutZ);

      raizales.click( function a() {
        $("#ventana6").css("display", "flex");
      });

      trenzar.click( function a() {
        $("#ventana5").css("display", "flex");


      });

      gastronomia.click( function a() {
        $("#ventana4").css("display", "flex");

      });

      literatura.click( function a() {
        $("#ventana3").css("display", "flex");

      });

      festividades.click( function a() {
        $("#ventana2").css("display", "flex");


      });

      musica.click( function a() {
        $("#ventana1").css("display", "flex");


      });

      bocaPersonaje1.mover = function(){
        var animating = true;

        function animOn() {
          if( animating ) {
            bocaPersonaje1.animate({ transform:'s1.3,1.3' }, 2000, mina.linear, animOut);

          }
        }
        function animOut() {
            bocaPersonaje1.animate({transform:'s1,1'}, 5000, mina.linear, animOn);
        }

        animOn();
      }


      bocaPersonaje2.mover = function(){
        var animating = true;

        function animOn() {
          if( animating ) {
                bocaPersonaje2.animate({transform:'s1,1'}, 5000, mina.linear, animOut);


          }
        }
        function animOut() {
            bocaPersonaje2.animate({ transform:'s1.5,1.5' }, 1000, mina.linear, animOn);
        }

        animOn();
      }

      bocaPersonaje1.mover();
      bocaPersonaje2.mover();


      maraca1.mover = function(){
        var animating = true;

        function animOn() {
          if( animating ) {
            maraca1.animate({ transform:'t10,0' }, 500, mina.linear, animOut);

          }
        }
        function animOut() {
            maraca1.animate({transform:'t-10,0'}, 200, mina.linear, animOn);
        }

        animOn();
      }

      maraca2.mover = function(){
        var animating = true;

        function animOn() {
          if( animating ) {
            maraca2.animate({ transform:'t-10,0' }, 500, mina.linear, animOut);

          }
        }
        function animOut() {
            maraca2.animate({transform:'t10,0'}, 200, mina.linear, animOn);
        }

        animOn();
      }


      maraca1.mover();
      maraca2.mover();


      tambor1.mover = function(){
        var animating = true;

        function animOn() {
          if( animating ) {
            tambor1.animate({ transform:'t0,10' }, 500, mina.linear, animOut);

          }
        }
        function animOut() {
            tambor1.animate({transform:'t0,-10'}, 200, mina.linear, animOn);
        }

        animOn();
      }

      tambor2.mover = function(){
        var animating = true;

        function animOn() {
          if( animating ) {
            tambor2.animate({ transform:'t0,-10' }, 500, mina.linear, animOut);

          }
        }
        function animOut() {
            tambor2.animate({transform:'t0,10'}, 200, mina.linear, animOn);
        }

        animOn();
      }

      tambor1.mover();
      tambor2.mover();


  } );

var hoveroverM = function() { raizales.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("botonesSvg").style.cursor = "pointer";};
var hoveroutM = function() { raizales.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("botonesSvg").style.cursor = "pointer";};

var hoveroverY = function() { trenzar.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("botonesSvg").style.cursor = "pointer";};
var hoveroutY = function() { trenzar.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("botonesSvg").style.cursor = "pointer";};

var hoveroverG = function() { gastronomia.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("botonesSvg").style.cursor = "pointer";};
var hoveroutG = function() { gastronomia.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("botonesSvg").style.cursor = "pointer";};

var hoveroverB = function() { literatura.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("botonesSvg").style.cursor = "pointer";};
var hoveroutB = function() { literatura.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("botonesSvg").style.cursor = "pointer";};

var hoveroverK = function() { festividades.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("botonesSvg").style.cursor = "pointer";};
var hoveroutK = function() { festividades.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("botonesSvg").style.cursor = "pointer";};


var hoveroverZ = function() { musica.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("botonesSvg").style.cursor = "pointer";};
var hoveroutZ = function() { musica.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("botonesSvg").style.cursor = "pointer";};

}
