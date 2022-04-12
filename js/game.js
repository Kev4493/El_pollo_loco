let canvas;                                               // Die Variable für unser "canvas"
let ctx;
let world;                                                // Der Variable "world" wird das "World-Objekt" zugewiesen.
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas')            // Der Variable "canvas" wird das canvas aus dem HTML zugewiesen
    world = new World(canvas, keyboard);                  // Der Variable "world" wird die Klasse "World" zugewiesen und ich übergebe das canvas und das keyboard mit in die Klasse.

    console.log('My Character is', world.character);
}

document.addEventListener('keydown', (e) => {          // Setzt die Taste die gedrückt wurde auf "true"
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    console.log(event);
});

document.addEventListener('keyup', (e) => {          // Setzt die Taste die losgelassen wurde auf "false"

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    console.log(event);
});