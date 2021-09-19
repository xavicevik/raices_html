

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
    //console.log("click video zimbaue");
    $("#video").css("display", "flex");
    $("#videoTrata")[0].play();
  });

  $('#siguiente').click(function(){
  //  console.log("click siguienteMestizaje");
    $("#ventanaMestizaje").css("display", "none");
    $("#ventanaMestizaje1").css("display", "flex");

  });

  $('#siguienteOtros').click(function(){
  //  console.log("click siguienteMestizaje");
    $("#ventanaOtrosOficios").css("display", "none");
    $("#ventanaOtrosOficios2").css("display", "flex");

  });


      $('#atrasBoton').click(function(){
      //  console.log("click video zimbaue");
        $("#ventanaMestizaje1").css("display", "none");
        $("#ventanaMestizaje").css("display", "flex");
      });

      $('#atrasBotonOtros').click(function(){
      //  console.log("click video zimbaue");
        $("#ventanaOtrosOficios2").css("display", "none");
        $("#ventanaOtrosOficios").css("display", "flex");
      });

/* cerrar video zimbaue*/

  $('#cerrarVideo').click(function(){
    $("#video").css("display", "none");
    $("#videoTrata")[0].pause();
  });

/* CERRAR VISTAS*/

  $('#cerrarVistaMineria').click(function(){
    $("#ventanaMineria").css("display", "none");
  });

  $('#cerrarVistaMestizaje').click(function(){
    $("#ventanaMestizaje").css("display", "none");
  });

  $('#cerrarVistaMestizaje1').click(function(){
    $("#ventanaMestizaje1").css("display", "none");
  });

  $('#cerrarVistaAgricultura').click(function(){
    $("#ventanaAgricultura").css("display", "none");
  });

  $('#cerrarVentanaOtrosOficios').click(function(){
    $("#ventanaOtrosOficios").css("display", "none");
  });
  $('#cerrarVentanaOtrosOficios2').click(function(){
    $("#ventanaOtrosOficios2").css("display", "none");
  });

  $('#cerrarVentanaCulturasIndigenas').click(function(){
    $("#ventanaCulturasIndigenas").css("display", "none");
  });

  $('#cerrarVentanaAsentamientos').click(function(){
    $("#ventanaAsentamientos").css("display", "none");
  });

  /* PDFFSS*/


  $('#pdf').click(function(){
    $('#irPdf').attr({
      target: '_blank',
     href  : "./assets/pdf/TercerCapitulo/generalidades.pdf"});
  });

  $('#pdfAsentamiento').click(function(){
    $('#irPdfAsentamiento').attr({
      target: '_blank',
     href  : "./assets/pdf/TercerCapitulo/asentamiento.pdf"});
  });



  width = window.innerWidth;
  height = window.innerHeight;

console.log("ancho:" + width);
console.log("alto:" + height);


});

function drawSvg() {

  var s= Snap("#fondoCap3");
  s.attr({ viewBox: "0 0 1800 1100"});
  width = window.innerWidth;

  var botonesCapitulo3 = Snap.load('./assets/capitulo3/svg/svgCapitulo3.svg', function ( loadedFragment ) {

      botones = loadedFragment.select("g");
      personajes= botones.select("#personajes");
      ojo1Personaje1= botones.select("#ojo1Personaje1");
      ojo2Personaje1= botones.select("#ojo2Personaje1");
      ojosPersonaje1Mascara = botones.select("#ojosPersonaje1Mascara");
      nube1= botones.select("#nube1");
      nube2= botones.select("#nube2");
      nube3= botones.select("#nube3");
      nube4= botones.select("#nube4");
      mineria=botones.select("#mineria_1_");
      agricultura=botones.select("#agricultura_1_");
      mestizaje=botones.select("#mestizaje_1_");
      otrosOficios=botones.select("#otrosOficios_1_");
      culturasIndigenas=botones.select("#culturasIndigenas_3_");
      asentamientosColombia=botones.select("#asentamientosColombia_3_");


      var g = botones.group(nube1,nube2,nube3,nube4,personajes,ojosPersonaje1Mascara,ojo1Personaje1,ojo2Personaje1,mineria,agricultura,mestizaje,otrosOficios,culturasIndigenas,asentamientosColombia);
      s.append(g);
      mineria.hover( hoveroverM, hoveroutM);
      agricultura.hover( hoveroverY, hoveroutY);
      mestizaje.hover( hoveroverG, hoveroutG);
      otrosOficios.hover( hoveroverB, hoveroutB);
      culturasIndigenas.hover( hoveroverK, hoveroutK);
      asentamientosColombia.hover( hoveroverZ, hoveroutZ);



      //animar ojoss

      ojo1Personaje1.mover = function(){
        var animating = true;

        function animOn() {
          if( animating ) {
            //  console.log("-0.5");
            ojo1Personaje1.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);

          }
        }
        function animOut() {
        //  console.log("1");
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


      ojo1Personaje1.mover();
      ojo2Personaje1.mover();


      //animamos las nubessss

      nube1.mover = function(){

      //  console.log("mover nbe ");

        var animating = true;

        function animOn() {
          if( animating ) {
            nube1.animate({ transform:'t90,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube1.animate({transform:'t-90,0'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      nube2.mover = function(){

      //  console.log("mover nbe ");

        var animating = true;

        function animOn() {
          if( animating ) {
            nube2.animate({ transform:'t90,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube2.animate({transform:'t-90,0'}, 2000, mina.linear, animOn);
        }

        animOn();
      }

      nube3.mover = function(){

      //  console.log("mover nbe ");

        var animating = true;

        function animOn() {
          if( animating ) {
            nube3.animate({ transform:'t-100,0' }, 2000, mina.linear, animOut);
          }
        }
        function animOut() {
            nube3.animate({transform:'t100,0'}, 2000, mina.linear, animOn);
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


      mineria.click( function a() {
        $("#ventanaMineria").css("display", "flex");
      });

      agricultura.click( function a() {
        $("#ventanaAgricultura").css("display", "flex");


      });

      mestizaje.click( function a() {
        $("#ventanaMestizaje").css("display", "flex");

      });

      otrosOficios.click( function a() {
        $("#ventanaOtrosOficios").css("display", "flex");

      });

      culturasIndigenas.click( function a() {
        $("#ventanaCulturasIndigenas").css("display", "flex");

      });

      asentamientosColombia.click( function a() {
        $("#ventanaAsentamientos").css("display", "flex");

      });
  } );

var hoveroverM = function() { mineria.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap3").style.cursor = "pointer";};
var hoveroutM = function() { mineria.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap3").style.cursor = "pointer";};

var hoveroverY = function() { agricultura.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap3").style.cursor = "pointer";};
var hoveroutY = function() { agricultura.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap3").style.cursor = "pointer";};

var hoveroverG = function() { mestizaje.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap3").style.cursor = "pointer";};
var hoveroutG = function() { mestizaje.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap3").style.cursor = "pointer";};

var hoveroverB = function() { otrosOficios.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap3").style.cursor = "pointer";};
var hoveroutB = function() { otrosOficios.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap3").style.cursor = "pointer";};

var hoveroverK = function() { culturasIndigenas.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap3").style.cursor = "pointer";};
var hoveroutK = function() { culturasIndigenas.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap3").style.cursor = "pointer";};


var hoveroverZ = function() { asentamientosColombia.animate({ transform:'s1.3,1.3' }, 500, mina.bounce); document.getElementById("fondoCap3").style.cursor = "pointer";};
var hoveroutZ = function() { asentamientosColombia.animate({ transform:'s1,1' }, 500, mina.bounce ); document.getElementById("fondoCap3").style.cursor = "pointer";};


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
