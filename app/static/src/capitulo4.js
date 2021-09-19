

$(window).ready(function(){

  drawSvg();

  $('#botonSabiasQue').click(function(){
    if($(this).next().hasClass('contenidoDesplegable')){
       $(this).next().removeClass('contenidoDesplegable');
    }else{
       $(this).next().addClass('contenidoDesplegable');
    }
  });

 /* CAPITULO 4*/
  /* Ver vídeo Zimbaue*/

  $('#verVideo').click(function(){
    $("#video").css("display", "flex");
    $("#videoTrata")[0].play();
  });

  $('#verAlexandre').click(function(){
    $("#ventanaAlexandre").css("display", "flex");
  });

  $('#verBenkos').click(function(){
    $("#ventanaBenkos").css("display", "flex");
  });

  $('#siguienteBenkos').click(function(){
    $("#ventanaBenkos").css("display", "none");
    $("#ventanaBenkos2").css("display", "flex");

  });

  $('#siguienteBenkos2').click(function(){
    $("#ventanaBenkos2").css("display", "none");
    $("#ventanaBenkos3").css("display", "flex");

  });

  $('#siguienteBenkos3').click(function(){
    $("#ventanaBenkos3").css("display", "none");
    $("#ventanaBenkos4").css("display", "flex");

  });

  $('#siguiente').click(function(){
  //  console.log("click siguienteMestizaje");
    $("#ventana1").css("display", "none");
    $("#ventana1S2").css("display", "flex");

  });

  $('#siguiente2').click(function(){
  //  console.log("click siguienteMestizaje");
    $("#ventana1S2").css("display", "none");
    $("#ventana1S3").css("display", "flex");

  });

  $('#siguiente2').click(function(){
  //  console.log("click siguienteMestizaje");
    $("#ventana1S2").css("display", "none");
    $("#ventana1S3").css("display", "flex");

  });

  $('#siguienteVentana2').click(function(){
  //  console.log("click siguienteMestizaje");
    $("#ventana2").css("display", "none");
    $("#ventana2S2").css("display", "flex");

  });

  $('#siguienteVentana2S2').click(function(){
  //  console.log("click siguienteMestizaje");
    $("#ventana2S2").css("display", "none");
    $("#ventana2S3").css("display", "flex");
//    console.log("2 a 3");

  });

  $('#siguienteVentana2S3').click(function(){
  //  console.log("click siguienteMestizaje");
    $("#ventana2S3").css("display", "none");
    $("#ventana2S4").css("display", "flex");

  });

  $('#siguienteVentana2S4').click(function(){
  //  console.log("click siguienteMestizaje");
    $("#ventana2S4").css("display", "none");
    $("#ventana2S5").css("display", "flex");

  });


  $('#atrasBenkos2').click(function(){
  //  console.log("click video zimbaue");
    $("#ventanaBenkos2").css("display", "none");
    $("#ventanaBenkos").css("display", "flex");
  });
  $('#atrasBenkos3').click(function(){
  //  console.log("click video zimbaue");
    $("#ventanaBenkos3").css("display", "none");
    $("#ventanaBenkos2").css("display", "flex");
  });

  $('#atrasBenkos4').click(function(){
  //  console.log("click video zimbaue");
    $("#ventanaBenkos4").css("display", "none");
    $("#ventanaBenkos3").css("display", "flex");
  });

  $('#atrasBoton1').click(function(){
  //  console.log("click video zimbaue");
    $("#ventana1S2").css("display", "none");
    $("#ventana1").css("display", "flex");
  });


  $('#atrasBoton2').click(function(){
  //  console.log("click video zimbaue");
    $("#ventana1S3").css("display", "none");
    $("#ventana1S2").css("display", "flex");
  });

  $('#atrasBotonVentana2S2').click(function(){
  //  console.log("click video zimbaue");
    $("#ventana2S2").css("display", "none");
    $("#ventana2").css("display", "flex");
  });

  $('#atrasBotonVentana2S3').click(function(){
  //  console.log("click video zimbaue");
    $("#ventana2S3").css("display", "none");
    $("#ventana2S2").css("display", "flex");
  });

  $('#atrasBotonVentana2S4').click(function(){
  //  console.log("click video zimbaue");
    $("#ventana2S4").css("display", "none");
    $("#ventana2S3").css("display", "flex");
  });

  $('#atrasBotonVentana2S5').click(function(){
  //  console.log("click video zimbaue");
    $("#ventana2S5").css("display", "none");
    $("#ventana2S4").css("display", "flex");
  });

/* cerrar video zimbaue*/

  $('#cerrarVideo').click(function(){
    $("#video").css("display", "none");
    $("#videoTrata")[0].pause();
  });

/* CERRAR VISTAS*/

  $('#cerrarBenkos').click(function(){
    $("#ventanaBenkos").css("display", "none");
  });

  $('#cerrarAlexandre').click(function(){
    $("#ventanaAlexandre").css("display", "none");
  });

  $('#cerrarBenkos2').click(function(){
    $("#ventanaBenkos2").css("display", "none");
  });

  $('#cerrarBenkos3').click(function(){
    $("#ventanaBenkos3").css("display", "none");
  });

  $('#cerrarBenkos4').click(function(){
    $("#ventanaBenkos4").css("display", "none");
  });

  $('#cerrarVentana1').click(function(){
    $("#ventana1").css("display", "none");
  });

  $('#cerrarVentana1S2').click(function(){
    $("#ventana1S2").css("display", "none");
  });

  $('#cerrarVentana1S3').click(function(){
    $("#ventana1S3").css("display", "none");
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

  $('#cerrarVentana3').click(function(){
    $("#ventana3").css("display", "none");
  });

  $('#cerrarVentana4').click(function(){
    $("#ventana4").css("display", "none");
  });

  $('#cerrarVentana5').click(function(){
    $("#ventana5").css("display", "none");
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
     href  : "./assets/pdf/CuartoCapitulo/procesoslibertarios.pdf"});
  });

  $('#pdfVentana1S2').click(function(){
    $('#irPdfVentana1S2').attr({
      target: '_blank',
     href  : "./assets/pdf/CuartoCapitulo/procesoslibertarios.pdf"});
  });

  $('#pdfVentana1S3').click(function(){
    $('#irPdfVentana1S3').attr({
      target: '_blank',
     href  : "./assets/pdf/CuartoCapitulo/procesoslibertarios.pdf"});
  });

  $('#pdfVentana2').click(function(){
    $('#irPdfVentana2').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/cimarronajeJuridico.pdf"});
  });

  $('#pdfVentana2S2').click(function(){
    $('#irPdfVentana2S2').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/cimarronajeJuridico.pdf"});
  });

  $('#pdfVentana2S3').click(function(){
    $('#irPdfVentana2S3').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/cimarronajeJuridico.pdf"});
  });

  $('#pdfVentana2S4').click(function(){
    $('#irPdfVentana2S4').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/cimarronajeJuridico.pdf"});
  });

  $('#pdfVentana2S5').click(function(){
    $('#irPdfVentana2S5').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/cimarronajeJuridico.pdf"});
  });


  $('#pdfVentana3').click(function(){
    $('#irPdfVentana3').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/organizaciones.pdf"});
  });

  $('#pdfVentana4').click(function(){
    $('#irPdfVentana4').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/legislacion.pdf"});
  });

  $('#pdfVentana5').click(function(){
    $('#irPdfVentana5').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/ley70.pdf"});
  });

  $('#pdfVentana6').click(function(){
    $('#irPdfVentana6').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/cimarronajeJuridico.pdf"});
  });

  $('#pdfVentana7').click(function(){
    $('#irPdfVentana7').attr({
      target: '_blank',
   href  : "./assets/pdf/CuartoCapitulo/cronologia.pdf"});
  });


  width = window.innerWidth;
  height = window.innerHeight;

console.log("ancho:" + width);
console.log("alto:" + height);


});

function drawSvg() {

  var s= Snap("#svg");
  s.attr({ viewBox: "0 0 2200 1400 "});

  width = window.innerWidth;


  var botonesCapitulo3 = Snap.load('./assets/capitulo4/svg/caminoalaliberdad.svg', function ( loadedFragment ) {

      botones = loadedFragment.select("g");

      cronologia=botones.select("#cronologia");
      leyAntidiscriminacion=botones.select("#leyAntidiscriminacion");
      ley70=botones.select("#ley70");
      legislacionEspecial=botones.select("#legislacionEspecial");
      organizaciones=botones.select("#organizaciones");
      cimarronajesJuridico=botones.select("#cimarronaje");
      procesosLibertarios=botones.select("#procesosLibertarios");
      nube1=botones.select("#nube1");
      nube2=botones.select("#nube2");
      nube3=botones.select("#nube3");
      nube4=botones.select("#nube4");
      nubes=botones.select("#nubes");
      personajes=botones.select("#personajes");
      circuloCentro=botones.select("#circuloCentro");
      circuloIzquierdo=botones.select("#circuloIzquierdo");
      circuloDerecho=botones.select("#circuloDerecho");


      var g = botones.group(circuloDerecho,circuloCentro,circuloIzquierdo,nubes,nube1,nube2,nube3,nube4,personajes,cronologia,leyAntidiscriminacion,ley70,legislacionEspecial,organizaciones,cimarronajesJuridico,procesosLibertarios);
      s.append(g);

      // ANIMAMOS LAS NUBESSS
      nube1.mover = function(){

      //  console.log("mover nbe ");

        var animating = true;

        function animOn() {
          if( animating ) {
            nube1.animate({ transform:'t100,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube1.animate({transform:'t-100,0'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      nube2.mover = function(){

      //  console.log("mover nbe ");

        var animating = true;

        function animOn() {
          if( animating ) {
            nube2.animate({ transform:'t-100,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube2.animate({transform:'t100,0'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      nube3.mover = function(){

      //  console.log("mover nbe ");

        var animating = true;

        function animOn() {
          if( animating ) {
            nube3.animate({ transform:'t100,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube3.animate({transform:'t-100,0'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      nube4.mover = function(){

      //  console.log("mover nbe ");

        var animating = true;

        function animOn() {
          if( animating ) {
            nube4.animate({ transform:'t-100,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube4.animate({transform:'t100,0'}, 2000, mina.linear, animOn);
        }

        animOn();
      }


      nube1.mover();
      nube2.mover();
      nube3.mover();
      nube4.mover();

      //ANIMAMOS NUBES EN FORMA DE circuloCentro

      circuloCentro.mover = function(){

      var animating = true;

        function animOn() {
          if( animating ) {
            circuloCentro.animate({ transform:'s-1.3,-1.3' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            circuloCentro.animate({transform:'s1,1'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      circuloDerecho.mover = function(){

      var animating = true;

        function animOn() {
          if( animating ) {
            circuloDerecho.animate({ transform:'s1.3,1.3' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            circuloDerecho.animate({transform:'s1,1'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      circuloIzquierdo.mover = function(){

      var animating = true;

        function animOn() {
          if( animating ) {
            circuloIzquierdo.animate({ transform:'s1.5,1.5' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            circuloIzquierdo.animate({transform:'s1,1'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      circuloCentro.mover();
      circuloDerecho.mover();
      circuloIzquierdo.mover();


      cronologia.hover( hoveroverM, hoveroutM);
      leyAntidiscriminacion.hover( hoveroverY, hoveroutY);
      ley70.hover( hoveroverG, hoveroutG);
      legislacionEspecial.hover( hoveroverB, hoveroutB);
      organizaciones.hover( hoveroverK, hoveroutK);
      cimarronajesJuridico.hover( hoveroverZ, hoveroutZ);
      procesosLibertarios.hover( hoveroverL, hoveroutL);

      cronologia.click( function a() {
        $("#ventana7").css("display", "flex");
      });

      leyAntidiscriminacion.click( function a() {
        $("#ventana6").css("display", "flex");


      });

      ley70.click( function a() {
        $("#ventana5").css("display", "flex");

      });

      legislacionEspecial.click( function a() {
        $("#ventana4").css("display", "flex");

      });

      organizaciones.click( function a() {
        $("#ventana3").css("display", "flex");
    //    console.log("ventanaaa3");

      });

      cimarronajesJuridico.click( function a() {
        $("#ventana2").css("display", "flex");


      });

      procesosLibertarios.click( function a() {
        $("#ventana1").css("display", "flex");

      });
  } );

var hoveroverM = function() { cronologia.animate({ transform:'s1.1,1.1' }, 500, mina.bounce); document.getElementById("svg").style.cursor = "pointer";};
var hoveroutM = function() { cronologia.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("svg").style.cursor = "pointer";};

var hoveroverY = function() { leyAntidiscriminacion.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("svg").style.cursor = "pointer";};
var hoveroutY = function() { leyAntidiscriminacion.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("svg").style.cursor = "pointer";};

var hoveroverG = function() { ley70.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("svg").style.cursor = "pointer";};
var hoveroutG = function() { ley70.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("svg").style.cursor = "pointer";};

var hoveroverB = function() { legislacionEspecial.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("svg").style.cursor = "pointer";};
var hoveroutB = function() { legislacionEspecial.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("svg").style.cursor = "pointer";};

var hoveroverK = function() { organizaciones.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("svg").style.cursor = "pointer";};
var hoveroutK = function() { organizaciones.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("svg").style.cursor = "pointer";};


var hoveroverZ = function() { cimarronajesJuridico.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("svg").style.cursor = "pointer";};
var hoveroutZ = function() { cimarronajesJuridico.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("svg").style.cursor = "pointer";};

var hoveroverL = function() { procesosLibertarios.animate({ transform:'s1.2,1.2' }, 500, mina.bounce); document.getElementById("svg").style.cursor = "pointer";};
var hoveroutL = function() { procesosLibertarios.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("svg").style.cursor = "pointer";};

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
