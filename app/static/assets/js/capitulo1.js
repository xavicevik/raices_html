usuario = "Javier";
url_base = window.location.origin+"/";

// Definición de variables
const aspecCanvas = innerWidth / innerHeight;
const aspectRatio = 16/9;
if (aspecCanvas > 1.5) {
    var heightwindow = innerHeight - 80;
    var widhwindow = aspectRatio * heightwindow;
} else {
    var widhwindow = innerWidth;
    var heightwindow = (widhwindow/aspectRatio) - 80;
}
var resolucionx = 1000;
var resoluciony = resolucionx/aspectRatio;
var widthRelativo = widhwindow/resolucionx;
var heightRelativo = heightwindow/resoluciony;
var timeInterval = 0;
var iLoading;

const style2 = new PIXI.TextStyle({
    fontFamily: 'Verdana',
    fontSize: 20,
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

// Se crea la aplicación con el tamaño relativo respecto al ancho de la pantalla
var app = new PIXI.Application({width:widhwindow , height:heightwindow});
app.renderer.backgroundColor = 0x061639;
app.renderer.autoRezise = true;
document.getElementById('mainpage').appendChild(app.view);
//app.start();

// Se define elemento de movimiento
var c = new Charm(PIXI);
// Se define el fondo de los capítulos

let fondo = PIXI.Sprite.from('../static/assets/img/fondo_.png');
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);
fondo.visible = false;

/*
iLoading = PIXI.Sprite.from('../static/assets/images/impBenin.png');
iLoading.anchor.set(0.5);
iLoading.scale.set(0.5);
iLoading.x = widhwindow / 2;
iLoading.y = heightwindow / 2;
app.stage.addChild(iLoading);
var tLoading = new PIXI.Text('Loading...');
tLoading.anchor.set(0.5);
tLoading.x = widhwindow / 2;
tLoading.y = (heightwindow / 2) +150;
app.stage.addChild(tLoading);
*/
// Se cargan los objetos y animaciones
var iTitulo;
var ratioTitulo;
var pPrincipal;
var iMapa;
var rStory1;
var frames;
var iPergamino;
var menuCapitulos;
var ratio;

const loader = new PIXI.Loader();
loader.add('titulo', '../static/assets/img/titulo.png')
    .add('personaje', '../static/assets/img/personajes/principal.png')
    .add('mapa', '../static/assets/img/mapa1.png')
    .add('nube', '../static/assets/img/nube.png')
    .add('story1', '../static/assets/img/prueba.json')
    .add('iPergamino', '../static/assets/img/pergamino.png')
    //.add('capitulo4', '../static/assets/img/menu/iCapitulo4.png')
    //.add('capitulo5', '../static/assets/img/menu/iCapitulo5.png')
    //.add('capitulo6', '../static/assets/img/menu/iCapitulo6.png')
    //.add('bInicio', '../static/assets/img/botones/inicio.png')
    //.add('bAtras', '../static/assets/img/botones/atras.png')
    .load(startup);

loader.onProgress.add(() => loading());

function loading() {

}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function startup() {
    console.log("ruta: "+ loader.resources.story1.data.url);
    let urlsStory = loader.resources.story1.data.url;
    frames = [];
    for (let i = 1; i < 13; i++) {
        //const val = i < 10 ? `0${i}` : i;
        //console.log(urlsStory[i]);
        frames.push(PIXI.Texture.from(urlsStory[i]));
    }

    rStory1 = new PIXI.AnimatedSprite(frames);
    rStory1.onComplete = function () {
        console.log("termino load Storyboard");
        //console.log(rStory1.currentFrame);
        //window.location.href = url_base + "menu";
    };
    ratioTitulo = rStory1.width / rStory1.height;
    rStory1.anchor.set(0.5);
    rStory1.animationSpeed = 0.01;
    rStory1.height = heightwindow;
    rStory1.width = widhwindow;
    rStory1.position.set(widhwindow / 2, heightwindow / 2);
    rStory1.loop = false;
    rStory1.stop();
    app.stage.addChild(rStory1);

    menuCapitulos = new PIXI.Container();
    iPergamino = PIXI.Sprite.from(loader.resources.iPergamino.texture);
    ratio = iPergamino.width / iPergamino.height;
    iPergamino.height = heightwindow
    iPergamino.width = iPergamino.height * ratio;
    iPergamino.anchor.set(0.0);
    menuCapitulos.height = iPergamino.height;
    menuCapitulos.width = iPergamino.width;
    menuCapitulos.addChild(iPergamino);
    menuCapitulos.x = 1;
    menuCapitulos.y = 1;
    app.stage.addChild(menuCapitulos);




    pPrincipal = PIXI.Sprite.from(loader.resources.personaje.texture);
    ratioTitulo = pPrincipal.width / pPrincipal.height;
    pPrincipal.anchor.set(0.5);
    pPrincipal.scale.set((300*widthRelativo)/(pPrincipal.width));
    pPrincipal.position.set(200*widthRelativo, heightwindow / 2);
    app.stage.addChild(pPrincipal);
    pPrincipal.visible = false;

    iMapa = PIXI.Sprite.from(loader.resources.mapa.texture);
    ratioTitulo = iMapa.width / iMapa.height;
    iMapa.anchor.set(0.5);
    iMapa.scale.set((500*widthRelativo)/(iMapa.width));
    iMapa.position.set(700*widthRelativo, heightwindow / 2);
    app.stage.addChild(iMapa);
    iMapa.visible = false;

    // boton inicio
    var bInicio = PIXI.Sprite.from('../static/assets/img/botones/inicio.png');
    var ratio = bInicio.width / bInicio.height;
    bInicio.width = 70*widthRelativo;
    bInicio.height = bInicio.width / ratio;
    bInicio.anchor.set(0.5);
    bInicio.x = 60;
    bInicio.y = heightwindow - 60;
    app.stage.addChild(bInicio);

    // boton volver
    var bAtras = PIXI.Sprite.from('../static/assets/img/botones/atras.png');
    var ratio = bAtras.width / bAtras.height;
    bAtras.width = 70*widthRelativo;
    bAtras.height = bAtras.width / ratio;
    bAtras.anchor.set(0.5);
    bAtras.x = 60;
    bAtras.y = 60;
    app.stage.addChild(bAtras);

    // boton adelante
    var bAdelante = PIXI.Sprite.from('../static/assets/img/botones/adelante.png');
    var ratio = bAdelante.width / bAdelante.height;
    bAdelante.width = 70*widthRelativo;
    bAdelante.height = bAdelante.width / ratio;
    bAdelante.anchor.set(0.5);
    bAdelante.x = widhwindow - 60;
    bAdelante.y = 60;
    app.stage.addChild(bAdelante);

    // boton menu
    var bMenu = PIXI.Sprite.from('../static/assets/img/botones/menu.png');
    var ratio = bMenu.width / bMenu.height;
    bMenu.width = 70*widthRelativo;
    bMenu.height = bMenu.width / ratio;
    bMenu.anchor.set(0.5);
    bMenu.x = widhwindow - 60;
    bMenu.y = heightwindow - 60;
    app.stage.addChild(bMenu);

    // boton pergamino
    var bPergamino = PIXI.Sprite.from('../static/assets/img/botones/pergamino.png');
    var ratio = bPergamino.width / bPergamino.height;
    bPergamino.width = 70*widthRelativo;
    bPergamino.height = bPergamino.width / ratio;
    bPergamino.anchor.set(0.5);
    bPergamino.x = widhwindow /2;
    bPergamino.y = heightwindow - 60;
    app.stage.addChild(bPergamino);

    // Acción de boton
    bInicio.interactive = true;
    bInicio.buttonMode = true;
    bInicio.on('pointerover', onMouseOverBoton);
    bInicio.on('pointerout', onMouseNotOverBoton);
    bInicio.on('pointerdown', (event) => onClickMenuCapitulo("menu"));

    bAdelante.interactive = true;
    bAdelante.buttonMode = true;
    bAdelante.on('pointerover', onMouseOverBoton);
    bAdelante.on('pointerout', onMouseNotOverBoton);
    bAdelante.on('pointerdown', (event) => onClickStory("adelante"));

    bAtras.interactive = true;
    bAtras.buttonMode = true;
    bAtras.on('pointerover', onMouseOverBoton);
    bAtras.on('pointerout', onMouseNotOverBoton);
    bAtras.on('pointerdown', (event) => onClickStory("atras"));

}

function capitulo1() {
    fondo.visible = true;
    pPrincipal.visible = true;
}

function onMouseOverBoton() {
    this.width += 30;
    this.height += 30;
}

function onMouseNotOverBoton(){
    this.width -= 30;
    this.height -= 30;
}

function onClickMenuCapitulo(object) {
    window.location.href = url_base + object;
}

function onClickStory(object) {
    //console.log(rStory1.currentFrame + 1);
    if (object == "adelante") {
        if (rStory1.currentFrame < 11) {
            rStory1.gotoAndStop(rStory1.currentFrame + 1);
        } else {
            app.stage.removeChild(rStory1);
            app.stage.removeChild(menuCapitulos);
            capitulo1();
        }
    } else {
        if (rStory1.currentFrame != 0) {
            rStory1.gotoAndStop(rStory1.currentFrame - 1);
        }
    }
}