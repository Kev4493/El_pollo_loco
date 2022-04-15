class World {

    character = new Character();                                                        // Der Variable "character" wird das "Character-Objekt" zugewiesen.
    level = level1;                                                                     // Damit können wir auf alle Variablen aus unserem Level zugreifen.
    canvas;
    ctx;
    keyboard;
    camera_x = 0;                                                                       // Eine Variable für die Verschiebung des Bildausschnittes.
    statusBar = new Statusbar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');                                             // getContext('2d') = stellt den 2D-Renderkontext für die Zeichenoberfläche eines "canvas" dar.
        this.canvas = canvas;                                                           // Damit "canvas" nicht nur innerhalb der Funktion ist, sondern auch von außen aufgerufen werden kann.
        this.keyboard = keyboard;                                                       // Damit "keyboard" nicht nur innerhalb der Funktion ist, sondern auch von außen aufgerufen werden kann.
        this.draw();                                                                    // Die "draw" Methode wird ausgeführt.
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;                                                    // Damit können wir von der Klasse Character auf die Klasse World zugreifen.
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
        }, 200);
    }


    draw() {                                                                            // Diese Methode benutzt den Context und kann dort verschiedene Methoden aufrufen um unsere Welt zu malen.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);                // "clearRect" cleart jedes mal das Canvas.

        this.ctx.translate(this.camera_x, 0);                                           // Sorgt für die Verschiebeung des Bildausschnittes. default = 0

        this.addObjectsToMap(this.level.backgroundObjects);                             // => Lädt die Bilder aus "backgroundObjects" <=

        this.addObjectsToMap(this.level.clouds);                                        // => Lädt die Bilder aus "clouds" <=

        this.ctx.translate(-this.camera_x, 0);                                          // Bildausschnitt wird zurückgesetzt. (- = Gegenteil).

        this.addToMap(this.statusBar);                                                  // => Lädt die Bilder aus "statusBar" <=

        this.ctx.translate(this.camera_x, 0);                                           // Sorgt für die Verschiebeung des Bildausschnittes. default = 0

        this.addToMap(this.character);                                                  // => Lädt die Bilder aus "character" <=

        this.addObjectsToMap(this.level.enemies);                                       // => Lädt die Bilder aus "enemies" <=

        this.ctx.translate(-this.camera_x, 0);                                          // Bildausschnitt wird zurückgesetzt. (- = Gegenteil).

        let self = this;
        requestAnimationFrame(function () {                                             // "requestAnimationFrame" ruft die Funktion "draw" nun mehrmals auf.
            self.draw();                                                                // in der Funktion "requestAnimationFrame" funktioniert "this" nicht!
        });
    }


    addObjectsToMap(objects) {                                                          // Es wird durch das jeweilige Array itteriert (enemies, clouds, backgroundObjects).
        objects.forEach(o => {
            this.addToMap(o)                                                            // Und jedes Element aus dem Array ruft die "addToMap()" Funktion auf.
        });
    }


    addToMap(mo) {                                                                       // Diese Funktion ZEICHNET DAS JEWEILIGE IMG. 

        if (mo.otherDirection) {                                                         // Eine Funktion um das IMG zu spiegeln. // Hat unser Objekt eine otherDirection = true?
            this.flipImage(mo);
        }

        mo.draw(this.ctx);

        mo.drawFrame(this.ctx);                                                          // Funktion für den Rectangle. Blauer Rand um die Objekte.

        if (mo.otherDirection) {                                                         // ist otherDirection auf true?
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();                                                                  // Wir speichern die aktuellen Einstellungen von unserem Context.
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);                                                            // Das Bild wird gespiegelt.
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();                                                          // änderungen werden wieder Rückgängig gemacht.    
    }

}