class Character extends MovableObject {                                                                   // Alle Eigenschaften von "Movable Object sind in dieser Klasse/Objekt"

    y = 180;                                                                                             // Y-Koordinate an der das Character-IMG ausgerichtet wird. (Wert aus MovableObject überschrieben)
    height = 250;                                                                                        // Höhe des Character-IMG aus MovableObject überschrieben
    speed = 10;                                                                                          // Speed wird überschrieben, damit Character schneller läuft.
    energy = 100;

    IMAGES_STAND = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-10.png'
    ];

    IMAGES_WALKING = [                                                                                   // Lädt alle 6 Bilder unseres Characters
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-40.png'
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-43.png'
    ];

    world;                                                                                               // Damit können wir auf die Variablen aus "world" zugreifen u.A auch auf das "keyboard"
    walking_sound = new Audio('audio/walk.mp3');


    constructor() {                                                                                      // Contructor Methode wird immer ausgeführt wenn ich ein Objekt erstelle
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png');   // Mit "super().loadImage()" können wir von der übergeordneten Klasse "MovableObject" das "loadImage()" aufrufen.

        this.loadImages(this.IMAGES_STAND);
        this.loadImages(this.IMAGES_WALKING);                                                            // "super()" geht nur 1x danach geht auch "this"
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.applyGravity();
    }

    animate() {                                                                                           // ==> HIER WIRD DER CHARACTER ANIMIERT und bewegt sich in eine Richtung:
        setInterval(() => {                                                                               // Character bewegt sich nach rechts:
            this.walking_sound.pause();

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {                     // Die Animation wird nur abgespielt, wenn die RIGHT Taste gedrückt wird.
                this.moveRight();
                this.otherDirection = false;                                                              // Beim Rechts laufen soll nicht gespiegelt werden
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {                                                 // Character bewegt sich nach links wenn LEFT gedrückt ist und X-Koordinate > 0 ist.
                this.moveLeft();                                                                          // Wir rufen die Funktion aus MovableObects auf.
                this.otherDirection = true;                                                               // Bild wird gespiegelt beim links laufen.
                this.walking_sound.play();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {                                      // Ist die Pfeiltaste nach OBEN gedrückt und unser Character ist NICHT über dem Boden?
                this.jump();                                                                               // Dann spring!
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {                                                                               // WALK ANIMATION & JUMPING ANIMATION  // Hier werden alle Bilder hintereinander geladen:
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {                                                            // Befindet sich der Character in der Luft?
                this.playAnimation(this.IMAGES_JUMPING);                                                  // Dann zeigen wir diese Animation an!
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {                           // ansonsten..  // Ist RIGHT oder LEFT gedrückt?                       
                this.playAnimation(this.IMAGES_WALKING);                                                  // Dann zeigen wir diese Animation!
            }
        }, 100);                                                                                          // Alle 50 millisekunden wird das Bild ausgetauscht => Beine des Characters bewegen sich schneller! 

        this.playStandAnimation();
    }


    playStandAnimation() {
        setInterval(() => {
            if (!this.isAboveGround() && !this.world.keyboard.LEFT && !this.world.keyboard.RIGHT) {
                this.playAnimation(this.IMAGES_STAND);
            }
        }, 200);
    }
};