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
var bAntidiscrimina, bCimarronaje, bCronologia, bLegislacione;


const loader = new PIXI.Loader();
loader.add('titulo', '../../static/assets/img/titulo.png')
    .add('tInicio1','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05.png')
    .add('tInicio2','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05_Over.png')
    .add('tInicio3','../../static/assets/img/botones_cap5/Boton_Volver_Cap_05.png')
    .add('tAntidiscrimina','../../static/assets/img/botones_cap4/Boton_antidiscriminacion.png')
    .add('tCimarronaje','../../static/assets/img/botones_cap4/Boton_cimarronaje.png')
    .add('tCronologia','../../static/assets/img/botones_cap4/Boton_cronologia.png')
    .add('tLegislacione','../../static/assets/img/botones_cap4/Boton_legislacionespecial.png')
    //.add('mapa', '../../static/assets/img/mapa1.png')
    //.add('nube', '../../static/assets/img/nube.png')
    //.add('capitulo4', '../../static/assets/img/menu/iCapitulo4.png')
    //.add('capitulo5', '../../static/assets/img/menu/iCapitulo5.png')
    //.add('capitulo6', '../../static/assets/img/menu/iCapitulo6.png')
    //.add('bAtras', '../../static/assets/img/botones/atras.png')
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
    bAntidiscrimina = new PIXI.Sprite(loader.resources.tAntidiscrimina.texture);
    var ratio = bAntidiscrimina.width / bAntidiscrimina.height;
    bAntidiscrimina.width = 300*widthRelativo;
    bAntidiscrimina.height = bAntidiscrimina.width / ratio;
    bAntidiscrimina.anchor.set(0.5);
    bAntidiscrimina.x = cMenu.width/2;
    bAntidiscrimina.y = 100*heightRelativo;
    cMenu.addChild(bAntidiscrimina);

    bCimarronaje = new PIXI.Sprite(loader.resources.tCimarronaje.texture);
    var ratio = bCimarronaje.width / bCimarronaje.height;
    bCimarronaje.width = 300*widthRelativo;
    bCimarronaje.height = bCimarronaje.width / ratio;
    bCimarronaje.anchor.set(0.5);
    bCimarronaje.x = 1;
    bCimarronaje.y = 200*heightRelativo;
    cMenu.addChild(bCimarronaje);


    cMenu.x = 200*widthRelativo;
    cMenu.y = 100*heightRelativo;
    app.stage.addChild(cMenu);
    cMenu.visible = false;

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