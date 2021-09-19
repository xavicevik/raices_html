

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

  $('#verVideo').click(function(){
    console.log("click video zimbaue");
    $("#video").css("display", "flex");
    $("#videoTrata")[0].play();
  });

  $('#siguiente').click(function(){
    console.log("click video zimbaue");
    $("#ventanaEsclavitud1").css("display", "flex");
    $("#ventanaEsclavitud").css("display", "none");
  });

    $('#siguiente1').click(function(){
      console.log("click video zimbaue");
      $("#ventanaEsclavitud1").css("display", "none");
      $("#ventanaEsclavitud2").css("display", "flex");
    });


      $('#atrasBoton1').click(function(){
        console.log("click video zimbaue");
        $("#ventanaEsclavitud1").css("display", "none");
        $("#ventanaEsclavitud").css("display", "flex");
      });

      $('#atrasBoton2').click(function(){
        console.log("click video zimbaue");
        $("#ventanaEsclavitud1").css("display", "flex");
        $("#ventanaEsclavitud2").css("display", "none");
      });
/* cerrar video zimbaue*/

  $('#cerrarVideo').click(function(){
    $("#video").css("display", "none");
    $("#videoTrata")[0].pause();
  });

/* CERRAR VISTAS*/

  $('#cerrarVistaEsclavitud').click(function(){
    $("#ventanaEsclavitud").css("display", "none");
  });

  $('#cerrarVistaEsclavitud1').click(function(){
    $("#ventanaEsclavitud1").css("display", "none");
  });

  $('#cerrarVistaEsclavitud2').click(function(){
    $("#ventanaEsclavitud2").css("display", "none");
  });

  $('#cerrarVistaEmbarque').click(function(){
    $("#ventanaEmbarque").css("display", "none");
  });

  $('#cerrarVistaTrianguloNegrero').click(function(){
    $("#ventanaTrianguloNegrero").css("display", "none");
  });

  $('#cerrarVistaConsencuencias').click(function(){
    $("#ventanaConsecuencias").css("display", "none");
  });

  $('#cerrarVistaLugares').click(function(){
    $("#ventanaLugares").css("display", "none");
  });

  $('#cerrarVistaTrataNegros').click(function(){
    $("#ventanaTrataNegros").css("display", "none");
  });

  /* PDFFSS*/


  $('#pdfEsclavitud').click(function(){
    $('#irPdfEsclavitud').attr({
      target: '_blank',
     href  : "./assets/pdf/SegundoCapitulo/esclavitud.pdf"});
  });

  $('#pdfEsclavitud1').click(function(){
    $('#irPdfEsclavitud1').attr({
      target: '_blank',
     href  : "./assets/pdf/SegundoCapitulo/esclavitud.pdf"});
  });

  $('#pdfEsclavitud2').click(function(){
    $('#irPdfEsclavitud2').attr({
      target: '_blank',
     href  : "./assets/pdf/SegundoCapitulo/esclavitud.pdf"});
  });

  $('#pdfEmbarque').click(function(){
    $('#irPdfEmbarque').attr({
      target: '_blank',
     href  : "./assets/pdf/SegundoCapitulo/embarque.pdf"});
  });

  $('#pdfTriangulo').click(function(){
    $('#irPdfTriangulo').attr({
      target: '_blank',
     href  : "./assets/pdf/SegundoCapitulo/triangulo.pdf"});
  });

  $('#pdfConsecuencias').click(function(){
    $('#irPdfConsecuencias').attr({
      target: '_blank',
     href  : "./assets/pdf/SegundoCapitulo/consecuencias.pdf"});
  });

  $('#pdfLugares').click(function(){
    $('#irPdfLugares').attr({
      target: '_blank',
     href  : "./assets/pdf/SegundoCapitulo/asentamientosEsclavos.pdf"});
  });

  $('#pdfTrata').click(function(){
    $('#irPdfTrata').attr({
      target: '_blank',
     href  : "./assets/pdf/SegundoCapitulo/trata.pdf"});
  });




  var width = window.innerWidth;
  var height = window.innerHeight;

console.log("ancho:" + width);
console.log("alto:" + height);


});

function drawSvg() {

  var s= Snap("#fondoCap2");
  //var g = s.group();


/*  var ancho = $("#mapaSvg").width();
  var alto = $("#mapaSvg").width();
  console.log(ancho);
  var viewBoxString= "0 0 " + ancho*/
  s.attr({ viewBox: "-100 0 2900 900 "});


  var mapa = Snap.load('./assets/capitulo2/svg/svgCapitulo2.svg', function ( loadedFragment ) {

      botones = loadedFragment.select("g");
      ojosMascaraa = botones.select("#ojosMascara");
      ojo1Personaje1 =botones.select("#ojo1Personaje1_1_");
      ojo2Personaje1 =botones.select("#ojo2Personaje1_1_");
      ojo1Personaje2 =botones.select("#ojo1Personaje2_1_");
      ojo2Personaje2 =botones.select("#ojo2Personje2_1_");
      ojo1Personaje3 =botones.select("#ojo1Personaje3_1_");
      ojo2Personaje3 =botones.select("#ojo2Personaje3_1_");
      ojo1Personaje4 =botones.select("#ojo1Personaje4_1_");
      ojo2Personaje4 =botones.select("#ojo2Personaje4_1_");
      titulo = botones.select("#titulo");
      personaje1 = botones.select("#personaje1");
      personaje2 = botones.select("#personaje2");
      personaje3 = botones.select("#personaje3_1_");
      personaje4 = botones.select("#personaje4_1_");
      agua = botones.select("#agua");
      agua2 = botones.select("#agua2");
      agua3 = botones.select("#agua3");
      fondo = botones.select("image");
      esclavitud=botones.select("#esclavitud_2_");
      embarque=botones.select("#embarque_1_");
      trianguloNegrero=botones.select("#trianguloNegrero_2_");
      consecuencias=botones.select("#consecuencias_2_");
      lugaresAsentamiento=botones.select("#lugaresAsentamiento_1_");
      trataNegros=botones.select("#trataNegros_1_");

      var g = botones.group(fondo,agua,agua2,agua3,personaje1,personaje2,personaje3,personaje4,ojosMascaraa,ojo1Personaje1,ojo2Personaje1,ojo1Personaje2,ojo2Personaje2,
        ojo1Personaje3,ojo2Personaje3,ojo1Personaje4,ojo2Personaje4,esclavitud,embarque,trianguloNegrero,consecuencias,lugaresAsentamiento,trataNegros,titulo);
      s.append(g);
      esclavitud.hover( hoveroverM, hoveroutM);
      embarque.hover( hoveroverY, hoveroutY);
      trianguloNegrero.hover( hoveroverG, hoveroutG);
      consecuencias.hover( hoveroverB, hoveroutB);
      lugaresAsentamiento.hover( hoveroverK, hoveroutK);
      trataNegros.hover( hoveroverZ, hoveroutZ);


      //mover aguitaa

      agua.mover = function(){
        var animating = true;

        function animOn() {
        //  console.log("moverahia");
          if( animating ) {
            agua.animate({ transform:'t30,0' }, 1000, mina.linear, animOut);
          }
        }
        function animOut() {
            agua.animate({transform:'t-100,-0'}, 3000, mina.linear, animOn);
        }

        animOn();
      }

      agua2.mover = function(){
        var animating = true;

        function animOn() {
          //console.log("moverahia");
          if( animating ) {
            agua2.animate({ transform:'t-48,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            agua2.animate({transform:'t48,-0'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      agua3.mover = function(){
        var animating = true;

        function animOn() {
          //console.log("moverahia");
          if( animating ) {
            agua3.animate({ transform:'t50,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            agua3.animate({transform:'t-50,-0'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      agua.mover();
      agua2.mover();
      agua3.mover();



      //ojosPersonaje1Mascara


      ojo1Personaje1.mover = function(){
        var animating = true;
        function animOn() {
          if( animating ) {
              //console.log("-0.5");
            ojo1Personaje1.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);

          }
        }
        function animOut() {
          //console.log("1");
            ojo1Personaje1.animate({transform:'s1,1'}, 5000, mina.linear, animOn);
        }

        animOn();
      }

      ojo2Personaje1.mover = function(){

        var animating = true;

        function animOn() {
          if( animating ) {
            ojo2Personaje1.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            ojo2Personaje1.animate({transform:'s1,1'}, 5000, mina.linear, animOn);
        }

        animOn();
      }


      //OJOS PERSONAJE 2

      ojo1Personaje2.mover = function(){
        var animating = true;
        function animOn() {
          if( animating ) {
              //console.log("-0.5");
            ojo1Personaje2.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);

          }
        }
        function animOut() {
        //  console.log("1");
            ojo1Personaje2.animate({transform:'s1,1'}, 5000, mina.linear, animOn);
        }

        animOn();
      }

      ojo2Personaje2.mover = function(){

        var animating = true;

        function animOn() {
          if( animating ) {
            ojo2Personaje2.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            ojo2Personaje2.animate({transform:'s1,1'}, 5000, mina.linear, animOn);
        }

        animOn();
      }

      ojo1Personaje3.mover = function(){
        var animating = true;
        function animOn() {
          if( animating ) {
              //console.log("-0.5");
            ojo1Personaje3.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);

          }
        }
        function animOut() {
        //  console.log("1");
            ojo1Personaje3.animate({transform:'s1,1'}, 5000, mina.linear, animOn);
        }

        animOn();
      }

      ojo2Personaje3.mover = function(){

        var animating = true;

        function animOn() {
          if( animating ) {
            ojo2Personaje3.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            ojo2Personaje3.animate({transform:'s1,1'}, 5000, mina.linear, animOn);
        }

        animOn();
      }

      ojo1Personaje4.mover = function(){
        var animating = true;
        function animOn() {
          if( animating ) {
            //  console.log("-0.5");
            ojo1Personaje4.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);

          }
        }
        function animOut() {
          //console.log("1");
            ojo1Personaje4.animate({transform:'s1,1'}, 5000, mina.linear, animOn);
        }

        animOn();
      }

      ojo2Personaje4.mover = function(){

        var animating = true;

        function animOn() {
          if( animating ) {
            ojo2Personaje4.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            ojo2Personaje4.animate({transform:'s1,1'}, 5000, mina.linear, animOn);
        }

        animOn();
      }


      ojo1Personaje1.mover();
      ojo2Personaje1.mover();
      ojo1Personaje2.mover();
      ojo2Personaje2.mover();
      ojo1Personaje3.mover();
      ojo2Personaje3.mover();
      ojo1Personaje4.mover();
      ojo2Personaje4.mover();

      esclavitud.click( function a() {
        $("#ventanaEsclavitud").css("display", "flex");
        //console.log("esclavitud");
      });

      embarque.click( function a() {
        $("#ventanaEmbarque").css("display", "flex");

      });

      trianguloNegrero.click( function a() {
        $("#ventanaTrianguloNegrero").css("display", "flex");

      });

      consecuencias.click( function a() {
        $("#ventanaConsecuencias").css("display", "flex");

      });

      lugaresAsentamiento.click( function a() {
        $("#ventanaLugares").css("display", "flex");

      });

      trataNegros.click( function a() {
        $("#ventanaTrataNegros").css("display", "flex");
        /*$("#videoZimbaueV")[0].play();*/
      });
  } );

var hoveroverM = function() { esclavitud.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap2").style.cursor = "pointer";};
var hoveroutM = function() { esclavitud.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap2").style.cursor = "pointer";};

var hoveroverY = function() { embarque.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap2").style.cursor = "pointer";};
var hoveroutY = function() { embarque.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap2").style.cursor = "pointer";};

var hoveroverG = function() { trianguloNegrero.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap2").style.cursor = "pointer";};
var hoveroutG = function() { trianguloNegrero.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap2").style.cursor = "pointer";};

var hoveroverB = function() { consecuencias.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap2").style.cursor = "pointer";};
var hoveroutB = function() { consecuencias.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap2").style.cursor = "pointer";};

var hoveroverK = function() { lugaresAsentamiento.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap2").style.cursor = "pointer";};
var hoveroutK = function() { lugaresAsentamiento.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap2").style.cursor = "pointer";};

var hoveroverZ = function() { trataNegros.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap2").style.cursor = "pointer";};
var hoveroutZ = function() { trataNegros.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap2").style.cursor = "pointer";};

}














/*
// Creamos un array vacio
var ElementosClick = new Array();
// Capturamos el click y lo pasamos a una funcion
document.onclick = captura_click;

function captura_click(e) {
	// Funcion para capturar el click del raton
	var HaHechoClick;
	if (e == null) {
		// Si hac click un elemento, lo leemos
		HaHechoClick = event.srcElement;
	} else {
		// Si ha hecho click sobre un destino, lo leemos
		HaHechoClick = e.target;
	}
	// Añadimos el elemento al array de elementos
	ElementosClick.push(HaHechoClick);
	// Una prueba con salida en consola
	console.log("Contenido sobre lo que ha hecho click: "+clickedElement.innerHTML);
}
*/
