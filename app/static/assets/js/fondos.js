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

// Se crea la aplicación con el tamaño relativo respecto al ancho de la pantalla
var app = new PIXI.Application({width:widhwindow , height:heightwindow});
app.renderer.backgroundColor = 0x061639;
app.renderer.autoRezise = true;
document.getElementById('mainpage').appendChild(app.view);
app.stop();

// Se define elemento de movimiento
var c = new Charm(PIXI);

let fondo = PIXI.Sprite.from('../static/assets/img/fondo.jpg');
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);

// Titulo
app.loader.add('titulo', '../static/assets/img/titulo.png')
    .add('iPergamino', '../static/assets/img/pergamino.png')
    .add('menu1', '../static/assets/images/impBenin.png')
    .add('menu2', '../static/assets/images/impKon.png')
    .add('menu3', '../static/assets/images/impMali.png')
    .add('menu4', '../static/assets/images/impYolofo.png')

    .load(startup);
var iTitulo;
var ratioTitulo;
var menuCapitulos;
var iPergamino;
var ratio;

function startup() {
    iTitulo = PIXI.Sprite.from(app.loader.resources.titulo.texture);
    ratioTitulo = iTitulo.width / iTitulo.height;
    iTitulo.anchor.set(0.5);
    iTitulo.scale.set((800*widthRelativo)/(iTitulo.width));
    iTitulo.position.set(widhwindow / 2, heightwindow / 2)
    app.stage.addChild(iTitulo);

    // Pergamino
    menuCapitulos = new PIXI.Container();
    iPergamino = PIXI.Sprite.from(app.loader.resources.iPergamino.texture);
    ratio = iPergamino.width / iPergamino.height;
    iPergamino.height = heightwindow
    iPergamino.width = iPergamino.height * ratio;
    iPergamino.anchor.set(0.0);
    menuCapitulos.height = iPergamino.height;
    menuCapitulos.width = iPergamino.width;
    menuCapitulos.addChild(iPergamino);

    // Menú principl
    // Menú de capitulos
    var menuCapitulos_opcion1 = PIXI.Sprite.from(app.loader.resources.menu1.texture);
    var menuCapitulos_opcion2 = PIXI.Sprite.from(app.loader.resources.menu2.texture);
    var menuCapitulos_opcion3 = PIXI.Sprite.from(app.loader.resources.menu3.texture);
    var menuCapitulos_opcion4 = PIXI.Sprite.from(app.loader.resources.menu4.texture);
    menuCapitulos_opcion1.scale.set((60*heightRelativo)/menuCapitulos_opcion1.width);
    menuCapitulos_opcion2.scale.set((60*heightRelativo)/menuCapitulos_opcion2.width);
    menuCapitulos_opcion3.scale.set((60*heightRelativo)/menuCapitulos_opcion3.width);
    menuCapitulos_opcion4.scale.set((60*heightRelativo)/menuCapitulos_opcion4.width);

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
    menuCapitulos_opcion1.x = menuCapitulos_opcion2.x = menuCapitulos_opcion3.x = menuCapitulos_opcion4.x = iPergamino.width / 2;
    cap1.x = cap2.x = cap3.x = cap4.x = iPergamino.width / 2;
    cap1.y = step + menuCapitulos_opcion1.height/2;
    cap2.y = step*3 + menuCapitulos_opcion1.height/2;
    cap3.y = step*5 + menuCapitulos_opcion1.height/2;
    cap4.y = step*7 + menuCapitulos_opcion1.height/2;
    menuCapitulos.x = -menuCapitulos.width;
    menuCapitulos.y = 1;
    app.stage.addChild(menuCapitulos);
    //iPergamino.visible = true;

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
    bPergamino.interactive = true;
    bPergamino.buttonMode = true;
    bPergamino.on('pointerover', onMouseOverBoton);
    bPergamino.on('pointerout', onMouseNotOverBoton);
    bPergamino.on('pointerdown', onClick);

    bAdelante.interactive = true;
    bAdelante.buttonMode = true;
    bAdelante.on('pointerover', onMouseOverBoton);
    bAdelante.on('pointerout', onMouseNotOverBoton);
    bAdelante.on('pointerdown', (event) => onClickButton("menu"));
}

setup();
function setup(delta) {
    console.log("inicializando");
    app.start();
    app.ticker.add(delta => gameloop(delta));
}

function gameloop(delta) {
    c.update();
}

function onMouseOverBoton() {
    this.width += 30;
    this.height += 30;
}

function onMouseNotOverBoton(){
    this.width -= 30;
    this.height -= 30;
}

function onClickButton(object) {
    window.location.href = url_base + object;
}

function onClick() {
    //iPergamino.visible = !iPergamino.visible;
    let signo = 1;
    if (menuCapitulos.x == 1) {
        signo = -menuCapitulos.width;
        iTitulo.width = 800*widthRelativo;
        iTitulo.height = iTitulo.width / ratioTitulo;
        iTitulo.anchor.set(0.5);
        iTitulo.x = widhwindow / 2;
        iTitulo.y = heightwindow / 2;
    } else {
        signo = 1;
        iTitulo.width = 600*widthRelativo;
        iTitulo.height = iTitulo.width / ratioTitulo;
        iTitulo.x = menuCapitulos.width + ((widhwindow - menuCapitulos.width )/ 2);
        iTitulo.y = heightwindow / 2;
    }
    c.slide(menuCapitulos, signo, 1, 10, "smoothstep", false);


}