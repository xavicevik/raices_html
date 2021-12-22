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
let tfondo1 = PIXI.Texture.from('../../static/assets/img/fondocapitulo6.png');
var fondo = new PIXI.Sprite(tfondo1);
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);

let tfondo2 = PIXI.Texture.from('../../static/assets/img/fondo_transparente.png');
var fondotransparente = new PIXI.Sprite(tfondo2);
fondotransparente.width = widhwindow;
fondotransparente.height = heightwindow;
fondotransparente.anchor.set(0.5);
fondotransparente.x = widhwindow / 2;
fondotransparente.y = heightwindow / 2;
app.stage.addChild(fondotransparente);
fondotransparente.visible = false;


// Fondo musica
var fondoMusica = new PIXI.Sprite.from('../../static/assets/img/fondo_musica.png');
fondoMusica.width = widhwindow;
fondoMusica.height = heightwindow;
fondoMusica.anchor.set(0.5);
fondoMusica.x = widhwindow / 2;
fondoMusica.y = heightwindow / 2;
app.stage.addChild(fondoMusica);
fondoMusica.visible = false;

// Fondo Bailes
var fondoBailes = new PIXI.Sprite.from('../../static/assets/img/bailes.png');
fondoBailes.width = widhwindow;
fondoBailes.height = heightwindow;
fondoBailes.anchor.set(0.5);
fondoBailes.x = widhwindow / 2;
fondoBailes.y = heightwindow / 2;
app.stage.addChild(fondoBailes);
fondoBailes.visible = false;

// Fondo musica
var fondoInstrumentos = new PIXI.Sprite.from('../../static/assets/img/instrumentosm.png');
fondoInstrumentos.width = widhwindow;
fondoInstrumentos.height = heightwindow;
fondoInstrumentos.anchor.set(0.5);
fondoInstrumentos.x = widhwindow / 2;
fondoInstrumentos.y = heightwindow / 2;
app.stage.addChild(fondoInstrumentos);
fondoInstrumentos.visible = false;


// Se cargan los objetos y animaciones
var iTitulo;
var ratioTitulo;
var pPrincipal;
var iMapa;
var bMenu;
var tInicio1, tInicio2, tInicio3;
var bEsocial, bEcreativo, bMusica, bArte, bVestu, bInstrumentos, bBailes;
var tPersonajes1, tPersonajes2, tGastro1, tGastro2, tMusica1, tMusica2, tArte1, tArte2, tVestu1, tVestu2, tfondoM1, tfondoM2;
var cMenu;
var iNota;
var eInicio = "inicio";
var urlsStory;
var rCreativo, rSocial;

const loader = new PIXI.Loader();
loader.add('titulo', '../../static/assets/img/titulo.png')
    .add('tInicio1','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05.png')
    .add('tInicio2','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05_Over.png')
    .add('tInicio3','../../static/assets/img/botones_cap5/Boton_Volver_Cap_05.png')
    .add('tEsocial','../../static/assets/img/botones_cap6/Boton_social.png')
    .add('tEcreativo','../../static/assets/img/botones_cap6/Boton_creativo.png')
    .add('tMusica1','../../static/assets/img/botones_cap5/Boton_Musica_Cap_05.png')
    .add('tMusica2','../../static/assets/img/botones_cap5/Boton_Musica_Cap_05_Over.png')
    .add('tArte1','../../static/assets/img/botones_cap5/Boton_Arte_Afro_Cap_05.png')
    .add('tArte2','../../static/assets/img/botones_cap5/Boton_Arte_Afro_Cap_05_Over.png')
    .add('tVestu1','../../static/assets/img/botones_cap5/Boton_Vestuario_Cap_05.png')
    .add('tVestu2','../../static/assets/img/botones_cap5/Boton_Vestuario_Cap_05_Over.png')
    .add('notaM', '../../static/assets/img/notas_musical.png')
    .add('mapa', '../../static/assets/img/mapa1.png')
    .add('instrumentos', '../../static/assets/img/botones_cap5/Boton_Instrumentos_Cap05.png')
    .add('bailes', '../../static/assets/img/botones_cap5/Boton_Bailes_Cap05.png')
    .add('tCreativo', '../../static/assets/img/emprendimientocreativo.json')
    .add('tSocial', '../../static/assets/img/emprendimientosocial.json')
    //.add('bInicio', '../../static/assets/img/botones/inicio.png')
    //.add('bAtras', '../../static/assets/img/botones/atras.png')
    .load(startup);

function startup() {
    urlsStory = loader.resources.tCreativo.data.url;
    frames = [];
    for (let i = 1; i < 11; i++) {
        frames.push(PIXI.Texture.from(urlsStory[i]));
    }

    rCreativo = new PIXI.AnimatedSprite(frames);
    rCreativo.anchor.set(0.5);
    rCreativo.animationSpeed = 0.01;
    rCreativo.height = heightwindow;
    rCreativo.width = widhwindow;
    rCreativo.position.set(widhwindow / 2, heightwindow / 2);
    rCreativo.loop = true;
    rCreativo.stop();
    rCreativo.visible = false;
    app.stage.addChild(rCreativo);

    urlsStory = loader.resources.tSocial.data.url;
    frames = [];
    for (let i = 1; i < 29; i++) {
        frames.push(PIXI.Texture.from(urlsStory[i]));
    }

    rSocial = new PIXI.AnimatedSprite(frames);
    rSocial.anchor.set(0.5);
    rSocial.animationSpeed = 0.01;
    rSocial.height = heightwindow;
    rSocial.width = widhwindow;
    rSocial.position.set(widhwindow / 2, heightwindow / 2);
    rSocial.loop = true;
    rSocial.stop();
    rSocial.visible = false;
    app.stage.addChild(rSocial);

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

    // Nota musical
    iNota = new PIXI.Sprite(loader.resources.notaM.texture);
    var ratio = iNota.width / iNota.height;
    iNota.width = 100*widthRelativo;
    iNota.height = iNota.width / ratio;
    iNota.anchor.set(0.5);
    iNota.x = 200*widthRelativo;
    iNota.y = 200*heightRelativo;
    app.stage.addChild(iNota);
    //c.fadeOut(iNota);
    //c.fadeIn(iNota);
    c.slide(iNota, 400*widthRelativo, 100*heightRelativo, 200, "smoothstep", true);
    c.pulse(iNota, 20, 0.5);
    /*
    c.scale(
      iNota,         //The sprite
      2,         //The final x scale value
      2,         //The final y scale value
      100   //The duration, in frames
    );
    */
    // Acción de boton
    bInicio.interactive = true;
    bInicio.buttonMode = true;
    bInicio.on('pointerover', onMouseOverBoton);
    bInicio.on('pointerout', onMouseNotOverBoton);
    bInicio.on('pointerdown', (event) => onClickMenuCapitulo("menu"))




    // Contenedor del menu
    cMenu = new PIXI.Container;
    cMenuMusica = new PIXI.Container;

    // botones del menu
    bEsocial = new PIXI.Sprite(loader.resources.tEsocial.texture);
    var ratio = bEsocial.width / bEsocial.height;
    bEsocial.width = 300*widthRelativo;
    bEsocial.height = bEsocial.width / ratio;
    bEsocial.anchor.set(0.5);
    bEsocial.x = cMenu.width/2;
    bEsocial.y = 100*heightRelativo;
    cMenu.addChild(bEsocial);

    bEcreativo = new PIXI.Sprite(loader.resources.tEcreativo.texture);
    var ratio = bEcreativo.width / bEcreativo.height;
    bEcreativo.width = 300*widthRelativo;
    bEcreativo.height = bEcreativo.width / ratio;
    bEcreativo.anchor.set(0.5);
    bEcreativo.x = 1;
    bEcreativo.y = 200*heightRelativo;
    cMenu.addChild(bEcreativo);


    cMenu.x = 200*widthRelativo;
    cMenu.y = 100*heightRelativo;
    app.stage.addChild(cMenu);
    cMenu.visible = false;

    
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


    // Acción de boton
    bEsocial.interactive = true;
    bEsocial.buttonMode = true;
    bEsocial.on('pointerover', onMouseOverBoton);
    bEsocial.on('pointerout', onMouseNotOverBoton);
    bEsocial.on('pointerdown', (event) => onClickOpcion("social"));

    // Acción de boton
    bEcreativo.interactive = true;
    bEcreativo.buttonMode = true;
    bEcreativo.on('pointerover', onMouseOverBoton);
    bEcreativo.on('pointerout', onMouseNotOverBoton);
    bEcreativo.on('pointerdown', (event) => onClickOpcion("creativo"));


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
    if (eInicio == "inicio" || eInicio == "musica_inicio") {
        this.texture = tInicio1;
    } else if (fondoBailes.visible == true || fondoInstrumentos.visible == true ) {
        this.texture = tInicio3;
    }
    this.width -= 20;
    this.height -= 20;
}

function onMouseOverBoton() {
    this.width += 30;
    this.height += 30;
}

function onMouseNotOverBoton() {
    this.width -= 30;
    this.height -= 30;
}

function onClickMenuInicio() {
    if (eInicio == "inicio") {
        if (fondotransparente.visible == false) {
            //fondo.visible = true;
            fondotransparente.visible = true;
            bMenu.texture = tInicio3;
            cMenu.visible = true;
            eInicio = "volver";
        } else {
            fondotransparente.visible = false;
            bMenu.texture = tInicio3;
            cMenu.visible = true;
            eInicio = "volver";
        }
    } else if (eInicio == "volver_creativo") {
        fondotransparente.visible = false;
        rCreativo.visible = false;
        bMenu.texture = tInicio1;
        cMenu.visible = false;
        eInicio = "inicio";
    } else if (eInicio == "volver") {
        fondotransparente.visible = false;
        bMenu.texture = tInicio1;
        cMenu.visible = false;
        eInicio = "inicio";
    } else if (eInicio == "musica_inicio" || eInicio == "bailes_inicio" || eInicio == "instrumentos_inicio") {
        fondo.visible = false;
        fondoBailes.visible = false;
        fondoInstrumentos.visible = false;
        fondoMusica.visible = true;
        cMenuMusica.visible = true;
        bMenu.texture = tInicio3;
        cMenu.visible = false;
        eInicio = "inicio";
    }
}


function onClickMenuCapitulo(object) {
    window.location.href = url_base + object + "/";
}

function onClickOpcion(object) {
    if (object == "creativo") {
        eInicio = "volver_creativo";
        rCreativo.visible = true;
        cMenu.visible = false;
    } else if (object == "social") {
        eInicio = "volver_social";
        rSocial.visible = true;
        cMenu.visible = false;
    }
}

function onClickStory(object) {
    if (eInicio == "volver_creativo") {
        if (object == "adelante") {
            rCreativo.gotoAndStop(rCreativo.currentFrame + 1);
        } else {
            if (object == "atras") {
                rCreativo.gotoAndStop(rCreativo.currentFrame - 1);
            }
        }
    }
    if (eInicio == "volver_social") {
        if (object == "adelante") {
            rSocial.gotoAndStop(rSocial.currentFrame + 1);
        } else {
            if (object == "atras") {
                rSocial.gotoAndStop(rSocial.currentFrame - 1);
            }
        }
    }
}