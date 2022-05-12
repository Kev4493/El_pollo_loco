class World {
    character = new Character();                                                        // Der Variable "character" wird das "Character-Objekt" zugewiesen.
    level = level1;                                                                     // Damit können wir auf alle Variablen aus unserem Level zugreifen.
    canvas;
    ctx;
    keyboard;
    camera_x = 0;                                                                       // Eine Variable für die Verschiebung des Bildausschnittes.
    bottle = new Bottle();
    coin = new Coin();
    endboss = level1.endboss[0];

    statusBar = new Statusbar([
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png', // 0
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png' // 5
    ], 30, 0, 100);

    bottlesBar = new Statusbar([
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',  // 0
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png' // 5
    ], 260, 0, 0);

    coinsBar = new Statusbar([
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',
    ], 490, 0, 0);

    ThrowableObjects = [];
    bottles = 0;
    coins = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');                                             // getContext('2d') = stellt den 2D-Renderkontext für die Zeichenoberfläche eines "canvas" dar.
        this.canvas = canvas;                                                           // Damit "canvas" nicht nur innerhalb der Funktion ist, sondern auch von außen aufgerufen werden kann.
        this.keyboard = keyboard;                                                       // Damit "keyboard" nicht nur innerhalb der Funktion ist, sondern auch von außen aufgerufen werden kann.
        this.draw();                                                                    // Die "draw" Methode wird ausgeführt.
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;                                                    // Damit können wir von der Klasse Character auf die Klasse World zugreifen.
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkCollisionsWithBottle();
            this.checkCollisionsWithCoins();
            this.checkPepeMeetsEndboss();
            this.checkIfBottleHitsEnemy();
            this.endscreen();
            this.checkCollisionsWithEndboss();
        }, 100);
    }

    checkPepeMeetsEndboss() {
        if (this.endboss.x - this.character.x <= 350) {
            this.endboss.pepeNearEndboss = true;
        }
    }


    checkThrowObjects() {
        if (this.keyboard.D && this.bottles > 0) {
            this.bottles -= 20;
            this.bottlesBar.setPercentage(this.bottles);
            console.log('Bottles noch übrig in %: ', this.bottlesBar.percentage);
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.ThrowableObjects.push(bottle);
        }
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround()) {
                    enemy.energy = 0;
                    enemy.deadChicken();
                } else if (enemy.energy > 0) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            }
        });
    }


    checkCollisionsWithBottle() {
        this.level.bottles.forEach(bottle => {
            if (this.character.isColliding(bottle) && this.bottles < 100) {
                this.bottles += 20;
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
                this.bottlesBar.setPercentage(this.bottles);
                console.log('Bottles gesammelt in %: ', this.bottlesBar.percentage);
                this.bottle.bottle_sound.play();
            }
        });
    }

    checkCollisionsWithEndboss() {
        if (this.character.isColliding(this.endboss)) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
        }
    }


    checkCollisionsWithCoins() {
        this.level.coins.forEach(coin => {
            if (this.character.isColliding(coin) && this.coins < 100) {
                this.coins += 20;
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.coinsBar.setPercentage(this.coins);
                this.coin.coin_sound.play();
                console.log('Coins gesammelt in %: ', this.coinsBar.percentage);
            }
        });
    }


    checkIfBottleHitsEnemy() {
        this.ThrowableObjects.forEach(object => {
            if (object.isColliding(this.endboss)) {
                console.log('bottle has hit end boss', this.endboss);
                this.endboss.energy -= 25;
                this.endboss.hit();
                console.log('Endboss Energy =', this.endboss.energy);
            }
        });
    }

    gameOver() {
        setTimeout(() => {
            document.getElementById('endscreen').classList.remove('d-none');
            document.getElementById('start-game').classList.add('d-none');
            document.getElementById('restart-game').classList.remove('d-none');
        }, 1000);
    }

    endscreen() {
        if (this.endboss.energy == 0 || this.character.energy == 0) {
            this.gameOver();
        }
    }


    draw() {                                                                            // Diese Methode benutzt den Context und kann dort verschiedene Methoden aufrufen um unsere Welt zu malen.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);                // "clearRect" cleart jedes mal das Canvas.

        this.ctx.translate(this.camera_x, 0);                                           // Sorgt für die Verschiebeung des Bildausschnittes. default = 0

        this.addObjectsToMap(this.level.backgroundObjects);                             // => Lädt die Bilder aus "backgroundObjects" <=

        this.addObjectsToMap(this.level.clouds);                                        // => Lädt die Bilder aus "clouds" <=

        this.ctx.translate(-this.camera_x, 0);                                          // Bildausschnitt wird zurückgesetzt. (- = Gegenteil).

        this.addToMap(this.statusBar);                                                  // => Lädt die Bilder aus "statusBar" <=

        this.addToMap(this.bottlesBar);

        this.addToMap(this.coinsBar);

        this.ctx.translate(this.camera_x, 0);                                           // Sorgt für die Verschiebeung des Bildausschnittes. default = 0

        this.addToMap(this.character);                                                  // => Lädt die Bilder aus "character" <=

        this.addObjectsToMap(this.level.enemies);                                       // => Lädt die Bilder aus "enemies" <=

        this.addToMap(this.endboss);

        this.addObjectsToMap(this.level.bottles);

        this.addObjectsToMap(this.level.coins);

        this.addObjectsToMap(this.ThrowableObjects);                                    // => Lädt die Bilder aus "ThrowableObjects" <=

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

        // mo.drawFrame(this.ctx);                                                       // Funktion für den Rectangle. Blauer Rand um die Objekte.

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