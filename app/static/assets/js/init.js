
// That's default v4 vertex shader, just in case
const myVertex = `
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void) {
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}
`;

const myFragment = `
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 inputSize;
uniform vec4 outputFrame;
uniform vec2 shadowDirection;
uniform float floorY;

void main(void) {
    //1. get the screen coordinate
    vec2 screenCoord = vTextureCoord * inputSize.xy + outputFrame.xy;
    //2. calculate Y shift of our dimension vector
    vec2 shadow;
    //shadow coordinate system is a bit skewed, but it has to be the same for screenCoord.y = floorY
    float paramY = (screenCoord.y - floorY) / shadowDirection.y;
    shadow.y = paramY + floorY;
    shadow.x = screenCoord.x + paramY * shadowDirection.x;
    vec2 bodyFilterCoord = (shadow - outputFrame.xy) * inputSize.zw; // same as / inputSize.xy

    vec4 originalColor = texture2D(uSampler, vTextureCoord);
    vec4 shadowColor = texture2D(uSampler, bodyFilterCoord);
    shadowColor.rgb = vec3(0.0);
    shadowColor.a *= 0.5;

    // normal blend mode coefficients (1, 1-src_alpha)
    // shadow is destination (backdrop), original is source
    gl_FragColor = originalColor + shadowColor * (1.0 - originalColor.a);
}
`;
var usuario;
/*
var url_base = "http://127.0.0.1:8000/";
var url = url_base + "users/1/";
var data;
$.ajax({
  dataType: "json",
  url: url,
  data: data,
  async: false,
  success: function(data) {
        $.each(data, function (key, val) {
            if (key == 'first_name') {
                usuario = val;
                //return false;
            }

            if (key == 'last_name') {
                usuario = usuario + " " + val;
                //return false;
            }

        });
  }
});
*/
usuario = "Javier";

console.log(usuario);
// Definición de variables
const aspectRatio = 2;//16/9;
var widhwindow = window.innerWidth;
var heightwindow = widhwindow/aspectRatio;
var resolucionx = 1000;
var resoluciony = resolucionx/aspectRatio;
var widthRelativo = widhwindow/resolucionx;
var heightRelativo = heightwindow/resoluciony;
var timeInterval = 0;

// Se crea la aplicación con el tamaño relativo respecto al ancho de la pantalla
var app = new PIXI.Application({width:widhwindow , height:heightwindow});
app.renderer.backgroundColor = 0x061639;
app.renderer.autoRezise = true;
document.getElementById('mainpage').appendChild(app.view); 

// Se define elemento de movimiento
let c = new Charm(PIXI);


//var animatioloop = new PIXI.AnimationLoop(app);
//animatioloop.speed = 2;
//animatioloop.start();

// Se incluye el fondo
//let fondo = PIXI.Sprite.from('assets/img/fondo.png');
let fondo = PIXI.Sprite.from('../static/assets/img/fondooriginal.jpeg');
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);

// Se crea el personaje principal
let pPrincipal = PIXI.Sprite.from('../static/assets/img/personajes/principal.png');
var ratio = pPrincipal.width / pPrincipal.height;
pPrincipal.width = 250*widthRelativo;
pPrincipal.height = pPrincipal.width / ratio;
pPrincipal.x = 166*widthRelativo;
pPrincipal.y = 200*heightRelativo;

// Se crea un contenedor para lo correspondiente con el personaje principal
const perContainer = new PIXI.Container(); 
perContainer.addChild(pPrincipal);

let bocaAnimacion = ['../static/assets/img/personajes/boca_1.png', '../static/assets/img/personajes/boca_2.png'];
let texturaArray = [];

for (let i = 0; i < 2; i++) {
    let textura = PIXI.Texture.from(bocaAnimacion[i]);
    texturaArray.push(textura);
}
let animatedBoca = new PIXI.AnimatedSprite(texturaArray);

ratio = animatedBoca.width / animatedBoca.height;
animatedBoca.width = pPrincipal.width/ 8;
animatedBoca.height = animatedBoca.width / ratio;
animatedBoca.x = pPrincipal.x + pPrincipal.x / 3.1;
animatedBoca.y = pPrincipal.y + pPrincipal.y / 2.6;
animatedBoca.animationSpeed = 2.1;

let ojosA = PIXI.Texture.from('../static/assets/img/personajes/ojosopen.png');
let ojosC = PIXI.Texture.from('../static/assets/img/personajes/ojosclose.png');
let ojos = ['../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosopen.png',
            '../static/assets/img/personajes/ojosclose.png',
            '../static/assets/img/personajes/ojosopen.png'];
let texturaArray2 = [];

for (let i = 0; i < ojos.length; i++) {
    let textura = PIXI.Texture.from(ojos[i]);
    texturaArray2.push(textura);
}
var ojosAni = new PIXI.AnimatedSprite(texturaArray2);

ratio = ojosAni.width / ojosAni.height;
ojosAni.width = pPrincipal.width/ 5.1;
ojosAni.height = ojosAni.width / ratio;
ojosAni.x = pPrincipal.x + pPrincipal.x / 3.8;
ojosAni.y = pPrincipal.y + pPrincipal.y / 4.2;
ojosAni.animationSpeed = 0.2;
ojosAni.loop = true;

pPrincipal.interactive = true;
pPrincipal.buttonMode = true;

var tclick = false;
pPrincipal.on('pointerdown', onClick);

perContainer.addChild(animatedBoca);
perContainer.addChild(ojosAni);

app.stage.addChild(perContainer);

const sound = PIXI.sound.Sound.from('../static/assets/cancion/2.mp3');


ojosAni.play();
//animatedBoca.play();


let nube1 = PIXI.Sprite.from('../static/assets/img/nube.png');
nube1.scale.set(0.3);
nube1.x = 50;
nube1.y = 50;
app.stage.addChild(nube1);
c.slide(nube1, widhwindow, 50, 4000, "smoothstep", true);

let nube2 = PIXI.Sprite.from('../static/assets/img/nube.png');
nube2.scale.set(0.2);
nube2.x = widhwindow -100;
nube2.y = 100*widthRelativo;
app.stage.addChild(nube2);
c.slide(nube2, 1, 100*widthRelativo, 2000, "smoothstep", false);

let nube3 = PIXI.Sprite.from('../static/assets/img/nube.png');
nube3.scale.set(0.1);
nube3.x = 300;
nube3.y = 150;
app.stage.addChild(nube3);
c.slide(nube3, widhwindow, 150*widthRelativo, 9000, "smoothstep", true);

const style = new PIXI.TextStyle({
    fontFamily: 'Verdana',
    fontSize: 34*widthRelativo,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

const richText = new PIXI.Text('Raices AfroColombianas', style);
let logoRA = PIXI.Sprite.from('../static/assets/images/botones/iconoAfrotic.png');

ratio = logoRA.width / logoRA.height;
logoRA.width = 100*widthRelativo;
logoRA.height = logoRA.width/ratio;

const nameappcontainer = new PIXI.Container();
nameappcontainer.addChild(logoRA);
nameappcontainer.addChild(richText);
richText.x = nameappcontainer.x + 120*widthRelativo;
nameappcontainer.x = 1
nameappcontainer.y = 80*heightRelativo;
app.stage.addChild(nameappcontainer);
c.slide(nameappcontainer, 250*widthRelativo, 80*heightRelativo, 60);

let globoMensaje = PIXI.Sprite.from('../static/assets/img/globo.png');
ratio = globoMensaje.width/globoMensaje.height;
globoMensaje.width = 120*widthRelativo;
globoMensaje.height = globoMensaje.width/ratio;
let globoContainer = new PIXI.Container();

globoContainer.addChild(globoMensaje);
globoContainer.x = 80*widthRelativo;
globoContainer.y = 150*heightRelativo;

const style2 = new PIXI.TextStyle({
    fontFamily: 'Verdana',
    fontSize: 14*widthRelativo,
    fontStyle: 'italic',
    fontWeight: 'bold',
    stroke: '#ffffff',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});
const globoTxt = new PIXI.Text('Hola \n'+usuario, style2);

globoContainer.addChild(globoTxt);
globoTxt.anchor.set(0.5);
globoTxt.x = globoMensaje.width / 2;
globoTxt.y = 100*heightRelativo - globoMensaje.height / 2;
app.stage.addChild(globoContainer);
globoContainer.visible = false;

const mapa1container = new PIXI.Container();
let mapa1 = PIXI.Sprite.from('../static/assets/img/mapa1.png');
ratio = mapa1.width / mapa1.height;
mapa1.width = 600*widthRelativo;
mapa1.height = mapa1.width / ratio;
mapa1container.addChild(mapa1);
mapa1container.x = 400*widthRelativo;
mapa1container.y = 30*heightRelativo;

let hist1t = PIXI.Texture.from('../static/assets/img/historia.png');
let hist2t = PIXI.Texture.from('../static/assets/img/historia2.png');
var historia = new PIXI.Sprite(hist1t);
historia.scale.set(0.2);
historia.x = 400;
historia.y = 350;
historia.interactive = true;
historia.buttonMode = true;
historia.on('pointerover', onMouseOverHistoria);
historia.on('pointerout', onMouseNotOverHistoria)
mapa1container.addChild(historia);

app.stage.addChild(mapa1container);

// Menú de capitulos
const menuCapitulos = new PIXI.Container();
var menuCapitulos_opcion1 = PIXI.Sprite.from('../static/assets/images/impBenin.png');
var menuCapitulos_opcion2 = PIXI.Sprite.from('../static/assets/images/impKon.png');
var menuCapitulos_opcion3 = PIXI.Sprite.from('../static/assets/images/impMali.png');
var menuCapitulos_opcion4 = PIXI.Sprite.from('../static/assets/images/impYolofo.png');

ratio = menuCapitulos_opcion1.width / menuCapitulos_opcion1.height;
menuCapitulos_opcion1.height = 80*heightRelativo;
menuCapitulos_opcion1.width  = menuCapitulos_opcion1.height *ratio;
ratio = menuCapitulos_opcion2.width / menuCapitulos_opcion2.height;
menuCapitulos_opcion2.height = 80*heightRelativo;
menuCapitulos_opcion2.width  = menuCapitulos_opcion2.height *ratio;
ratio = menuCapitulos_opcion3.width / menuCapitulos_opcion3.height;
menuCapitulos_opcion3.height = 80*heightRelativo;
menuCapitulos_opcion3.width  = menuCapitulos_opcion3.height *ratio;
ratio = menuCapitulos_opcion4.width / menuCapitulos_opcion4.height;
menuCapitulos_opcion4.height = 40*heightRelativo;
menuCapitulos_opcion4.width  = menuCapitulos_opcion4.height *ratio;
menuCapitulos_opcion1.interactive = true;
menuCapitulos_opcion1.buttonMode = true;
menuCapitulos_opcion1.on('pointerover', (event) => onMouseOverMenuCapitulo(menuCapitulos_opcion1));
menuCapitulos_opcion1.on('pointerout', (event) => onMouseNotOverMenuCapitulo(menuCapitulos_opcion1))
menuCapitulos_opcion1.on('pointerdown', (event) => onClickMenuCapitulo("capitulo1"))
menuCapitulos_opcion2.interactive = true;
menuCapitulos_opcion2.buttonMode = true;
menuCapitulos_opcion2.on('pointerover', (event) => onMouseOverMenuCapitulo(menuCapitulos_opcion2));
menuCapitulos_opcion2.on('pointerout', (event) => onMouseNotOverMenuCapitulo(menuCapitulos_opcion2))
menuCapitulos_opcion2.on('pointerdown', (event) => onClickMenuCapitulo("capitulo2"))
menuCapitulos_opcion3.interactive = true;
menuCapitulos_opcion3.buttonMode = true;
menuCapitulos_opcion3.on('pointerover', (event) => onMouseOverMenuCapitulo(menuCapitulos_opcion3));
menuCapitulos_opcion3.on('pointerout', (event) => onMouseNotOverMenuCapitulo(menuCapitulos_opcion3))
menuCapitulos_opcion3.on('pointerdown', (event) => onClickMenuCapitulo("capitulo3"))
menuCapitulos_opcion4.interactive = true;
menuCapitulos_opcion4.buttonMode = true;
menuCapitulos_opcion4.on('pointerover', (event) => onMouseOverMenuCapitulo(menuCapitulos_opcion4));
menuCapitulos_opcion4.on('pointerout', (event) => onMouseNotOverMenuCapitulo(menuCapitulos_opcion4))
menuCapitulos_opcion4.on('pointerdown', (event) => onClickMenuCapitulo("capitulo4"))
const cap1 = new PIXI.Text('Capitulo 1', style2);
cap1.anchor.set(0.5);
const cap2 = new PIXI.Text('Capitulo 2', style2);
cap2.anchor.set(0.5);
const cap3 = new PIXI.Text('Capitulo 3', style2);
cap3.anchor.set(0.5);
const cap4 = new PIXI.Text('Capitulo 4', style2);
cap4.anchor.set(0.5);
menuCapitulos.addChild(menuCapitulos_opcion1);
menuCapitulos.addChild(menuCapitulos_opcion2);
menuCapitulos.addChild(menuCapitulos_opcion3);
menuCapitulos.addChild(menuCapitulos_opcion4);
menuCapitulos.addChild(cap1);
menuCapitulos.addChild(cap2);
menuCapitulos.addChild(cap3);
menuCapitulos.addChild(cap4);
menuCapitulos_opcion1.anchor.set(0.5);
menuCapitulos_opcion2.anchor.set(0.5);
menuCapitulos_opcion3.anchor.set(0.5);
menuCapitulos_opcion4.anchor.set(0.5);
let step = (500*heightRelativo) / 8;
menuCapitulos_opcion1.y = step;
menuCapitulos_opcion2.y = step*3;
menuCapitulos_opcion3.y = step*5;
menuCapitulos_opcion4.y = step*7;
cap1.y = step + menuCapitulos_opcion1.height/2;
cap2.y = step*3 + menuCapitulos_opcion1.height/2;
cap3.y = step*5 + menuCapitulos_opcion1.height/2;
cap4.y = step*7 + menuCapitulos_opcion1.height/2;
menuCapitulos.x = 50*widthRelativo;
menuCapitulos.y = 2*heightRelativo;
app.stage.addChild(menuCapitulos);

// filtros de sombra
const filter = new PIXI.Filter(myVertex, myFragment);
// first is the horizontal shift, positive is to the right
// second is the same as scaleY
filter.uniforms.shadowDirection = [0.4, 0.5];
filter.uniforms.floorY = 0.0;
// how big is max shadow shift to the side?
// try to switch that off ;)
filter.padding = 100;

pPrincipal.filters = [filter];

// sprite

var anim;
/*
app.loader
    .add('../static/assets/images/chica_prueba.json')
    .load(onAssetsLoaded);

function onAssetsLoaded() {
    const frames = [];

    // create an array of textures from an image path
    for (let i = 1; i < 10; i++) {
        //const val = i < 10 ? `0${i}` : i;
        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.from(`Chica000${i}.png`));
        //frames.push(PIXI.Texture.from(`rollSequence00${val}.png`));
    }
    anim = new PIXI.AnimatedSprite(frames);
    app.stage.addChild(anim);
    anim.scale.set(0.5);
    anim.animationSpeed = 0.2;
    anim.x = pPrincipal.x - 100;
    anim.y = pPrincipal.y;
    anim.loop = true;

    anim.onComplete = function () {
        console.log("complete");
        //window.location.href = url_base + "capitulo1";
    };
}
*/
// sprite Sofia
var sofia;
app.loader
    .add('sofia','../static/assets/images/mina.json')
    .add('chica', '../static/assets/images/chica_prueba.json')
    .load(onAssetsLoaded2);

function onAssetsLoaded2() {
    let frames = [];
    let sofiaspr = app.loader.resources.sofia;
    let chicaspr = app.loader.resources.chica;

    // create an array of textures from an image path
    for (let i = 1; i < 49; i++) {
        const val = i < 10 ? `0${i}` : i;
        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.from(`Sofia_TQ_Tiras_Camina_Parpadea00${val}.png`));
        //frames.push(PIXI.Texture.from(`rollSequence00${val}.png`));
    }
    sofia = new PIXI.AnimatedSprite(frames);
    app.stage.addChild(sofia);
    sofia.scale.set(1);
    sofia.animationSpeed = 0.2;
    sofia.x = pPrincipal.x - 100;
    sofia.y = pPrincipal.y;
    sofia.loop = true;
    sofia.play();
    c.slide(sofia, widhwindow, sofia.y, 500, "smoothstep", true);


    frames = [];
    for (let i = 1; i < 10; i++) {
        frames.push(PIXI.Texture.from(`Chica000${i}.png`));
    }
    anim = new PIXI.AnimatedSprite(frames);
    app.stage.addChild(anim);
    anim.scale.set(0.5);
    anim.animationSpeed = 0.2;
    anim.x = pPrincipal.x - 100;
    anim.y = pPrincipal.y;
    anim.loop = true;

    sofia.onComplete = function () {
        console.log("complete sofia");
        //window.location.href = url_base + "capitulo1";
    };
}

// Fin de la creaciòn de objetos Setup
setup();
function setup(delta) {
    console.log("inicializando");
    window.addEventListener('resize', resize);
    resize();
    filter.uniforms.floorY = pPrincipal.y + pPrincipal.height;
    app.ticker.add(delta => gameloop(delta));
}

function gameloop(delta) {
    c.update();
}

function animate(){
    requestAnimationFrame(animate); //Ejecutamos RAF dentro del loop
    wait(200);
    ojosAni.texture = ojosC;
    console.log(2);
    ojosAni.texture = ojosA;
}

//animate();

/*
app.ticker.add((delta) => {
    //ojosAni.play();
    //wait(1000*delta);
});

ojosAni.play();

ojosAni.onComplete = function () {
    this.play();
    wait(2000);
  };

function ojosComplete() {
    this.play();
    wait(2000);
  };


function onButtonUp() {
    this.texture = ojosC;

    // Set timeout to change the texture back to idle after 3 seconds
    gooseTimeout = setTimeout(function(ojosSprite) {
        // Change the texture to gooseIdle
        ojosSprite.texture = ojosA;
    }, 3000, this);
}
*/


// Resize function window
function resize() {
    if (window.innerWidth / window.innerHeight >= aspectRatio) {
        var w = window.innerHeight * aspectRatio;
        var h = window.innerHeight;
    } else {
        var w = window.innerWidth;
        var h = window.innerWidth / aspectRatio;
    }
    app.view.style.width = w + 'px';
    app.view.style.height = h + 'px';
    app.resize(w,h);
    widhwindow = window.innerWidth;
    heightwindow = widhwindow/aspectRatio;
    resoluciony = resolucionx/aspectRatio;
    widthRelativo = widhwindow/resolucionx;
    heightRelativo = heightwindow/resoluciony;
}





function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function onMouseOverHistoria() {
    this.texture = hist2t;
    this.width += 30;
    this.height += 30;
}

function onMouseNotOverHistoria(){
    this.texture = hist1t;
    this.width -= 30;
    this.height -= 30;
}

function onMouseOverMenuCapitulo(object) {
    object.width += 30;
    object.height += 30;
}

function onClickMenuCapitulo(object) {
    //anim.play();
    window.location.href = url_base + object;
}

function onMouseNotOverMenuCapitulo(object){
    object.width -= 30;
    object.height -= 30;
}

function onClick() {
    if (tclick == true) {
        animatedBoca.stop();
        anim.stop();
        sound.stop();
        globoContainer.visible = false;
        tclick = false;
    } else {
        animatedBoca.play();
        anim.play();
        sound.play();
        globoContainer.visible = true;
        tclick = true;
    }
}

function reSizeAspect(x, y, newx) {
    var rat = x / y;
    return newx / rat;
}
