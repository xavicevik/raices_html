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
let fondo = PIXI.Sprite.from('../../static/assets/img/fondocapitulo2.png');
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);


const style1 = new PIXI.TextStyle({
    fontFamily: 'Futura',
    fontSize: 25,
    stroke: '#ffffff',
    strokeThickness: 5,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

var tNext = new PIXI.Text("Siguiente", style1);
var tBack = new PIXI.Text("Anterior", style1);
tNext.anchor.set(0.5);
tNext.position.set(widhwindow - 60, 120);
tBack.anchor.set(0.5);
tBack.position.set(60, 120);


let tfondo2 = PIXI.Texture.from('../../static/assets/img/fondo_transparente.png');
var fondotransparente = new PIXI.Sprite(tfondo2);
fondotransparente.width = widhwindow;
fondotransparente.height = heightwindow;
fondotransparente.anchor.set(0.5);
fondotransparente.x = widhwindow / 2;
fondotransparente.y = heightwindow / 2;
app.stage.addChild(fondotransparente);
fondotransparente.visible = false;


// Se cargan los objetos y animaciones
var iTitulo;
var ratioTitulo;
var pPrincipal;
var iMapa;
var nubet;
var rbarca, rtriangulo, resclavos;
let urlsStory;
var bTratanegros, bConsecuencias, bEmbarque, bEsclavitud, bTriangulo, bImagenes;
var eInicio = "inicio";

const loader = new PIXI.Loader();
loader.add('titulo', '../../static/assets/img/titulo.png')
    .add('nube1', '../../static/assets/img/nubet.png')
    .add('barca', '../../static/assets/img/barca.json')
    .add('triangulo', '../../static/assets/img/triangulo.json')
    .add('esclavos', '../../static/assets/img/esclavos.json')
    .add('tImagenes','../../static/assets/img/botones_cap2/Boton_imagenes.png')
    .add('tTratanegros','../../static/assets/img/botones_cap2/Boton_tratanegros.png')
    .add('tConsecuencias','../../static/assets/img/botones_cap2/Boton_consecuencias.png')
    .add('tEmbarque','../../static/assets/img/botones_cap2/Boton_embarque.png')
    .add('tEsclavitud','../../static/assets/img/botones_cap2/Boton_esclavitud.png')
    .add('tTriangulo','../../static/assets/img/botones_cap2/Boton_triangulonegrero.png')
    .add('tInicio1','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05.png')
    .add('tInicio2','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05_Over.png')
    .add('tInicio3','../../static/assets/img/botones_cap5/Boton_Volver_Cap_05.png')
    //.add('nube', '../../static/assets/img/nube.png')
    //.add('capitulo4', '../../static/assets/img/menu/iCapitulo4.png')
    //.add('capitulo5', '../../static/assets/img/menu/iCapitulo5.png')
    //.add('capitulo6', '../../static/assets/img/menu/iCapitulo6.png')
    //.add('bInicio', '../../static/assets/img/botones/inicio.png')
    //.add('bAtras', '../../static/assets/img/botones/atras.png')
    .load(startup);

function startup() {

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

    app.stage.addChild(tBack);
    app.stage.addChild(tNext);

    tNext.visible = false;
    tBack.visible = false;

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
    tInicio1 = loader.resources.tInicio1.texture;
    tInicio2 = loader.resources.tInicio2.texture;
    tInicio3 = loader.resources.tInicio3.texture;
    bMenu = new PIXI.Sprite(tInicio1);
    var ratio = bMenu.width / bMenu.height;
    bMenu.width = 180*widthRelativo;
    bMenu.height = bMenu.width / ratio;
    bMenu.anchor.set(0.5);
    bMenu.x = widhwindow - 150;
    bMenu.y = heightwindow - 60;
    app.stage.addChild(bMenu);

    // Acción de boton
    bMenu.interactive = true;
    bMenu.buttonMode = true;
    bMenu.on('pointerover', onMouseOverInicio);
    bMenu.on('pointerout', onMouseNotOverInicio);
    bMenu.on('pointerdown', onClickMenuInicio);

    // Contenedor del menu
    cMenu = new PIXI.Container;

    // botones del menu
    bTratanegros = new PIXI.Sprite(loader.resources.tTratanegros.texture);
    var ratio = bTratanegros.width / bTratanegros.height;
    bTratanegros.width = 200*widthRelativo;
    bTratanegros.height = bTratanegros.width / ratio;
    bTratanegros.anchor.set(0.5);
    bTratanegros.x = 1;
    bTratanegros.y = 100*heightRelativo;
    cMenu.addChild(bTratanegros);

    bEsclavitud = new PIXI.Sprite(loader.resources.tEsclavitud.texture);
    var ratio = bEsclavitud.width / bEsclavitud.height;
    bEsclavitud.width = 200*widthRelativo;
    bEsclavitud.height = bEsclavitud.width / ratio;
    bEsclavitud.anchor.set(0.5);
    bEsclavitud.x = 1;
    bEsclavitud.y = 200*heightRelativo;
    cMenu.addChild(bEsclavitud);

    bEmbarque = new PIXI.Sprite(loader.resources.tEmbarque.texture);
    var ratio = bEmbarque.width / bEmbarque.height;
    bEmbarque.width = 200*widthRelativo;
    bEmbarque.height = bEmbarque.width / ratio;
    bEmbarque.anchor.set(0.5);
    bEmbarque.x = 1;
    bEmbarque.y = 300*heightRelativo;
    cMenu.addChild(bEmbarque);

    bTriangulo = new PIXI.Sprite(loader.resources.tTriangulo.texture);
    var ratio = bTriangulo.width / bTriangulo.height;
    bTriangulo.width = 220*widthRelativo;
    bTriangulo.height = bTriangulo.width / ratio;
    bTriangulo.anchor.set(0.5);
    bTriangulo.x = widhwindow/2;
    bTriangulo.y = 100*heightRelativo;
    cMenu.addChild(bTriangulo);

    bConsecuencias = new PIXI.Sprite(loader.resources.tConsecuencias.texture);
    var ratio = bConsecuencias.width / bConsecuencias.height;
    bConsecuencias.width = 200*widthRelativo;
    bConsecuencias.height = bConsecuencias.width / ratio;
    bConsecuencias.anchor.set(0.5);
    bConsecuencias.x = widhwindow/2;
    bConsecuencias.y = 200*heightRelativo;
    cMenu.addChild(bConsecuencias);

    bImagenes = new PIXI.Sprite(loader.resources.tImagenes.texture);
    var ratio = bImagenes.width / bImagenes.height;
    bImagenes.width = 200*widthRelativo;
    bImagenes.height = bImagenes.width / ratio;
    bImagenes.anchor.set(0.5);
    bImagenes.x = widhwindow/2;
    bImagenes.y = 300*heightRelativo;
    cMenu.addChild(bImagenes);

    cMenu.x = 200*widthRelativo;
    cMenu.y = 100*heightRelativo;
    app.stage.addChild(cMenu);
    cMenu.visible = false;

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

    // Acción de boton
    bTratanegros.interactive = true;
    bTratanegros.buttonMode = true;
    bTratanegros.on('pointerover', onMouseOverBoton);
    bTratanegros.on('pointerout', onMouseNotOverBoton);
    bTratanegros.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo2/TRATA.pdf", "Trata de Negros", "width=800, height=600"));

    bEsclavitud.interactive = true;
    bEsclavitud.buttonMode = true;
    bEsclavitud.on('pointerover', onMouseOverBoton);
    bEsclavitud.on('pointerout', onMouseNotOverBoton);
    bEsclavitud.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo2/ESCLAVITUD.pdf", "Trata de Negros", "width=800, height=600"));

    bTriangulo.interactive = true;
    bTriangulo.buttonMode = true;
    bTriangulo.on('pointerover', onMouseOverBoton);
    bTriangulo.on('pointerout', onMouseNotOverBoton);
    bTriangulo.on('pointerdown', (event) => onClickOpcion("triangulo"));

    bConsecuencias.interactive = true;
    bConsecuencias.buttonMode = true;
    bConsecuencias.on('pointerover', onMouseOverBoton);
    bConsecuencias.on('pointerout', onMouseNotOverBoton);
    bConsecuencias.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo2/CONSECUENCIAS.pdf", "Consecuencias", "width=800, height=600"));

    bEmbarque.interactive = true;
    bEmbarque.buttonMode = true;
    bEmbarque.on('pointerover', onMouseOverBoton);
    bEmbarque.on('pointerout', onMouseNotOverBoton);
    bEmbarque.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo2/EMBARQUE.pdf", "Embarque", "width=800, height=600"));

    bImagenes.interactive = true;
    bImagenes.buttonMode = true;
    bImagenes.on('pointerover', onMouseOverBoton);
    bImagenes.on('pointerout', onMouseNotOverBoton);
    bImagenes.on('pointerdown', (event) => onClickOpcion("tratanegros"));
}

setup();
function setup(delta) {
    console.log("inicializando");
    app.ticker.add(delta => gameloop(delta));
}

function gameloop(delta) {
    c.update();
}

function onMouseOverInicio() {
    this.texture = tInicio2;
    this.width += 20;
    this.height += 20;
}

function onMouseNotOverInicio() {
/*    if (eInicio == "inicio" || eInicio == "musica_inicio") {
        this.texture = tInicio1;
    } else if (fondoBailes.visible == true || fondoInstrumentos.visible == true ) {
        this.texture = tInicio3;
    }*/
    this.width -= 20;
    this.height -= 20;
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
    window.location.href = url_base + object + "/";
}

function onClickMenuInicio() {
    if (eInicio == "inicio") {
        fondotransparente.visible = true;
        cMenu.visible = true;
        eInicio = "volver";
    } else if (eInicio == "volver") {
        fondotransparente.visible = false;
        cMenu.visible = false;
        eInicio = "inicio";
    } 
}

function onClickStory(object) {
    cMenu.visible = false;
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
                //rbarca.visible = false;
                //fondo.visible = true;
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
                //fondo.visible = true;
                //rbarca.visible = false;
                rtriangulo.visible = true;
                rtriangulo.play();
                //resclavos.visible = 0;
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

function onClickOpcion(object) {
    tNext.visible = true;
    tBack.visible = true;
    fondotransparente.visible = false;
    cMenu.visible = false;
    if (object == "tratanegros") {
        estado = 1;
        fondo.visible = false;
        rbarca.visible = true;
        rbarca.play();
    } else if (object == "esclavitud") {
        estado = 4;
        fondo.visible = false;
        rtriangulo.visible = false;
        rtriangulo.stop();
        resclavos.visible = true;
        resclavos.gotoAndStop(1);
    } else if (object == "embarque") {
        estado = 3;
        fondo.visible = false;
        rtriangulo.visible = false;
        rtriangulo.stop();
        resclavos.visible = true;
        resclavos.gotoAndStop(0);
    } else if (object == "triangulo") {
        estado = 2;
        rtriangulo.visible = true;
        rtriangulo.play();
    }
}