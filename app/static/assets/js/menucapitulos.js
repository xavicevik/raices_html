usuario = "Javier";
url_base = window.location.href+"../";

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
    fontFamily: 'Futura',
    fontSize: 18,
    //fontStyle: 'italic',
    //fontWeight: 'bold',
    stroke: '#ffffff',
    //strokeThickness: 5,
    //dropShadow: true,
    //dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    align: "center",
    //wordWrap: true,
    //wordWrapWidth: 440,
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
// Se define el fondo de los capítulos
let fondo = PIXI.Sprite.from('../../static/assets/img/Mundos_01c.png');
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);

// Se cargan los objetos y animaciones
//var iTitulo;
var ratioTitulo;
var iPergamino;
var ratio;
var iCapitulo1, iCapitulo2, iCapitulo3, iCapitulo4, iCapitulo5, iCapitulo6;
var bInicio, bAtras;

app.loader.add('titulo', '../../static/assets/img/titulo.png')
    .add('capitulo1', '../../static/assets/img/menu/iCapitulo1.png')
    .add('capitulo2', '../../static/assets/img/menu/iCapitulo2.png')
    .add('capitulo3', '../../static/assets/img/menu/iCapitulo3.png')
    .add('capitulo4', '../../static/assets/img/menu/iCapitulo4.png')
    .add('capitulo5', '../../static/assets/img/menu/iCapitulo5.png')
    .add('capitulo6', '../../static/assets/img/menu/iCapitulo6.png')
    .add('bInicio', '../../static/assets/img/botones/inicio.png')
    .add('bAtras', '../../static/assets/img/botones/atras.png')
    .load(startup);

function startup() {

    // Menú principl
    // Menú de capitulos
    iCapitulo1 = PIXI.Sprite.from(app.loader.resources.capitulo1.texture);
    iCapitulo2 = PIXI.Sprite.from(app.loader.resources.capitulo2.texture);
    iCapitulo3 = PIXI.Sprite.from(app.loader.resources.capitulo3.texture);
    iCapitulo4 = PIXI.Sprite.from(app.loader.resources.capitulo4.texture);
    iCapitulo5 = PIXI.Sprite.from(app.loader.resources.capitulo5.texture);
    iCapitulo6 = PIXI.Sprite.from(app.loader.resources.capitulo6.texture);

    iCapitulo1.scale.set((140*heightRelativo)/iCapitulo1.width);
    iCapitulo2.scale.set((140*heightRelativo)/iCapitulo2.width);
    iCapitulo3.scale.set((140*heightRelativo)/iCapitulo3.width);
    iCapitulo4.scale.set((140*heightRelativo)/iCapitulo4.width);
    iCapitulo5.scale.set((140*heightRelativo)/iCapitulo5.width);
    iCapitulo6.scale.set((140*heightRelativo)/iCapitulo6.width);

    // Acciones de botón
    iCapitulo1.interactive = true;
    iCapitulo1.buttonMode = true;
    iCapitulo1.on('pointerover', onMouseOverBoton);
    iCapitulo1.on('pointerout', onMouseNotOverBoton);
    iCapitulo1.on('pointerdown', (event) => onClickMenuCapitulo("capitulo1"))
    iCapitulo2.interactive = true;
    iCapitulo2.buttonMode = true;
    iCapitulo2.on('pointerover', onMouseOverBoton);
    iCapitulo2.on('pointerout', onMouseNotOverBoton);
    iCapitulo2.on('pointerdown', (event) => onClickMenuCapitulo("capitulo2"))
    iCapitulo3.interactive = true;
    iCapitulo3.buttonMode = true;
    iCapitulo3.on('pointerover', onMouseOverBoton);
    iCapitulo3.on('pointerout', onMouseNotOverBoton);
    iCapitulo3.on('pointerdown', (event) => onClickMenuCapitulo("capitulo3"))
    iCapitulo4.interactive = true;
    iCapitulo4.buttonMode = true;
    iCapitulo4.on('pointerover', onMouseOverBoton);
    iCapitulo4.on('pointerout', onMouseNotOverBoton);
    iCapitulo4.on('pointerdown', (event) => onClickMenuCapitulo("capitulo4"))
    iCapitulo5.interactive = true;
    iCapitulo5.buttonMode = true;
    iCapitulo5.on('pointerover', onMouseOverBoton);
    iCapitulo5.on('pointerout', onMouseNotOverBoton);
    iCapitulo5.on('pointerdown', (event) => onClickMenuCapitulo("capitulo5"))
    iCapitulo6.interactive = true;
    iCapitulo6.buttonMode = true;
    iCapitulo6.on('pointerover', onMouseOverBoton);
    iCapitulo6.on('pointerout', onMouseNotOverBoton);
    iCapitulo6.on('pointerdown', (event) => onClickMenuCapitulo("capitulo6"))

    iCapitulo1.anchor.set(0.5);
    iCapitulo2.anchor.set(0.5);
    iCapitulo3.anchor.set(0.5);
    iCapitulo4.anchor.set(0.5);
    iCapitulo5.anchor.set(0.5);
    iCapitulo6.anchor.set(0.5);
    iCapitulo1.x = 130*widthRelativo;
    iCapitulo1.y = 330*heightRelativo;
    iCapitulo2.x = 283*widthRelativo;
    iCapitulo2.y = 165*heightRelativo;
    iCapitulo3.x = 455*widthRelativo;
    iCapitulo3.y = 439*heightRelativo;
    iCapitulo4.x = 610*widthRelativo;
    iCapitulo4.y = 132*heightRelativo;
    iCapitulo5.x = 765*widthRelativo;
    iCapitulo5.y = 377*heightRelativo;
    iCapitulo6.x = 900*widthRelativo;
    iCapitulo6.y = 147*heightRelativo;

    const sbCap1 = new PIXI.Text('Africa Tierra Imperial', style2);
    const sbCap2 = new PIXI.Text('Llegada a America', style2);
    const sbCap3 = new PIXI.Text('Actividades económicas y sociales', style2);
    const sbCap4 = new PIXI.Text('Camino a la libertad', style2);
    const sbCap5 = new PIXI.Text('Cultura Afro', style2);
    const sbCap6 = new PIXI.Text('Emprendimiento', style2);
    sbCap1.anchor.set(0.5);
    sbCap2.anchor.set(0.5);
    sbCap3.anchor.set(0.5);
    sbCap4.anchor.set(0.5);
    sbCap5.anchor.set(0.5);
    sbCap6.anchor.set(0.5);
    //sbCap1.scale.set((150*heightRelativo)/sbCap1.width);
    sbCap1.x = 130*widthRelativo;
    sbCap1.y = 395*heightRelativo;
    //sbCap2.scale.set((150*heightRelativo)/sbCap2.width);
    sbCap2.x = 281*widthRelativo;
    sbCap2.y = 233*heightRelativo;
    //sbCap3.scale.set((150*heightRelativo)/sbCap3.width);
    sbCap3.x = 439*widthRelativo;
    sbCap3.y = 502*heightRelativo;
    //sbCap4.scale.set((150*heightRelativo)/sbCap4.width);
    sbCap4.x = 604*widthRelativo;
    sbCap4.y = 200*heightRelativo;
    //sbCap5.scale.set((150*heightRelativo)/sbCap5.width);
    sbCap5.x = 761*widthRelativo;
    sbCap5.y = 432*heightRelativo;
    //sbCap6.scale.set((150*heightRelativo)/sbCap6.width);
    sbCap6.x = 900*widthRelativo;
    sbCap6.y = 210*heightRelativo;

    app.stage.addChild(iCapitulo1);
    app.stage.addChild(iCapitulo2);
    app.stage.addChild(iCapitulo3);
    app.stage.addChild(iCapitulo4);
    app.stage.addChild(iCapitulo5);
    app.stage.addChild(iCapitulo6);

    app.stage.addChild(sbCap1);
    app.stage.addChild(sbCap2);
    app.stage.addChild(sbCap3);
    app.stage.addChild(sbCap4);
    app.stage.addChild(sbCap5);
    app.stage.addChild(sbCap6);


    // boton inicio
    bInicio = PIXI.Sprite.from(app.loader.resources.bInicio.texture);
    ratio = bInicio.width / bInicio.height;
    bInicio.width = 70*widthRelativo;
    bInicio.height = bInicio.width / ratio;
    bInicio.anchor.set(0.5);
    bInicio.x = 60;
    bInicio.y = heightwindow - 60;
    app.stage.addChild(bInicio);

    // boton volver
    bAtras = PIXI.Sprite.from(app.loader.resources.bAtras.texture);
    ratio = bAtras.width / bAtras.height;
    bAtras.width = 70*widthRelativo;
    bAtras.height = bAtras.width / ratio;
    bAtras.anchor.set(0.5);
    bAtras.x = 60;
    bAtras.y = 60;
    //app.stage.addChild(bAtras);

    // boton adelante
    var bAdelante = PIXI.Sprite.from('../../static/assets/img/botones/adelante.png');
    var ratio = bAdelante.width / bAdelante.height;
    bAdelante.width = 70*widthRelativo;
    bAdelante.height = bAdelante.width / ratio;
    bAdelante.anchor.set(0.5);
    bAdelante.x = widhwindow - 60;
    bAdelante.y = 60;
    //app.stage.addChild(bAdelante);

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

function onClickMenuCapitulo(object) {
    window.location.href = url_base + object + '/';
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