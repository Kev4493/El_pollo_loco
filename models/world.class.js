class World {

    character = new Character();                                                        // Der Variable "character" wird das "Character-Objekt" zugewiesen.
    enemies = [                                                                         // In das Array "enemies" werden 3 "Chicken-Objekte" gepackt.
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');                                             // getContext('2d') = stellt den 2D-Renderkontext für die Zeichenoberfläche eines "canvas" dar.
        this.draw();                                                                    // Die "draw" Methode wird ausgeführt.
    }


    draw() {                                                                                                                         // Diese Methode benutzt den Context und kann dort verschiedene Methoden aufrufen um unsere Welt zu malen.
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);     // Wir zeichnen ein Bild auf dem Context.
    }

}