usuario = "Javier";
url_base = window.location.href+"../";

// Definición de variables
var estado = 0;
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
var nube1;
var bAdelantep, bAtrasp;

const style2 = new PIXI.TextStyle({
    fontFamily: 'Futura',
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

const style1 = new PIXI.TextStyle({
    fontFamily: 'Futura',
    fontSize: 20,
    //fontStyle: 'italic',
    //fontWeight: 'bold',
    stroke: '#ffffff',
    strokeThickness: 5,
    //dropShadow: true,
    //dropShadowColor: '#000000',
    //dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

const style3 = new PIXI.TextStyle({
    fontFamily: 'Futura',
    fontSize: 50,
    //fontStyle: 'italic',
    //fontWeight: 'bold',
    stroke: '#ffffff',
    strokeThickness: 5,
    //dropShadow: true,
    //dropShadowColor: '#000000',
    //dropShadowBlur: 4,
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

var fondo = PIXI.Sprite.from('../../static/assets/img/fondocapitulo1.png');
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);
fondo.visible = false;

var ifondoMapa;

var itextoInicio, rtMansaMunsa;

// Se cargan los objetos y animaciones
//var iTitulo;
var ratioTitulo;
var pPrincipal;
var iMapa;
var rStory1, rKeita, rVideointro, rpersonajes;
var frames;
var iPergamino;
var menuCapitulos;
var ratio;
var bpdf, bpersonajes, iMansaMunsa;
var iTextoPersonajes;
var tMansaMunsa;
var bIBenin, bIGhana, bIMali, bIKong, bIGranz, bImperios;
var personajesjson;


const loader = new PIXI.Loader();
loader.add('titulo', '../../static/assets/img/titulo.png')
    .add('mapa', '../../static/assets/img/mapa1.png')
    .add('nube', '../../static/assets/img/nube.png')
    .add('story1', '../../static/assets/img/storycapitulo1.json')
    .add('keita', '../../static/assets/img/storycapituloKeita.json')
    .add('videointro', '../../static/assets/img/storyintro.json')
    .add('iPergamino', '../../static/assets/img/pergamino.png')
    .add('pdf', '../../static/assets/img/pdf.png')
    .add('personajes', '../../static/assets/img/personajes/personajesf.png')
    .add('mansamunsa', '../../static/assets/img/personajes/Mansa_Musa_TQ_Reposo_01b.png')
    .add('fondoMapa', '../../static/assets/img/fondomapa.jpg')
    .add('textoInicio', '../../static/assets/img/textoInicio.png')
    .add('tMansaMunsa', '../../static/assets/img/rtmansamunsa.png')
    .add('tIBenin','../../static/assets/img/botones_cap1/Boton_benin.png')
    .add('tIGhana','../../static/assets/img/botones_cap1/Boton_ghana.png')
    .add('tIMali','../../static/assets/img/botones_cap1/Boton_mali.png')
    .add('tIKong','../../static/assets/img/botones_cap1/Boton_kong.png')
    .add('tIGranz','../../static/assets/img/botones_cap1/Boton_granzimbawe.png')
    .add('tImperios','../../static/assets/img/botones_cap1/Boton_imperiosyreinos.png')
    .add('personajesjson', '../../static/assets/img/personajesjson.json')

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
    for (let i = 1; i < 24; i++) {
        frames.push(PIXI.Texture.from(urlsStory[i]));
    }

    rStory1 = new PIXI.AnimatedSprite(frames);
    rStory1.onComplete = function () {
        console.log("Termino load Storyboard");
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

    let urlsKeita = loader.resources.keita.data.url;
    frames = [];
    for (let i = 1; i < 14; i++) {
        frames.push(PIXI.Texture.from(urlsKeita[i]));
    }

    keita = new PIXI.AnimatedSprite(frames);
    keita.onComplete = function () {
        console.log("Termino load keita");
    };
    ratioTitulo = keita.width / keita.height;
    keita.anchor.set(0.5);
    keita.animationSpeed = 0.5;
    keita.height = heightwindow;
    keita.width = widhwindow;
    keita.position.set(widhwindow / 2, heightwindow / 2);
    keita.loop = false;
    keita.stop();
    keita.visible = false;
    app.stage.addChild(keita);

    let urlsVideoIntro = loader.resources.videointro.data.url;
    frames = [];
    for (let i = 1; i < 121; i+=1) {
        frames.push(PIXI.Texture.from(urlsVideoIntro[i]));
    }

    rVideointro = new PIXI.AnimatedSprite(frames);
    rVideointro.onComplete = function () {
        console.log("Termino load rVideointro "+rStory1.currentFrame);
        rStory1.gotoAndStop(1);
        rVideointro.visible = false;
    };

    ratioTitulo = rVideointro.width / rVideointro.height;
    rVideointro.anchor.set(0.5);
    rVideointro.animationSpeed = 0.2;
    rVideointro.height = heightwindow;
    rVideointro.width = widhwindow;
    rVideointro.position.set(widhwindow / 2, heightwindow / 2);
    rVideointro.loop = false;
    rVideointro.visible = true;
    rVideointro.stop();
    //rVideointro.play();
    app.stage.addChild(rVideointro);

    menuCapitulos = new PIXI.Container();
    iPergamino = PIXI.Sprite.from(loader.resources.iPergamino.texture);
    ratio = iPergamino.width / iPergamino.height;
    iPergamino.height = heightwindow
    iPergamino.width = iPergamino.height * ratio;
    iPergamino.anchor.set(0.0);
    menuCapitulos.height = iPergamino.height;
    menuCapitulos.width = iPergamino.width;
    //menuCapitulos.addChild(iPergamino);
    menuCapitulos.x = 1;
    menuCapitulos.y = 1;
    app.stage.addChild(menuCapitulos);

    iMapa = PIXI.Sprite.from(loader.resources.mapa.texture);
    ratioTitulo = iMapa.width / iMapa.height;
    iMapa.anchor.set(0.5);
    iMapa.scale.set((500*widthRelativo)/(iMapa.width));
    iMapa.position.set(700*widthRelativo, heightwindow / 2);
    app.stage.addChild(iMapa);
    iMapa.visible = false;

    ifondoMapa = PIXI.Sprite.from(loader.resources.fondoMapa.texture);
    ifondoMapa.scale.set((widhwindow/ifondoMapa.width));
    ifondoMapa.anchor.set(0.5);
    ifondoMapa.x = widhwindow / 2;
    ifondoMapa.y = heightwindow / 2;
    app.stage.addChild(ifondoMapa);
    ifondoMapa.visible = false;

    itextoInicio = PIXI.Sprite.from(loader.resources.textoInicio.texture);
    itextoInicio.scale.set((420*widthRelativo)/(itextoInicio.width));
    itextoInicio.anchor.set(0.5);
    itextoInicio.x = widhwindow / 2;
    itextoInicio.y = heightwindow / 2;
    app.stage.addChild(itextoInicio);
    itextoInicio.visible = false;

    
    rtMansaMunsa = PIXI.Sprite.from(loader.resources.tMansaMunsa.texture);
    rtMansaMunsa.anchor.set(0);
    rtMansaMunsa.scale.set((180*heightRelativo)/(rtMansaMunsa.height));
    rtMansaMunsa.position.set(410*widthRelativo, 220*heightRelativo);


    urlsStory = loader.resources.personajesjson.data.url;
    frames = [];
    for (let i = 1; i < 5; i++) {
        frames.push(PIXI.Texture.from(urlsStory[i]));
    }

    rpersonajes = new PIXI.AnimatedSprite(frames);
    rpersonajes.anchor.set(0.5);
    rpersonajes.animationSpeed = 0.01;
    rpersonajes.scale.set((180*heightRelativo)/(rtMansaMunsa.height));
    rpersonajes.position.set(widhwindow/2, heightwindow/2 + 25*heightRelativo);
    rpersonajes.loop = true;
    rpersonajes.stop();
    rpersonajes.visible = false;
    app.stage.addChild(rpersonajes);

    // boton pdf
    bpdf = PIXI.Sprite.from(loader.resources.pdf.texture);
    ratioTitulo = bpdf.width / bpdf.height;
    bpdf.scale.set((100*widthRelativo)/(bpdf.width));
    bpdf.anchor.set(0.5);
    bpdf.x = 730*widthRelativo;
    bpdf.y = 450*heightRelativo;
    app.stage.addChild(bpdf);
    bpdf.visible = false;

    // boton de personajes
    bpersonajes = PIXI.Sprite.from(loader.resources.personajes.texture);
    ratioTitulo = bpersonajes.width / bpersonajes.height;
    bpersonajes.anchor.set(0.5);
    bpersonajes.scale.set((130*widthRelativo)/(bpersonajes.width));
    bpersonajes.position.set(100*widthRelativo, 130*heightRelativo);
    app.stage.addChild(bpersonajes);
    bpersonajes.visible = false;

    // boton inicio
    var bInicio = PIXI.Sprite.from('../../static/assets/img/botones/inicio.png');
    var ratio = bInicio.width / bInicio.height;
    bInicio.width = 70*widthRelativo;
    bInicio.height = bInicio.width / ratio;
    bInicio.anchor.set(0.5);
    bInicio.x = 60;
    bInicio.y = heightwindow - 60;
    app.stage.addChild(bInicio);

    // boton volver
    var bAtras = PIXI.Sprite.from('../../static/assets/img/botones/atras.png');
    var ratio = bAtras.width / bAtras.height;
    bAtras.width = 70*widthRelativo;
    bAtras.height = bAtras.width / ratio;
    bAtras.anchor.set(0.5);
    bAtras.x = 60;
    bAtras.y = 60;
    app.stage.addChild(bAtras);

    // boton adelante
    var bAdelante = PIXI.Sprite.from('../../static/assets/img/botones/adelante.png');
    var ratio = bAdelante.width / bAdelante.height;
    bAdelante.width = 70*widthRelativo;
    bAdelante.height = bAdelante.width / ratio;
    bAdelante.anchor.set(0.5);
    bAdelante.x = widhwindow - 60;
    bAdelante.y = 60;
    app.stage.addChild(bAdelante);

    // boton menu
    var bMenu = PIXI.Sprite.from('../../static/assets/img/botones/menu.png');
    var ratio = bMenu.width / bMenu.height;
    bMenu.width = 70*widthRelativo;
    bMenu.height = bMenu.width / ratio;
    bMenu.anchor.set(0.5);
    bMenu.x = widhwindow - 60;
    bMenu.y = heightwindow - 60;
    app.stage.addChild(bMenu);

    // boton pergamino
    var bPergamino = PIXI.Sprite.from('../../static/assets/img/botones/pergamino.png');
    var ratio = bPergamino.width / bPergamino.height;
    bPergamino.width = 70*widthRelativo;
    bPergamino.height = bPergamino.width / ratio;
    bPergamino.anchor.set(0.5);
    bPergamino.x = widhwindow /2;
    bPergamino.y = heightwindow - 60;
    app.stage.addChild(bPergamino);

    // Contenedor del menu
    cMenu = new PIXI.Container;

    // botones del menu
    bIBenin = new PIXI.Sprite(loader.resources.tIBenin.texture);
    var ratio = bIBenin.width / bIBenin.height;
    bIBenin.width = 130*widthRelativo;
    bIBenin.height = bIBenin.width / ratio;
    bIBenin.anchor.set(0.5);
    bIBenin.x = 620*widthRelativo;
    bIBenin.y = 300*heightRelativo;
    cMenu.addChild(bIBenin);

    bIGhana = new PIXI.Sprite(loader.resources.tIGhana.texture);
    var ratio = bIGhana.width / bIGhana.height;
    bIGhana.width = 150*widthRelativo;
    bIGhana.height = bIGhana.width / ratio;
    bIGhana.anchor.set(0.5);
    bIGhana.x = 480*widthRelativo;
    bIGhana.y = 415*heightRelativo;
    cMenu.addChild(bIGhana);

    bIGranz = new PIXI.Sprite(loader.resources.tIGranz.texture);
    var ratio = bIGranz.width / bIGranz.height;
    bIGranz.width = 150*widthRelativo;
    bIGranz.height = bIGranz.width / ratio;
    bIGranz.anchor.set(0.5);
    bIGranz.x = 880*widthRelativo;
    bIGranz.y = 260*heightRelativo;
    cMenu.addChild(bIGranz);

    bImperios = new PIXI.Sprite(loader.resources.tImperios.texture);
    var ratio = bImperios.width / bImperios.height;
    bImperios.width = 150*widthRelativo;
    bImperios.height = bImperios.width / ratio;
    bImperios.anchor.set(0.5);
    bImperios.x = 190*widthRelativo;
    bImperios.y = 430*heightRelativo;
    cMenu.addChild(bImperios);

    bIKong = new PIXI.Sprite(loader.resources.tIKong.texture);
    var ratio = bIKong.width / bIKong.height;
    bIKong.width = 150*widthRelativo;
    bIKong.height = bIKong.width / ratio;
    bIKong.anchor.set(0.5);
    bIKong.x = 810*widthRelativo;
    bIKong.y = 450*heightRelativo;
    cMenu.addChild(bIKong);

    bIMali = new PIXI.Sprite(loader.resources.tIMali.texture);
    var ratio = bIMali.width / bIMali.height;
    bIMali.width = 150*widthRelativo;
    bIMali.height = bIMali.width / ratio;
    bIMali.anchor.set(0.5);
    bIMali.x = 390*widthRelativo;
    bIMali.y = 145*heightRelativo;
    cMenu.addChild(bIMali);

    cMenu.x = 1;
    cMenu.y = 1;
    app.stage.addChild(cMenu);
    cMenu.visible = false;


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

    bPergamino.interactive = true;
    bPergamino.buttonMode = true;
    bPergamino.on('pointerover', onMouseOverBoton);
    bPergamino.on('pointerout', onMouseNotOverBoton);
    bPergamino.on('pointerdown', (event) => onClickStory("saltar"));

    // Acción de boton
    bpersonajes.interactive = true;
    bpersonajes.buttonMode = true;
    bpersonajes.on('pointerover', onMouseOverBoton);
    bpersonajes.on('pointerout', onMouseNotOverBoton);
    bpersonajes.on('pointerdown', (event) => onClickStory("adelante"));

    // Acción de boton
    bpdf.interactive = true;
    bpdf.buttonMode = true;
    bpdf.on('pointerover', onMouseOverBoton);
    bpdf.on('pointerout', onMouseNotOverBoton);
    bpdf.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo1.pdf", "Capitulo 1", "width=800, height=600"));

    nube1 = PIXI.Sprite.from('../../static/assets/img/nube.png');
    nube1.scale.set(0.3);
    nube1.x = 50;
    nube1.y = 50;
    app.stage.addChild(nube1);
    nube1.visible = false;
    c.slide(nube1, widhwindow, 50, 2000, "smoothstep", true);

    // Acciones botones imperios
    bImperios.interactive = true;
    bImperios.buttonMode = true;
    bImperios.on('pointerover', onMouseOverBoton);
    bImperios.on('pointerout', onMouseNotOverBoton);
    bImperios.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo1/IMPERIOS_Y_REINOS.pdf", "", "width=800, height=600"));

    bIMali.interactive = true;
    bIMali.buttonMode = true;
    bIMali.on('pointerover', onMouseOverBoton);
    bIMali.on('pointerout', onMouseNotOverBoton);
    bIMali.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo1/IMPERIO_DE_MALI.pdf", "", "width=800, height=600"));

    bIGhana.interactive = true;
    bIGhana.buttonMode = true;
    bIGhana.on('pointerover', onMouseOverBoton);
    bIGhana.on('pointerout', onMouseNotOverBoton);
    bIGhana.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo1/IMPERIO_DE_GHANA.pdf", "", "width=800, height=600"));

    bIBenin.interactive = true;
    bIBenin.buttonMode = true;
    bIBenin.on('pointerover', onMouseOverBoton);
    bIBenin.on('pointerout', onMouseNotOverBoton);
    bIBenin.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo1/IMPERIO_DE_BENIN.pdf", "", "width=800, height=600"));

    bIKong.interactive = true;
    bIKong.buttonMode = true;
    bIKong.on('pointerover', onMouseOverBoton);
    bIKong.on('pointerout', onMouseNotOverBoton);
    bIKong.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo1/IMPERIO_DE_KONG.pdf", "", "width=800, height=600"));

    bIGranz.interactive = true;
    bIGranz.buttonMode = true;
    bIGranz.on('pointerover', onMouseOverBoton);
    bIGranz.on('pointerout', onMouseNotOverBoton);
    bIGranz.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo1/GRAN_ZIMBABWE.pdf", "", "width=800, height=600"));



}

loader.onComplete.add(() => {
    console.log("Terminado el loader");
    //rVideointro.play();
});


setup();
function setup(delta) {
    console.log("inicializando");
    app.ticker.add(delta => gameloop(delta));
}

function gameloop(delta) {
    c.update();
}

function capitulo1() {
    fondo.visible = true;
    itextoInicio.visible = true;
    bpdf.visible = true;

}

function capitulo11() {
    fondo.visible = false;
    itextoInicio.visible = false;
    bpdf.visible = false;
    ifondoMapa.visible = true;
    bpersonajes.visible = true;
    cMenu.visible = true;

    iTextoPersonajes = new PIXI.Text("Personajes", style1);
    iTextoPersonajes.position.set(bpersonajes.x - bpersonajes.x/2, bpersonajes.y + bpersonajes.height/2);
    app.stage.addChild(iTextoPersonajes);
}

function capitulo12() {
    ifondoMapa.visible = false;
    cMenu.visible = false;
    bpersonajes.visible = false;
    iTextoPersonajes.visible = false;
    fondo.visible = true;
    //rtMansaMunsa.visible = true;
    rpersonajes.visible = true;

    // Mansa Munsa
    /*
    iMansaMunsa = PIXI.Sprite.from(loader.resources.mansamunsa.texture);
    ratioTitulo = iMansaMunsa.width / iMansaMunsa.height;
    iMansaMunsa.anchor.set(0);
    iMansaMunsa.scale.set((380*heightRelativo)/(iMansaMunsa.height));
    iMansaMunsa.position.set(220*widthRelativo, 130*heightRelativo);
    app.stage.addChild(iMansaMunsa);
    tMansaMunsa = new PIXI.Text("Mansa Munsa", style3);
    tMansaMunsa.position.set(450*widthRelativo, 130*heightRelativo);
    */
    //app.stage.addChild(tMansaMunsa);
    bpdf.visible = true;
    //bpdf.x = 580*widthRelativo;
    //bpdf.y = 400*heightRelativo;

    // boton adelante
    bAdelantep = PIXI.Sprite.from('../../static/assets/img/botones/adelante.png');
    ratio = bAdelantep.width / bAdelantep.height;
    bAdelantep.width = 40*widthRelativo;
    bAdelantep.height = bAdelantep.width / ratio;
    bAdelantep.anchor.set(0.5);
    bAdelantep.x = 820 * widthRelativo;
    bAdelantep.y = heightwindow / 2;

    bAtrasp = PIXI.Sprite.from('../../static/assets/img/botones/atras.png');
    ratio = bAtrasp.width / bAtrasp.height;
    bAtrasp.width = 40*widthRelativo;
    bAtrasp.height = bAtrasp.width / ratio;
    bAtrasp.anchor.set(0.5);
    bAtrasp.x = 220 * widthRelativo;
    bAtrasp.y = heightwindow / 2;
    app.stage.addChild(bAtrasp);
    app.stage.addChild(bAdelantep);

     // Acción de boton
    bAtrasp.interactive = true;
    bAtrasp.buttonMode = true;
    bAtrasp.on('pointerover', onMouseOverBoton);
    bAtrasp.on('pointerout', onMouseNotOverBoton);
    bAtrasp.on('pointerdown', (event) => onClickPersonajes("atras"));

     // Acción de boton
    bAdelantep.interactive = true;
    bAdelantep.buttonMode = true;
    bAdelantep.on('pointerover', onMouseOverBoton);
    bAdelantep.on('pointerout', onMouseNotOverBoton);
    bAdelantep.on('pointerdown', (event) => onClickPersonajes("adelante"));

    bpdf.on('pointerdown', onClickOpenPdf);
}

function onClickOpenPdf() {
    let nombrearchivo = 'personaje_0'+ rpersonajes.currentFrame + '.pdf';
    window.open("../../static/assets/src/capitulo1/" + nombrearchivo, "Capitulo 1", "width=800, height=600");

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
    window.location.href = url_base + object + '/';
}

function onClickPersonajes(object) {
    if (object == "adelante") {
        rpersonajes.gotoAndStop(rpersonajes.currentFrame + 1);
    } else {
        if (object == 'atras') {
            rpersonajes.gotoAndStop(rpersonajes.currentFrame - 1);
        }
    }
}

function onClickStory(object) {
    //console.log(rStory1.currentFrame + 1);
    if (object == "saltar") {
        console.log("saltar");
        estado = 1;
        rVideointro.stop();
        rStory1.gotoAndStop(22);
        app.stage.removeChild(rStory1);
        app.stage.removeChild(rVideointro);
        app.stage.removeChild(rKeita);
        app.stage.removeChild(menuCapitulos);
        capitulo1();
    } else {
        if (object == "adelante") {
            if (rVideointro.currentFrame == 0) {
                rVideointro.play();
            } else {
                if (rStory1.currentFrame < 22) {
                    rStory1.gotoAndStop(rStory1.currentFrame + 1);
                } else {
                    switch (estado) {
                        case 0:
                            estado = 1;
                            app.stage.removeChild(rStory1);
                            app.stage.removeChild(menuCapitulos);
                            capitulo1();
                            break;
                        case 1:
                            estado = 11;
                            capitulo11();
                            console.log('Cap11');
                            break;
                        case 11:
                            estado = 12;
                            capitulo12();
                            console.log('Cap12');
                            break;
                        default:
                            console.log('Today only, 3 + 1 free!!');
                    }
                }
            }
        } else {
            if (rStory1.currentFrame != 0) {
                rStory1.gotoAndStop(rStory1.currentFrame - 1);
            }
        }
        if (rStory1.currentFrame == 1 || rStory1.currentFrame == 2 || rStory1.currentFrame == 11
            || rStory1.currentFrame == 12 || rStory1.currentFrame == 12 || rStory1.currentFrame == 13) {
            nube1.visible = true;
        } else {
            nube1.visible = false;
        }
        if (rStory1.currentFrame == 3 || rStory1.currentFrame == 4 || rStory1.currentFrame == 5) {
            if (rStory1.currentFrame == 3) {
                keita.visible = true;
                keita.gotoAndStop(0);
            }
            if (rStory1.currentFrame == 4) {
                keita.visible = true;
                keita.gotoAndPlay(0);
            }
            if (rStory1.currentFrame == 5) {
                keita.visible = true;
                keita.gotoAndStop(12);
            }
        } else {
            keita.visible = false;
            keita.stop();
        }

        if (rStory1.currentFrame == 0) {
            rVideointro.visible = true;
            rVideointro.gotoAndPlay(0);
        } else {
            rVideointro.visible = false;
            rVideointro.stop();
        }
    }
}