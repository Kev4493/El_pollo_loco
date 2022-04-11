class World {

    character = new Character();                                                        // Der Variable "character" wird das "Character-Objekt" zugewiesen.
    enemies = [                                                                         // In das Array "enemies" werden 3 "Chicken-Objekte" gepackt.
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [                                                                          // Wir erstellen eine "Cloud" damit Sie angezeigt wird.
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0)
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');                                             // getContext('2d') = stellt den 2D-Renderkontext für die Zeichenoberfläche eines "canvas" dar.
        this.canvas = canvas;                                                           // Damit "canvas" nicht nur innerhalb der Funktion ist, sondern auch von außen aufgerufen werden kann.
        this.draw();                                                                    // Die "draw" Methode wird ausgeführt.
    }


    draw() {                                                                            // Diese Methode benutzt den Context und kann dort verschiedene Methoden aufrufen um unsere Welt zu malen.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);                // "clearRect" cleart jedes mal das Canvas.

        this.addObjectsToMap(this.backgroundObjects);                                   // => Lädt die Bilder aus "backgroundObjects" <=

        this.addObjectsToMap(this.clouds);                                              // => Lädt die Bilder aus "clouds" <=

        this.addToMap(this.character);                                                  // => Lädt die Bilder aus "character" <=

        this.addObjectsToMap(this.enemies);                                             // => Lädt die Bilder aus "enemies" <=
        
        let self = this;
        requestAnimationFrame(function() {                                              // "requestAnimationFrame" ruft die Funktion "draw" nun mehrmals auf.
            self.draw();                                                                // in der Funktion "requestAnimationFrame" funktioniert "this" nicht!
        });
    }


    addObjectsToMap(objects) {                                                          // Es wird durch das jeweilige Array itteriert (enemies, clouds, backgroundObjects).
        objects.forEach(o => {
            this.addToMap(o)                                                            // Und jedes Element aus dem Array ruft die "addToMap()" Funktion auf.
        });
    }


    addToMap(mo) {                                                                       // Diese Funktion ZEICHNET DAS JEWEILIGE IMG.
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);                     // Diese Zeile wird für JEDES ELEMENT aus dem jeweiligen Array ausgeführt und zeichnet die IMG's auf das Canvas
    }

}