class MovableObject {
    x = 120;                                                                                      // X-Koordinate auf dem Canvas - Standartwert
    y = 250;                                                                                      // Y-Koordinate auf dem Canvas - Standartwert
    img;                                                                                          // Variable um das aktuelle Bild von Character, Chicken und Cloud zu laden.
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;                                                                             // Dient dazu um die Objekte zu animieren ==> siehe animate()
    speed = 0.15;
    otherDirection = false;                                                                       // Variable zum Spiegeln des Bildes. Standartmäßig auf false.
    speedY = 0;                                                                                   // Variable für die Geschwindigkeit des Falls nach unten.
    acceleration = 2.5;                                                                           // Variable dafür, wie schnell das Objekt beschleunigt wird.

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);                                                                            // wird 25x pro Sekunde ausgeführt.
    }

    isAboveGround() {
        return this.y < 180;
    }


    loadImage(path) {                                                                             // Eine Funktion um Bilder zu laden.
        this.img = new Image();                                                                   // Der Variable "img" wird ein neues Bild zugewiesen. // "this." referenziert das Objekt was erstellt wird. // Von Objekt zu Objekt kann das "img" immer einen anderen Wert enthalten. Je nach dem mit welchem Wert das Objekt erstellt wurde.
        this.img.src = path;                                                                      // Wir laden "path" in die Variable (wird dann aus der Klasse Character, Chicken, Clouds... übergeben)
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);                         // Diese Zeile wird für JEDES ELEMENT aus dem jeweiligen Array ausgeführt und zeichnet die IMG's auf das Canvas
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {                               // Funktion wird nur für die 2 Klassen angewendet
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    loadImages(arr) {                                                                             // Wir bekommen das Array aus loadImages übergeben (bspw. aus Character)
        arr.forEach((path) => {                                                                   // Wir iterrieren durch das Array und bekommen im ersten Durchlauf den ersten Pfad übergeben
            let img = new Image();                                                                // Wir legen eine Variable an mit einem neuen Bild an                                                               // Variable wird hier innerhalb der Funktion  definiert. Daher kein "this"
            img.src = path;                                                                       // Wir laden den Pfad in das IMG Objekt
            this.imageCache[path] = img;                                                          // ImageCache wird geuptdatet und das erste Bild aus dem Array ist nun im ersten Durchlauf im ImageCache           // "this" weil wir auf DIESE Variable oben von dem Objekt zugreifen. Nur mit "this" kann man auf Variablen außerhalb der Funktion zugreifen.
        });
    }

    playAnimation(images) {                                                                       // Funktionen um die Animationen abzuspielen.
        let i = this.currentImage % this.IMAGES_WALKING.length;                                   // let i = 7 % 6 => 1, Rest 1     // i = 0, 1, 2, 3, 4, 5, 0, 0, 1, 2, 3, 4, 5, 0     // Wir kommen nicht an das 7. Bild, welches nicht existiert.
        let path = images[i];                                                                     // let path soll IMAGES_WALKING an Stelle 0 sein
        this.img = this.imageCache[path];                                                         // Das Bild aus dem IMG soll dem Bild aus dem Cache entsprechen                                                             
        this.currentImage++;                                                                      // "currentImage" wird in jedem durchgang um 1 erhöht
    }


    moveRight() {
        this.x += this.speed;                                                                     // X-Kordinate wird erhöht, damit Character nach rechts läuft.
    };


    moveLeft() {
        this.x -= this.speed;                                                                     // X-Kordinate wird verringert, damit Character nach links läuft.
    }

    jump() {
        this.speedY = 30;
    }
}

