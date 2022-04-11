class Character extends MovableObject{                                                                   // Alle Eigenschaften von "Movable Object sind in dieser Klasse/Objekt"

    y = 90;                                                                                              // Y-Koordinate an der das Character-IMG ausgerichtet wird. (Wert aus MovableObject überschrieben)
    height = 350;                                                                                        // Höhe des Character-IMG aus MovableObject überschrieben
    width = 180;                                                                                         // Breite des Character-IMG aus MovableObject überschrieben.

    IMAGES_WALKING = [                                                                                   // Lädt alle 6 Bilder unseres Characters
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png',
    ]


    constructor() {                                                                                      // Contructor Methode wird immer ausgeführt wenn ich ein Objekt erstelle

        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');   // Mit "super().loadImage()" können wir von der übergeordneten Klasse "MovableObject" das "loadImage()" aufrufen.

        this.loadImages(this.IMAGES_WALKING);                                                            // "super()" geht nur 1x danach geht auch "this"

        this.animate();
    }

    animate() {                                                                                           // ==> HIER WIRD DER CHARACTER ANIMIERT:

        setInterval(() => {                                                                               // Hier werden alle 6 Bilder hintereinander geladen:
            let i = this.currentImage % this.IMAGES_WALKING.length;                                       // let i = 7 % 6 => 1, Rest 1     // i = 0, 1, 2, 3, 4, 5, 0, 0, 1, 2, 3, 4, 5, 0     // Wir kommen nicht an das 7. Bild, welches nicht existiert.
            let path = this.IMAGES_WALKING[i];                                                            // let path soll IMAGES_WALKING an Stelle 0 sein
            this.img = this.imageCache[path];                                                             // Das Bild aus dem IMG soll dem Bild aus dem Cache entsprechen                                                             
            this.currentImage++;                                                                          // "currentImage" wird in jedem durchgang um 1 erhöht
        }, 100);
    }


    jump() {

    }
};