class Character extends MovableObject{                                                                   // Alle Eigenschaften von "Movable Object sind in dieser Klasse/Objekt"

    y = 180;                                                                                              // Y-Koordinate an der das Character-IMG ausgerichtet wird. (Wert aus MovableObject überschrieben)
    height = 250;                                                                                        // Höhe des Character-IMG aus MovableObject überschrieben
    speed = 10;                                                                                          // Speed wird überschrieben, damit Character schneller läuft.

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
    ]

    world;                                                                                               // Damit können wir auf die Variablen aus "world" zugreifen u.A auch auf das "keyboard"
    walking_sound = new Audio('audio/walk.mp3');


    constructor() {                                                                                      // Contructor Methode wird immer ausgeführt wenn ich ein Objekt erstelle

        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');   // Mit "super().loadImage()" können wir von der übergeordneten Klasse "MovableObject" das "loadImage()" aufrufen.

        this.loadImages(this.IMAGES_WALKING);                                                            // "super()" geht nur 1x danach geht auch "this"

        this.loadImages(this.IMAGES_JUMPING);

        this.applyGravity();

        this.animate();
    }

    animate() {                                                                                           // ==> HIER WIRD DER CHARACTER ANIMIERT:

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

            this.world.camera_x = -this.x +100;
        }, 1000 / 60);


        setInterval(() => {                                                                               // WALK ANIMATION & JUMPING ANIMATION  // Hier werden alle Bilder hintereinander geladen:

            if(this.isAboveGround()) {                                                                    // Befindet sich der Character in der Luft?
                this.playAnimation(this.IMAGES_JUMPING);                                                  // Dann zeigen wir diese Animation an!
            } else {                                                                                      // ansonsten..
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {                              // Ist RIGHT oder LEFT gedrückt?
                    this.playAnimation(this.IMAGES_WALKING);                                              // Dann zeigen wir diese Animation!
                }
            }
        }, 50);                                                                                           // Alle 50 millisekunden wird das Bild ausgetauscht => Beine des Characters bewegen sich schneller! 
    }


    jump() {
        this.speedY = 30;
    }
};