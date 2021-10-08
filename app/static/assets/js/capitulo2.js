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
let fondo = PIXI.Sprite.from('../static/assets/img/fondooriginal.jpeg');
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);


// Se cargan los objetos y animaciones
var iTitulo;
var ratioTitulo;
var pPrincipal;
var iMapa;


app.loader.add('titulo', '../static/assets/img/titulo.png')
    .add('personaje', '../static/assets/img/personajes/principal.png')
    .add('mapa', '../static/assets/img/mapa1.png')
    .add('nube', '../static/assets/img/nube.png')
    //.add('capitulo4', '../static/assets/img/menu/iCapitulo4.png')
    //.add('capitulo5', '../static/assets/img/menu/iCapitulo5.png')
    //.add('capitulo6', '../static/assets/img/menu/iCapitulo6.png')
    //.add('bInicio', '../static/assets/img/botones/inicio.png')
    //.add('bAtras', '../static/assets/img/botones/atras.png')
    .load(startup);

function startup() {
    pPrincipal = PIXI.Sprite.from(app.loader.resources.personaje.texture);
    ratioTitulo = pPrincipal.width / pPrincipal.height;
    pPrincipal.anchor.set(0.5);
    pPrincipal.scale.set((300*widthRelativo)/(pPrincipal.width));
    pPrincipal.position.set(200*widthRelativo, heightwindow / 2);
    app.stage.addChild(pPrincipal);

    iMapa = PIXI.Sprite.from(app.loader.resources.mapa.texture);
    ratioTitulo = iMapa.width / iMapa.height;
    iMapa.anchor.set(0.5);
    iMapa.scale.set((500*widthRelativo)/(iMapa.width));
    iMapa.position.set(700*widthRelativo, heightwindow / 2);
    app.stage.addChild(iMapa);

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
    bInicio.on('pointerdown', (event) => onClickMenuCapitulo("menu"))

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