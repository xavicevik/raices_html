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
let tfondo1 = PIXI.Texture.from('../../static/assets/img/fondooriginal.png');
var fondo = new PIXI.Sprite(tfondo1);
fondo.width = widhwindow;
fondo.height = heightwindow;
fondo.anchor.set(0.5);
fondo.x = widhwindow / 2;
fondo.y = heightwindow / 2;
app.stage.addChild(fondo);

let tfondo2 = PIXI.Texture.from('../../static/assets/img/bibliografia_fondo.png');
var fondotransparente = new PIXI.Sprite(tfondo2);
var ratio = fondotransparente.width / fondotransparente.height;
fondotransparente.width = 800*widthRelativo;
//fondotransparente.height = 550*heightRelativo;
fondotransparente.anchor.set(0.5);
fondotransparente.x = widhwindow / 2;
fondotransparente.y = heightwindow / 2;
app.stage.addChild(fondotransparente);
fondotransparente.visible = true;


// Fondo musica
var fondoMusica = new PIXI.Sprite.from('../../static/assets/img/libros.png');
var ratio = fondoMusica.width / fondoMusica.height;
fondoMusica.width = 200*widthRelativo;
fondoMusica.height = 400*heightRelativo;
//fondoMusica.anchor.set(0.5);
fondoMusica.x = 700*widthRelativo;
fondoMusica.y = 100*heightRelativo;
app.stage.addChild(fondoMusica);
fondoMusica.visible = true;

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
var tBiblio;

const loader = new PIXI.Loader();
loader.add('titulo', '../../static/assets/img/titulo.png')
    //.add('tInicio1','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05.png')
    //.add('tInicio2','../../static/assets/img/botones_cap5/Boton_Iniciar_Cap_05_Over.png')
    //.add('tInicio3','../../static/assets/img/botones_cap5/Boton_Volver_Cap_05.png')
    //.add('tEsocial','../../static/assets/img/botones_cap6/Boton_social.png')
    //.add('tEcreativo','../../static/assets/img/botones_cap6/Boton_creativo.png')
    //.add('tMusica1','../../static/assets/img/botones_cap5/Boton_Musica_Cap_05.png')
    //.add('tMusica2','../../static/assets/img/botones_cap5/Boton_Musica_Cap_05_Over.png')
    //.add('tArte1','../../static/assets/img/botones_cap5/Boton_Arte_Afro_Cap_05.png')
    //.add('tArte2','../../static/assets/img/botones_cap5/Boton_Arte_Afro_Cap_05_Over.png')
    //.add('tVestu1','../../static/assets/img/botones_cap5/Boton_Vestuario_Cap_05.png')
    //.add('tVestu2','../../static/assets/img/botones_cap5/Boton_Vestuario_Cap_05_Over.png')
    .add('bibliografia', '../../static/assets/img/bibliografia.json')
    //.add('instrumentos', '../../static/assets/img/botones_cap5/Boton_Instrumentos_Cap05.png')
    //.add('bailes', '../../static/assets/img/botones_cap5/Boton_Bailes_Cap05.png')
    //.add('tCreativo', '../../static/assets/img/emprendimientocreativo.json')
    //.add('tSocial', '../../static/assets/img/emprendimientosocial.json')
    //.add('bInicio', '../../static/assets/img/botones/inicio.png')
    //.add('bAtras', '../../static/assets/img/botones/atras.png')
    .load(startup);

function startup() {
    urlsStory = loader.resources.bibliografia.data.url;
    frames = [];
    for (let i = 1; i < 4; i++) {
        frames.push(PIXI.Texture.from(urlsStory[i]));
    }

    tBiblio = new PIXI.AnimatedSprite(frames);
    tBiblio.anchor.set(0.5);
    tBiblio.animationSpeed = 0.003;
    tBiblio.height = 300* heightRelativo;
    tBiblio.width = 600* widthRelativo;
    tBiblio.position.set(420 * widthRelativo, (heightwindow / 2) - (20 * heightRelativo));
    tBiblio.loop = true;
    tBiblio.play();
    tBiblio.visible = true;
    app.stage.addChild(tBiblio);

    // boton inicio
    var bInicio = PIXI.Sprite.from('../../static/assets/img/botones/inicio.png');
    var ratio = bInicio.width / bInicio.height;
    bInicio.width = 70*widthRelativo;
    bInicio.height = bInicio.width / ratio;
    bInicio.anchor.set(0.5);
    bInicio.x = 60;
    bInicio.y = heightwindow - 60;
    app.stage.addChild(bInicio);



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



function onClickMenuCapitulo(object) {
    window.location.href = url_base + object + "/";
}


