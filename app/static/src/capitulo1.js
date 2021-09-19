

$(window).ready(function(){

  drawSvg();
  //drawPajarosSvg();

  $('#botonSabiasQue').click(function(){
    if($(this).next().hasClass('contenidoDesplegable')){
       $(this).next().removeClass('contenidoDesplegable');
    }else{
       $(this).next().addClass('contenidoDesplegable');
    }
  });

 /* CAPITULO 1*/


 /* Cambiar en el capitulo 1 seccion 1 a capitulo 1 seccion 2*/
  $('#botonParte1').click(function(){
       $("#parte1Capitulo1").css("display", "none");
       $("#parte2Capitulo1").css("display", "flex");
      // this.setAttribute('ID','botonParte2');
       $("#botonParte1").css("display","none");
       $("#atrasBotonParte2").css("display","flex");
       //this.setAttribute('ID', 'NuevaID');"
  });

  $('#atrasBotonParte2').click(function(){
    $("#parte1Capitulo1").css("display", "flex");
    $("#parte2Capitulo1").css("display", "none");
    $("#botonParte1").css("display","flex");
    $("#atrasBotonParte2").css("display","none");

      // document.getElementById('botonPart1').id = "botonParte2";
  });

  /* Ver vídeo Zimbaue*/

  $('#verVideoZimbaue').click(function(){
    $("#videoZimbaue").css("display", "flex");
    $("#videoZimbaueV")[0].play();
  });

/* cerrar video zimbaue*/

  $('#cerrarVideoZimbaue').click(function(){
    $("#videoZimbaue").css("display", "none");
    $("#videoZimbaueV")[0].pause();
  });

  /*ver Mapa imperios*/


  $('#cerrarVistaMali').click(function(){
    $("#imperioMali").css("display", "none");
  });

  $('#cerrarVistaYolofo').click(function(){
    $("#reinoYolofo").css("display", "none");
  });

  $('#cerrarVistaGhana').click(function(){
    $("#imperioGhana").css("display", "none");
  });

  $('#cerrarVistaBenin').click(function(){
    $("#imperioBeninn").css("display", "none");
  });

  $('#cerrarVistaKon').click(function(){
    $("#imperioKon").css("display", "none");
  });

  $('#pdfMali').click(function(){
    $('#irPdfMali').attr({
      target: '_blank',
     href  : "./assets/pdf/primerCapitulo/mali.pdf"});
  });



  $('#pdfYolofo').click(function(){
    $('#irPdfYolofo').attr({
      target: '_blank',
     href  : "./assets/pdf/primerCapitulo/yolofo.pdf"});
  });

  $('#pdfGhana').click(function(){
    $('#irPdfGhana').attr({
      target: '_blank',
     href  : "./assets/pdf/primerCapitulo/ghana.pdf"});
  });

  $('#pdfBenin').click(function(){
    $('#irPdfBenin').attr({
      target: '_blank',
     href  : "./assets/pdf/primerCapitulo/benin.pdf"});
  });

  $('#pdfKon').click(function(){
    $('#irPdfKon').attr({
      target: '_blank',
     href  : "./assets/pdf/primerCapitulo/kon.pdf"});
  });

  $('#pdfMapaImperios').click(function(){
    $('#irPdfMapaImperios').attr({
      target: '_blank',
     href  : "./assets/pdf/primerCapitulo/imperiosyreinos.pdf"});
  });

  $('#pdfZimbawe').click(function(){
    $('#irPdfZimbawe').attr({
      target: '_blank',
     href  : "./assets/pdf/primerCapitulo/zimbawe.pdf"});
  });


    var width = window.innerWidth;
    var height = window.innerHeight;

  console.log("ancho:" + width);
  console.log("alto:" + height);

});

function drawSvg() {

  var s= Snap("#mapaSvg");
  s.attr({ viewBox: "0 0 1300 800 "});

  var mapa = Snap.load('./assets/capitulo1/svg/mapa.svg', function ( loadedFragment ) {

      mapaSvg = loadedFragment.select("g");

      mapa1=mapaSvg.select("#mapa_1_");
      mali=mapaSvg.select("#mali");
      yolofo=mapaSvg.select("#yolofo");
      ghana=mapaSvg.select("#ghana");
      benin=mapaSvg.select("#benin");
      kon=mapaSvg.select("#kon");
      zimbawe=mapaSvg.select("#zimbawe");
      maliT=mapaSvg.select("#mali_1_");
      yolofoT=mapaSvg.select("#yolofo_1_");
      ghanaT=mapaSvg.select("#ghana_1_");
      beninT=mapaSvg.select("#benin_1_");
      konT=mapaSvg.select("#kon_1_");
      zimbaweT=mapaSvg.select("#zimbawe_1_");


      var g = mapaSvg.group(mapa1,mali,yolofo,ghana,benin,kon,zimbawe,maliT,yolofoT,ghanaT,beninT,konT,zimbaweT);
      s.append(g);
      mali.hover( hoveroverM, hoveroutM);
      yolofo.hover( hoveroverY, hoveroutY);
      ghana.hover( hoveroverG, hoveroutG);
      benin.hover( hoveroverB, hoveroutB);
      kon.hover( hoveroverK, hoveroutK);
      zimbawe.hover( hoveroverZ, hoveroutZ);

      mali.click( function clickMali() {
        $("#imperioMali").css("display", "flex");

      });

      yolofo.click( function clickMali() {
        $("#reinoYolofo").css("display", "flex");

      });

      ghana.click( function clickMali() {
        $("#imperioGhana").css("display", "flex");

      });

      benin.click( function clickMali() {
        $("#imperioBeninn").css("display", "flex");

      });

      kon.click( function clickMali() {
        $("#imperioKon").css("display", "flex");

      });

      zimbawe.click( function clickMali() {
        $("#videoZimbaue").css("display", "flex");
        $("#videoZimbaueV")[0].play();
      });


  } );


  var p= Snap("#personajesSvg");
  p.attr({ viewBox: "10 0 950 1000 "});

  var mapa1 = Snap.load('./assets/capitulo1/svg/raizales.svg', function ( loadedFragment ) {

      botones = loadedFragment.select("g");
      personajes = botones.select("#Capa_3");
      ojosCerrados =botones.select("#ojosCerrados");
      ojo1Personaje1 =botones.select("#ojo1Personaje1");
      ojo2Personaje1 =botones.select("#ojo2Personaje1");
      ojo1Personaje2 =botones.select("#ojo1Personaje2");
      ojo2Personaje2 =botones.select("#ojo2Personaje2");

      var g = botones.group(personajes,ojosCerrados,ojo1Personaje1,ojo2Personaje1,ojo1Personaje2,ojo2Personaje2);
      p.append(g);


//ojo personaje 1

            ojo1Personaje1.mover = function(){
              var animating = true;

              function animOn() {
                if( animating ) {
                  ojo1Personaje1.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);

                }
              }
              function animOut() {
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



//ojo personaje 1

            ojo1Personaje2.mover = function(){
                          var animating = true;

                          function animOn() {
                            if( animating ) {
                              ojo1Personaje2.animate({ transform:'s1,0' }, 2000, mina.linear, animOut);

                            }
                          }
                          function animOut() {
                              ojo1Personaje2.animate({transform:'s1,1'}, 4000, mina.linear, animOn);
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
                              ojo2Personaje2.animate({transform:'s1,1'}, 4000, mina.linear, animOn);
                          }

                          animOn();
                        }




      //  ojo1Personaje1.mover();
        ojo2Personaje1.mover();
        ojo1Personaje2.mover();
        ojo2Personaje2.mover();
        ojo1Personaje1.mover();

  } );

var hoveroverM = function() { mali.animate({ transform:'s1.3,1.3' }, 20, mina.bounce); document.getElementById("mapaSvg").style.cursor = "pointer";};
var hoveroutM = function() { mali.animate({ transform:'s1,1' }, 20, mina.bounce ); document.getElementById("mapaSvg").style.cursor = "pointer";};

var hoveroverY = function() { yolofo.animate({ transform:'s1.3,1.3' }, 20, mina.bounce); document.getElementById("mapaSvg").style.cursor = "pointer";};
var hoveroutY = function() { yolofo.animate({ transform:'s1,1' }, 20, mina.bounce ); document.getElementById("mapaSvg").style.cursor = "pointer";};

var hoveroverG = function() { ghana.animate({ transform:'s1.3,1.3' }, 20, mina.bounce); document.getElementById("mapaSvg").style.cursor = "pointer";};
var hoveroutG = function() { ghana.animate({ transform:'s1,1' }, 20, mina.bounce ); document.getElementById("mapaSvg").style.cursor = "pointer";};

var hoveroverB = function() { benin.animate({ transform:'s1.3,1.3' }, 20, mina.bounce); document.getElementById("mapaSvg").style.cursor = "pointer";};
var hoveroutB = function() { benin.animate({ transform:'s1,1' }, 20, mina.bounce ); document.getElementById("mapaSvg").style.cursor = "pointer";};

var hoveroverK = function() { kon.animate({ transform:'s1.3,1.3' }, 20, mina.bounce); document.getElementById("mapaSvg").style.cursor = "pointer";};
var hoveroutK = function() { kon.animate({ transform:'s1,1' }, 20, mina.bounce ); document.getElementById("mapaSvg").style.cursor = "pointer";};

var hoveroverZ = function() { zimbawe.animate({ transform:'s1.3,1.3' }, 20, mina.bounce); document.getElementById("mapaSvg").style.cursor = "pointer";};
var hoveroutZ = function() { zimbawe.animate({ transform:'s1,1' }, 20, mina.bounce ); document.getElementById("mapaSvg").style.cursor = "pointer";};


}
