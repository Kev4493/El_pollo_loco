class World {

    character = new Character();                                                        // Der Variable "character" wird das "Character-Objekt" zugewiesen.
    enemies = [                                                                         // In das Array "enemies" werden 3 "Chicken-Objekte" gepackt.
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');                                             // getContext('2d') = stellt den 2D-Renderkontext für die Zeichenoberfläche eines "canvas" dar.
        this.canvas = canvas;                                                           // Damit "canvas" nicht nur innerhalb der Funktion ist, sondern auch von außen aufgerufen werden kann.
        this.draw();                                                                    // Die "draw" Methode wird ausgeführt.
    }


    draw() {                                                                                                                         // Diese Methode benutzt den Context und kann dort verschiedene Methoden aufrufen um unsere Welt zu malen.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);                                                             // "clearRect" cleart jedes mal das Canvas.
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);     // Wir zeichnen ein Bild vom Character auf dem Context.


        this.enemies.forEach(enemy => {                                                                                    // Eine For-Each Schleife um alle 3 Chicken aus dem Array anzuzeigen
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);                                    // Diese Zeile wird für JEDES ELEMENT aus dem Array ausgeführt.
        });
        
        let self = this;
        requestAnimationFrame(function() {                                              // "requestAnimationFrame" ruft die Funktion "draw" nun mehrmals auf.
            self.draw();                                                                // in der Funktion "requestAnimationFrame" funktioniert "this" nicht!
        });


    }

}