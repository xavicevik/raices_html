usuario = "Javier";

console.log(usuario);
// Definición de variables
const aspecCanvas = innerWidth / innerHeight;
console.log(aspecCanvas);
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
var iTitulo = PIXI.Sprite.from('../static/assets/img/titulo.png');
var ratioTitulo = iTitulo.width / iTitulo.height;
//iTitulo.width = 800*widthRelativo;
//iTitulo.height = iTitulo.width / ratioTitulo;
iTitulo.scale.set((800*widthRelativo)/(iTitulo.width));
console.log(iTitulo.width+","+iTitulo.height);
iTitulo.anchor.set(0.5);
iTitulo.position.set(widhwindow / 2, heightwindow / 2)
app.stage.addChild(iTitulo);

// Pergamino
var iPergamino = PIXI.Sprite.from('../static/assets/img/pergamino.png');
var ratio = iPergamino.width / iPergamino.height;
iPergamino.height = heightwindow
iPergamino.width = iPergamino.height * ratio;
iPergamino.anchor.set(0.0);
iPergamino.x = -iPergamino.width;
iPergamino.y = 1;
app.stage.addChild(iPergamino);
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

function onClick() {
    //iPergamino.visible = !iPergamino.visible;
    let signo = 1;
    if (iPergamino.x == 1) {
        signo = -iPergamino.width;
        iTitulo.width = 800*widthRelativo;
        iTitulo.height = iTitulo.width / ratioTitulo;
        iTitulo.anchor.set(0.5);
        iTitulo.x = widhwindow / 2;
        iTitulo.y = heightwindow / 2;
    } else {
        signo = 1;
        iTitulo.width = 600*widthRelativo;
        iTitulo.height = iTitulo.width / ratioTitulo;
        iTitulo.x = iPergamino.width + ((widhwindow - iPergamino.width )/ 2);
        iTitulo.y = heightwindow / 2;
    }
    c.slide(iPergamino, signo, 1, 10, "smoothstep", false);


}