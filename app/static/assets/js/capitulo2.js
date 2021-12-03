usuario = "Javier";
url_base = window.location.origin+"/";

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
let fondo = PIXI.Sprite.from('../static/assets/img/fondocapitulo2.png');
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
var nubet;
var rbarca, rtriangulo, resclavos;
let urlsStory;

const loader = new PIXI.Loader();
loader.add('titulo', '../static/assets/img/titulo.png')
    //.add('personaje', '../static/assets/img/personajes/principal.png')
    .add('nube1', '../static/assets/img/nubet.png')
    .add('barca', '../static/assets/img/barca.json')
    .add('triangulo', '../static/assets/img/triangulo.json')
    .add('esclavos', '../static/assets/img/esclavos.json')
    //.add('nube', '../static/assets/img/nube.png')
    //.add('capitulo4', '../static/assets/img/menu/iCapitulo4.png')
    //.add('capitulo5', '../static/assets/img/menu/iCapitulo5.png')
    //.add('capitulo6', '../static/assets/img/menu/iCapitulo6.png')
    //.add('bInicio', '../static/assets/img/botones/inicio.png')
    //.add('bAtras', '../static/assets/img/botones/atras.png')
    .load(startup);

function startup() {
    /*
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

*/
    // Animación de la barca
    urlsStory = loader.resources.barca.data.url;
    frames = [];
    for (let i = 1; i < 15; i++) {
        frames.push(PIXI.Texture.from(urlsStory[i]));
    }

    rbarca = new PIXI.AnimatedSprite(frames);
    ratioTitulo = rbarca.width / rbarca.height;
    rbarca.anchor.set(0.5);
    rbarca.animationSpeed = 0.3;
    rbarca.height = heightwindow;
    rbarca.width = widhwindow;
    rbarca.position.set(widhwindow / 2, heightwindow / 2);
    rbarca.loop = true;
    rbarca.stop();
    rbarca.visible = false;
    app.stage.addChild(rbarca);

    // Animación del triangulo negrero
    urlsStory = loader.resources.triangulo.data.url;
    frames = [];
    for (let i = 1; i < 11; i++) {
        frames.push(PIXI.Texture.from(urlsStory[i]));
    }
    rtriangulo = new PIXI.AnimatedSprite(frames);
    ratioTitulo = rtriangulo.width / rtriangulo.height;
    rtriangulo.anchor.set(0.5);
    rtriangulo.animationSpeed = 0.1;
    rtriangulo.width = 400*widthRelativo;
    rtriangulo.height = rtriangulo.width/ratioTitulo;
    rtriangulo.position.set(widhwindow / 2, heightwindow / 2);
    rtriangulo.loop = true;
    rtriangulo.stop();
    app.stage.addChild(rtriangulo);
    rtriangulo.visible = false;

    // Animación de esclavos - secuencia
    urlsStory = loader.resources.esclavos.data.url;
    frames = [];
    for (let i = 1; i < 5; i++) {
        frames.push(PIXI.Texture.from(urlsStory[i]));
    }

    resclavos = new PIXI.AnimatedSprite(frames);
    ratioTitulo = resclavos.width / resclavos.height;
    resclavos.anchor.set(0.5);
    resclavos.animationSpeed = 0.3;
    resclavos.height = heightwindow;
    resclavos.width = widhwindow;
    resclavos.position.set(widhwindow / 2, heightwindow / 2);
    resclavos.loop = true;
    resclavos.stop();
    resclavos.visible = false;
    app.stage.addChild(resclavos);

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

    nubet = PIXI.Sprite.from(loader.resources.nube1.texture);
    nubet.scale.set(0.5);
    nubet.x = 70;
    nubet.y = 70;
    app.stage.addChild(nubet);
    c.slide(nubet, widhwindow, 50, 2000, "smoothstep", true);

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

     // Acción de boton
    bAtras.interactive = true;
    bAtras.buttonMode = true;
    bAtras.on('pointerover', onMouseOverBoton);
    bAtras.on('pointerout', onMouseNotOverBoton);
    bAtras.on('pointerdown', (event) => onClickStory("atras"));

     // Acción de boton
    bAdelante.interactive = true;
    bAdelante.buttonMode = true;
    bAdelante.on('pointerover', onMouseOverBoton);
    bAdelante.on('pointerout', onMouseNotOverBoton);
    bAdelante.on('pointerdown', (event) => onClickStory("adelante"));

}

setup();
function setup(delta) {
    console.log("inicializando");
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
    window.location.href = url_base + object;
}

function onClickStory(object) {
    if (object == "adelante") {
        switch (estado) {
            case 0:
                estado = 1;
                fondo.visible = false;
                rbarca.visible = true;
                rbarca.play();
                //capitulo1();
                break;
            case 1:
                estado = 2;
                rbarca.visible = false;
                fondo.visible = true;
                rtriangulo.visible = true;
                rtriangulo.play();
                break;
            case 2:
                estado = 3;
                fondo.visible = false;
                rtriangulo.visible = false;
                rtriangulo.stop();
                resclavos.visible = true;
                resclavos.gotoAndStop(0);
                break;
            case 3:
                estado = 4;
                fondo.visible = false;
                rtriangulo.visible = false;
                rtriangulo.stop();
                resclavos.visible = true;
                resclavos.gotoAndStop(1);
                break;
            case 4:
                estado = 5;
                fondo.visible = false;
                rtriangulo.visible = false;
                rtriangulo.stop();
                resclavos.visible = true;
                resclavos.gotoAndStop(2);
                break;
            case 5:
                estado = 6;
                fondo.visible = false;
                rtriangulo.visible = false;
                rtriangulo.stop();
                resclavos.visible = true;
                resclavos.gotoAndStop(3);
                break;
            default:
                console.log('Today only, 3 + 1 free!!');
        }
    } else if (object == "atras") {
        switch (estado) {
            case 0:
                break;
            case 1:
                estado = 0;
                fondo.visible = true;
                rbarca.visible = false;
                rtriangulo.visible = false;
                rbarca.play();
                break;
            case 2:
                estado = 1;
                fondo.visible = false;
                rbarca.visible = true;
                rtriangulo.visible = false;
                rbarca.play();
                resclavos.visible = 0;
                break;
            case 3:
                estado = 2;
                fondo.visible = true;
                rbarca.visible = false;
                rtriangulo.visible = true;
                rtriangulo.play();
                resclavos.visible = 0;
                break;
            case 4:
                estado = 3;
                fondo.visible = false;
                rtriangulo.visible = false;
                rtriangulo.stop();
                resclavos.visible = true;
                resclavos.gotoAndStop(0);
                break;
            case 5:
                estado = 4;
                fondo.visible = false;
                rtriangulo.visible = false;
                rtriangulo.stop();
                resclavos.visible = true;
                resclavos.gotoAndStop(1);
                break;
            case 6:
                estado = 5;
                fondo.visible = false;
                rtriangulo.visible = false;
                rtriangulo.stop();
                resclavos.visible = true;
                resclavos.gotoAndStop(2);
                break;
            default:
                console.log('Today only, 3 + 1 free!!');
        }
    }
}