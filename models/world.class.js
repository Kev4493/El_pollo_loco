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
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*2),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*3),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*3),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3),

    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;                                                                       // Eine Variable für die Verschiebung des Bildausschnittes.

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');                                             // getContext('2d') = stellt den 2D-Renderkontext für die Zeichenoberfläche eines "canvas" dar.
        this.canvas = canvas;                                                           // Damit "canvas" nicht nur innerhalb der Funktion ist, sondern auch von außen aufgerufen werden kann.
        this.keyboard = keyboard;                                                       // Damit "keyboard" nicht nur innerhalb der Funktion ist, sondern auch von außen aufgerufen werden kann.
        this.draw();                                                                    // Die "draw" Methode wird ausgeführt.
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;                                                    // Damit können wir von der Klasse Character auf die Klasse World zugreifen.
    }


    draw() {                                                                            // Diese Methode benutzt den Context und kann dort verschiedene Methoden aufrufen um unsere Welt zu malen.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);                // "clearRect" cleart jedes mal das Canvas.

        this.ctx.translate(this.camera_x, 0);                                           // Sorgt für die Verschiebeung des Bildausschnittes. default = 0

        this.addObjectsToMap(this.backgroundObjects);                                   // => Lädt die Bilder aus "backgroundObjects" <=

        this.addObjectsToMap(this.clouds);                                              // => Lädt die Bilder aus "clouds" <=

        this.addToMap(this.character);                                                  // => Lädt die Bilder aus "character" <=

        this.addObjectsToMap(this.enemies);                                             // => Lädt die Bilder aus "enemies" <=

        this.ctx.translate(-this.camera_x, 0);                                          // Bildausschnitt wird zurückgesetzt. (- = Gegenteil).
        
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

        if (mo.otherDirection) {                                                         // Eine Funktion um das IMG zu spiegeln. // Hat unser Objekt eine otherDirection = true?
            this.ctx.save();                                                             // Wir speichern die aktuellen Einstellungen von unserem Context.
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);                                                       // Das Bild wird gespiegelt.
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);                     // Diese Zeile wird für JEDES ELEMENT aus dem jeweiligen Array ausgeführt und zeichnet die IMG's auf das Canvas

        if (mo.otherDirection) {                                                         // ist otherDirection auf true?
            mo.x = mo.x * -1;
            this.ctx.restore();                                                          // änderungen werden wieder Rückgängig gemacht.                                                         
        }
    }

}