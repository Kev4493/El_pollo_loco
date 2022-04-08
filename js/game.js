let canvas;                         // Die Variable für unser "canvas"
let ctx;                            // ctx = stellt den 2D-Renderkontext für die Zeichenoberfläche eines "canvas" dar.
let character = new Image()


function init() {
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d');

    character.src = '../img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png';

    ctx.drawImage(character, 20, 20, 50, 150);       // "drawImage()" bietet verschiedene Möglichkeiten, ein Bild auf die canvas zu zeichnen.
}