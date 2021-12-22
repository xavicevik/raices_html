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
let tfondo1 = PIXI.Texture.from('../../static/assets/img/fondocapitulo5.png');
let tfondo2 = PIXI.Texture.from('../../static/assets/img/fondocapitulo5_over.png');
var fondo = new PIXI.Sprite(tfondo1);
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);

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
var tInicio1, tInicio2;
var bPersonajes, bGastro, bMusica, bArte, bVestu, bInstrumentos, bBailes;
var tPersonajes1, tPersonajes2, tGastro1, tGastro2, tMusica1, tMusica2, tArte1, tArte2, tVestu1, tVestu2, tfondoM1, tfondoM2;
var tNombres, tRaizal, tLiteratura;
var bNombres, bRaizal, bLiteratura;
var cMenu;
var iNota;
var eInicio = "inicio";

const loader = new PIXI.Loader();
loader.add('titulo', '../../static/assets/img/titulo.png')
    .add('tInicio1','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05.png')
    .add('tInicio2','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05_Over.png')
    .add('tInicio3','../../static/assets/img/botones_cap5/Boton_Volver_Cap_05.png')
    .add('tPersonajes1','../../static/assets/img/botones_cap5/Boton_Personajes_Cap_05.png')
    .add('tPersonajes2','../../static/assets/img/botones_cap5/Boton_Personajes_Cap_05_Over.png')
    .add('tGastro1','../../static/assets/img/botones_cap5/Boton_Gastronomia_Cap_05.png')
    .add('tGastro2','../../static/assets/img/botones_cap5/Boton_Gastronomia_Cap_05_Over.png')
    .add('tMusica1','../../static/assets/img/botones_cap5/Boton_Musica_Cap_05.png')
    .add('tMusica2','../../static/assets/img/botones_cap5/Boton_Musica_Cap_05_Over.png')
    .add('tArte1','../../static/assets/img/botones_cap5/Boton_Arte_Afro_Cap_05.png')
    .add('tArte2','../../static/assets/img/botones_cap5/Boton_Arte_Afro_Cap_05_Over.png')
    .add('tVestu1','../../static/assets/img/botones_cap5/Boton_Vestuario_Cap_05.png')
    .add('tVestu2','../../static/assets/img/botones_cap5/Boton_Vestuario_Cap_05_Over.png')
    .add('tNombres','../../static/assets/img/botones_cap5/Boton_nombres_Cap_05.png')
    .add('tRaizal','../../static/assets/img/botones_cap5/Boton_raizal_Cap_05.png')
    .add('tLiteratura','../../static/assets/img/botones_cap5/Boton_literatura_Cap_05.png')
    .add('notaM', '../../static/assets/img/notas_musical.png')
    .add('mapa', '../../static/assets/img/mapa1.png')
    .add('instrumentos', '../../static/assets/img/botones_cap5/Boton_Instrumentos_Cap05.png')
    .add('bailes', '../../static/assets/img/botones_cap5/Boton_Bailes_Cap05.png')
    //.add('capitulo5', '../../static/assets/img/menu/iCapitulo5.png')
    //.add('capitulo6', '../../static/assets/img/menu/iCapitulo6.png')
    //.add('bInicio', '../../static/assets/img/botones/inicio.png')
    //.add('bAtras', '../../static/assets/img/botones/atras.png')
    .load(startup);

function startup() {
 
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
    tNombres = loader.resources.tNombres.texture;
    bNombres = new PIXI.Sprite(tNombres);
    var ratio = bNombres.width / bNombres.height;
    bNombres.width = 180*widthRelativo;
    bNombres.height = bNombres.width / ratio;
    bNombres.anchor.set(0.5);
    bNombres.x = cMenu.width/2;
    bNombres.y = 1;
    cMenu.addChild(bNombres);

    tGastro1 = loader.resources.tGastro1.texture;
    tGastro2 = loader.resources.tGastro2.texture;
    bGastro = new PIXI.Sprite(tGastro1);
    var ratio = bGastro.width / bGastro.height;
    bGastro.width = 180*widthRelativo;
    bGastro.height = bGastro.width / ratio;
    bGastro.anchor.set(0.5);
    bGastro.x = 1;
    bGastro.y = 100*heightRelativo;
    cMenu.addChild(bGastro);

    tMusica1 = loader.resources.tMusica1.texture;
    tMusica2 = loader.resources.tMusica2.texture;
    bMusica = new PIXI.Sprite(tMusica1);
    var ratio = bMusica.width / bMusica.height;
    bMusica.width = 180*widthRelativo;
    bMusica.height = bMusica.width / ratio;
    bMusica.anchor.set(0.5);
    bMusica.x = 1;
    bMusica.y = 200*heightRelativo;
    cMenu.addChild(bMusica);

    tArte1 = loader.resources.tArte1.texture;
    tArte2 = loader.resources.tArte2.texture;
    bArte = new PIXI.Sprite(tArte1);
    var ratio = bArte.width / bArte.height;
    bArte.width = 180*widthRelativo;
    bArte.height = bArte.width / ratio;
    bArte.anchor.set(0.5);
    bArte.x = 1;
    bArte.y = 300*heightRelativo;
    cMenu.addChild(bArte);

    tRaizal = loader.resources.tRaizal.texture;
    bRaizal = new PIXI.Sprite(tRaizal);
    var ratio = bRaizal.width / bRaizal.height;
    bRaizal.width = 180*widthRelativo;
    bRaizal.height = bRaizal.width / ratio;
    bRaizal.anchor.set(0.5);
    bRaizal.x = 1;
    bRaizal.y = 400*heightRelativo;
    cMenu.addChild(bRaizal);

    cMenu.x = 200*widthRelativo;
    cMenu.y = 100*heightRelativo;
    app.stage.addChild(cMenu);
    cMenu.visible = false;

    bBailes = new PIXI.Sprite(loader.resources.bailes.texture);
    var ratio = bBailes.width / bBailes.height;
    bBailes.width = 300*widthRelativo;
    bBailes.height = bBailes.width / ratio;
    bBailes.anchor.set(0.5);
    bBailes.x = 1;
    bBailes.y = 200*heightRelativo;

    bInstrumentos = new PIXI.Sprite(loader.resources.instrumentos.texture);
    var ratio = bInstrumentos.width / bInstrumentos.height;
    bInstrumentos.width = 300*widthRelativo;
    bInstrumentos.height = bInstrumentos.width / ratio;
    bInstrumentos.anchor.set(0.5);
    bInstrumentos.x = 1;
    bInstrumentos.y = 100*heightRelativo;
    cMenuMusica.addChild(bBailes);
    cMenuMusica.addChild(bInstrumentos);

    cMenuMusica.x = 800*widthRelativo;
    cMenuMusica.y = 100*heightRelativo;
    app.stage.addChild(cMenuMusica);
    cMenuMusica.visible = false;


     // Acción de boton
    bMusica.interactive = true;
    bMusica.buttonMode = true;
    bMusica.on('pointerover', onMouseOverBoton);
    bMusica.on('pointerout', onMouseNotOverBoton);
    bMusica.on('pointerdown', (event) => onClickOpcion("musica"));

    // Acción de boton
    bBailes.interactive = true;
    bBailes.buttonMode = true;
    bBailes.on('pointerover', onMouseOverBoton);
    bBailes.on('pointerout', onMouseNotOverBoton);
    bBailes.on('pointerdown', (event) => onClickOpcion("bailes"));

    // Acción de boton
    bInstrumentos.interactive = true;
    bInstrumentos.buttonMode = true;
    bInstrumentos.on('pointerover', onMouseOverBoton);
    bInstrumentos.on('pointerout', onMouseNotOverBoton);
    bInstrumentos.on('pointerdown', (event) => onClickOpcion("instrumentos"));

    bRaizal.interactive = true;
    bRaizal.buttonMode = true;
    bRaizal.on('pointerover', onMouseOverBoton);
    bRaizal.on('pointerout', onMouseNotOverBoton);
    bRaizal.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo5/RAIZAL.pdf", "", "width=800, height=600"));


    bNombres.interactive = true;
    bNombres.buttonMode = true;
    bNombres.on('pointerover', onMouseOverBoton);
    bNombres.on('pointerout', onMouseNotOverBoton);
    bNombres.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo5/NOMBRES.pdf", "", "width=800, height=600"));


    bGastro.interactive = true;
    bGastro.buttonMode = true;
    bGastro.on('pointerover', onMouseOverBoton);
    bGastro.on('pointerout', onMouseNotOverBoton);
    bGastro.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo5/COCINA_AFROCOLOMBIANA.pdf", "", "width=800, height=600"));


    bArte.interactive = true;
    bArte.buttonMode = true;
    bArte.on('pointerover', onMouseOverBoton);
    bArte.on('pointerout', onMouseNotOverBoton);
    bArte.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo5/LITERATURA_AFRICANA.pdf", "", "width=800, height=600"));


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
        if (fondo.visible == false) {
            fondo.visible = true;
            fondoMusica.visible = false;
            cMenuMusica.visible = false;
            fondo.texture = tfondo2;
            bMenu.texture = tInicio3;
            cMenu.visible = true;
            eInicio = "volver";
        } else {
            fondo.texture = tfondo2;
            bMenu.texture = tInicio3;
            cMenu.visible = true;
            eInicio = "volver";
        }
    } else if (eInicio == "volver") {
            fondoMusica.visible = false;
            cMenuMusica.visible = false;
            fondo.texture = tfondo1;
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

function OpcionMusica() {
    fondo.visible = false;
    fondoMusica.visible = true;
    bMenu.texture = tInicio1;
    eInicio = "musica_inicio";
    cMenu.visible = false;
    //cMenuMusica.visible = true;
}

function OpcionBailes() {
    fondo.visible = false;
    fondoMusica.visible = false;
    fondoBailes.visible = true;
    bMenu.texture = tInicio3;
    eInicio = "bailes_inicio";
    cMenu.visible = false;
    cMenuMusica.visible = false;
}

function OpcionInstrumentos() {
    fondo.visible = false;
    fondoMusica.visible = false;
    fondoInstrumentos.visible = true;
    bMenu.texture = tInicio3;
    eInicio = "instrumentos_inicio";
    cMenu.visible = false;
    cMenuMusica.visible = false;
}

function onClickMenuCapitulo(object) {
    window.location.href = url_base + object + "/";
}

function onClickOpcion(object) {
    //console.log(rStory1.currentFrame + 1);
    if (object == "musica") {
        OpcionMusica();
    } else if (object == "bailes") {
        OpcionBailes();
    } else if (object == "instrumentos") {
        OpcionInstrumentos();
    }
}