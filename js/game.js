let canvas;                                               // Die Variable für unser "canvas"
let ctx;
let world;                                                // Der Variable "world" wird das "World-Objekt" zugewiesen.


function init() {
    canvas = document.getElementById('canvas')            // Der Variable "canvas" wird das canvas aus dem HTML zugewiesen
    world = new World(canvas);                            // Der Variable "world" wird die Klasse "World" zugewiesen und ich übergebe das canvas mit in die Klasse.

    console.log('My Character is', world.character);
}