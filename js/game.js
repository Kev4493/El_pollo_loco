let canvas;                                               // Die Variable für unser "canvas"
let ctx;
let world;                                                // Der Variable "world" wird das "World-Objekt" zugewiesen.
let keyboard = new Keyboard();


function init() {
    initLevel();
    touchBtn();
    canvas = document.getElementById('canvas')            // Der Variable "canvas" wird das canvas aus dem HTML zugewiesen
    world = new World(canvas, keyboard);                  // Der Variable "world" wird die Klasse "World" zugewiesen und ich übergebe das canvas und das keyboard mit in die Klasse.
    console.log('My Character is', world.character);
    document.getElementById('canvas').style.background = "none";
    document.getElementById('blinking-start-text').classList.add('d-none');
    document.getElementById('touch-panel').classList.remove('d-none');
    document.getElementById('start-game').classList.add('d-none');
    document.getElementById('fullscreen-btn').classList.remove('d-none');
    document.getElementById('restart-game').classList.remove('d-none');
}

function fullscreen() {
    canvas.requestFullscreen();
}

function touchBtn() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        keyboard.LEFT = false;
    });

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        keyboard.RIGHT = false;
    });

    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        keyboard.SPACE = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        keyboard.SPACE = false;
    });

    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        keyboard.D = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        keyboard.D = false;
    });
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

    if (e.keyCode == 68) {
        keyboard.D = true;
    }

    // console.log(event);
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

    if (e.keyCode == 68) {
        keyboard.D = false;
    }

    // console.log(event);
});