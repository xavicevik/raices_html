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
let fondo = PIXI.Sprite.from('../../static/assets/img/fondocapitulo4.png');
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

// Se cargan los objetos y animaciones
var iTitulo;
var ratioTitulo;
var tInicio1, tInicio2, tInicio3;
var bMenu;
var iMapa;
var eInicio = "inicio";
var cMenu;
var bGeneralidades, bProcesoslibertarios, bOrganizaciones, bLey70, bLegislacion, bCimarronaje;


const loader = new PIXI.Loader();
loader.add('titulo', '../../static/assets/img/titulo.png')
    .add('tInicio1','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05.png')
    .add('tInicio2','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05_Over.png')
    .add('tInicio3','../../static/assets/img/botones_cap5/Boton_Volver_Cap_05.png')
    .add('tGeneralidades','../../static/assets/img/botones_cap4/Boton_generalidades.png')
    .add('tProcesoslibertarios','../../static/assets/img/botones_cap4/Boton_procesoslibertarios.png')
    .add('tOrganizaciones','../../static/assets/img/botones_cap4/Boton_organizacionesypersonajes.png')
    .add('tLey70','../../static/assets/img/botones_cap4/Boton_ley701993.png')
    .add('tLegislacion','../../static/assets/img/botones_cap4/Boton_legislacionespecial.png')
    .add('tCimarronaje','../../static/assets/img/botones_cap4/Boton_cimarronaje.png')
    //.add('mapa', '../../static/assets/img/mapa1.png')
    //.add('nube', '../../static/assets/img/nube.png')
    //.add('capitulo4', '../../static/assets/img/menu/iCapitulo4.png')
    //.add('capitulo5', '../../static/assets/img/menu/iCapitulo5.png')
    //.add('capitulo6', '../../static/assets/img/menu/iCapitulo6.png')
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

    // Acción de boton
    bInicio.interactive = true;
    bInicio.buttonMode = true;
    bInicio.on('pointerover', onMouseOverBoton);
    bInicio.on('pointerout', onMouseNotOverBoton);
    bInicio.on('pointerdown', (event) => onClickMenuCapitulo("menu"));

    // Contenedor del menu
    cMenu = new PIXI.Container;

    // botones del menu
    bGeneralidades = new PIXI.Sprite(loader.resources.tGeneralidades.texture);
    var ratio = bGeneralidades.width / bGeneralidades.height;
    bGeneralidades.width = 300*widthRelativo;
    bGeneralidades.height = bGeneralidades.width / ratio;
    bGeneralidades.anchor.set(0.5);
    bGeneralidades.x = 1;
    bGeneralidades.y = 100*heightRelativo;
    cMenu.addChild(bGeneralidades);

    bProcesoslibertarios = new PIXI.Sprite(loader.resources.tProcesoslibertarios.texture);
    var ratio = bProcesoslibertarios.width / bProcesoslibertarios.height;
    bProcesoslibertarios.width = 300*widthRelativo;
    bProcesoslibertarios.height = bProcesoslibertarios.width / ratio;
    bProcesoslibertarios.anchor.set(0.5);
    bProcesoslibertarios.x = 1;
    bProcesoslibertarios.y = 200*heightRelativo;
    cMenu.addChild(bProcesoslibertarios);

    bOrganizaciones = new PIXI.Sprite(loader.resources.tOrganizaciones.texture);
    var ratio = bOrganizaciones.width / bOrganizaciones.height;
    bOrganizaciones.width = 300*widthRelativo;
    bOrganizaciones.height = bOrganizaciones.width / ratio;
    bOrganizaciones.anchor.set(0.5);
    bOrganizaciones.x = 1;
    bOrganizaciones.y = 300*heightRelativo;
    cMenu.addChild(bOrganizaciones);

    bLey70 = new PIXI.Sprite(loader.resources.tLey70.texture);
    var ratio = bLey70.width / bLey70.height;
    bLey70.width = 300*widthRelativo;
    bLey70.height = bLey70.width / ratio;
    bLey70.anchor.set(0.5);
    bLey70.x = widhwindow/2;
    bLey70.y = 100*heightRelativo;
    cMenu.addChild(bLey70);

    bLegislacion = new PIXI.Sprite(loader.resources.tLegislacion.texture);
    var ratio = bLegislacion.width / bLegislacion.height;
    bLegislacion.width = 300*widthRelativo;
    bLegislacion.height = bLegislacion.width / ratio;
    bLegislacion.anchor.set(0.5);
    bLegislacion.x = widhwindow/2;
    bLegislacion.y = 200*heightRelativo;
    cMenu.addChild(bLegislacion);

    bCimarronaje = new PIXI.Sprite(loader.resources.tCimarronaje.texture);
    var ratio = bCimarronaje.width / bCimarronaje.height;
    bCimarronaje.width = 300*widthRelativo;
    bCimarronaje.height = bCimarronaje.width / ratio;
    bCimarronaje.anchor.set(0.5);
    bCimarronaje.x = widhwindow/2;
    bCimarronaje.y = 300*heightRelativo;
    cMenu.addChild(bCimarronaje);

    cMenu.x = 200*widthRelativo;
    cMenu.y = 100*heightRelativo;
    app.stage.addChild(cMenu);
    cMenu.visible = false;

    // Acción de boton

    bGeneralidades.interactive = true;
    bGeneralidades.buttonMode = true;
    bGeneralidades.on('pointerover', onMouseOverBoton);
    bGeneralidades.on('pointerout', onMouseNotOverBoton);
    bGeneralidades.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo4/GENERALIDADES.pdf", "Generalidades", "width=800, height=600"));

    bProcesoslibertarios.interactive = true;
    bProcesoslibertarios.buttonMode = true;
    bProcesoslibertarios.on('pointerover', onMouseOverBoton);
    bProcesoslibertarios.on('pointerout', onMouseNotOverBoton);
    bProcesoslibertarios.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo4/PROCESOS_LIBERTARIOS.pdf", "Procesos Libertarios", "width=800, height=600"));

    bOrganizaciones.interactive = true;
    bOrganizaciones.buttonMode = true;
    bOrganizaciones.on('pointerover', onMouseOverBoton);
    bOrganizaciones.on('pointerout', onMouseNotOverBoton);
    bOrganizaciones.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo4/ORGANIZACIONES.pdf", "Organizaciones", "width=800, height=600"));

    bLey70.interactive = true;
    bLey70.buttonMode = true;
    bLey70.on('pointerover', onMouseOverBoton);
    bLey70.on('pointerout', onMouseNotOverBoton);
    bLey70.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo4/LEY70DE1993.pdf", "Ley 70 de 1993", "width=800, height=600"));

    bLegislacion.interactive = true;
    bLegislacion.buttonMode = true;
    bLegislacion.on('pointerover', onMouseOverBoton);
    bLegislacion.on('pointerout', onMouseNotOverBoton);
    bLegislacion.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo4/LEGISLACION_ESPECIAL.pdf", "Legislación Especial", "width=800, height=600"));

    bCimarronaje.interactive = true;
    bCimarronaje.buttonMode = true;
    bCimarronaje.on('pointerover', onMouseOverBoton);
    bCimarronaje.on('pointerout', onMouseNotOverBoton);
    bCimarronaje.on('pointerdown', (event) => window.open("../../static/assets/src/capitulo4/CIMARRONES_JURIDICO.pdf", "Cimarronaje Jurídico", "width=800, height=600"));

    

}

function onMouseOverInicio() {
    this.texture = tInicio2;
    this.width += 20;
    this.height += 20;
}

function onMouseNotOverInicio() {
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