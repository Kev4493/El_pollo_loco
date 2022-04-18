class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;                                                                       // Variable zum Spiegeln des Bildes. Standartmäßig auf false.
    speedY = 0;                                                                                   // Variable für die Geschwindigkeit des Falls nach unten.
    acceleration = 2.5;                                                                           // Variable dafür, wie schnell das Objekt beschleunigt wird.
    energy = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);                                                                            // wird 25x pro Sekunde ausgeführt.
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
    }


    // character.isColliding(chicken);
    isColliding(mo) {                                                                             // Hier finden wir raus, ob Objekte kolidieren.
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }


    hit() {                                                                                       // Wenn der Character Kollidiert und Energy verliert.
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;                                     // Differenz in Millisekunden
        timepassed = timepassed / 1000;                                                           // Differenz in Sekunden
        return timepassed < 1;
    }


    isDead() {
        return this.energy == 0;
    }


    playAnimation(images) {                                                                       // Funktionen um die Animationen abzuspielen.
        let i = this.currentImage % images.length;                                                // let i = 7 % 6 => 1, Rest 1     // i = 0, 1, 2, 3, 4, 5, 0, 0, 1, 2, 3, 4, 5, 0     // Wir kommen nicht an das 7. Bild, welches nicht existiert.
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

