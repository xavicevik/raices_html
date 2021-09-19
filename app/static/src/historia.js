

$(window).ready(function(){
    drawSvg();
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function drawSvg() {

  var p= Snap("#personajesSvg");
  //var g = s.group();


/*  var ancho = $("#mapaSvg").width();
  var alto = $("#mapaSvg").width();
  console.log(ancho);
  var viewBoxString= "0 0 " + ancho*/
  p.attr({ viewBox: "-10 0 950 700 "});


  var mapa = Snap.load('./assets/historia/svg/Afrocolombianos.svg', function ( loadedFragment ) {

      botones = loadedFragment.select("g");
      personajes = botones.select("#personajes");
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

  } );



}
