let canvas;                                             // Die Variable für unser "canvas"
let ctx;
let character = new MovableObject();                    // "character" bekommt die Eigenschaften aus unserer Klasse "MovableObject".


function init() {
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d');                       // getContext('2d') = stellt den 2D-Renderkontext für die Zeichenoberfläche eines "canvas" dar.

    console.log('My Character is', character);
}