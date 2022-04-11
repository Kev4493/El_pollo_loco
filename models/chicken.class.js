class Chicken extends MovableObject {                                                                   // Alle Eigenschaften von "Movable Object sind in dieser Klasse/Objekt"

    y = 350;                                                                                            // Y-Koordinate an der das Chicken-IMG ausgerichtet wird. (Wert aus MovableObject überschrieben)
    height = 80;                                                                                        // Höhe des Chicken-IMG aus MovableObject überschrieben.
    width = 70;                                                                                         // Breite des Chicken-IMG aus MovableObject überschrieben.

    IMAGES_WALKING = [                                                                                  // // Lädt alle 3 Bilder unseres Chickens

        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    constructor() {                                                                                     // super() wird verwendet, wenn wir Methoden von einem übergeordneten Element aufrufen wollen.                                                                      

        super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');     // Hier wird das Bild 1 vom Chicken geladen.

        this.loadImages(this.IMAGES_WALKING);                                                            // "super()" geht nur 1x danach geht auch "this"

        this.x = 200 + Math.random() * 500;                                                              // Math.random = zufällige Zahl zw. 0 & 1 

        this.animate();
    }


    animate() {                                                                                           // ==> HIER WIRD DAS CHICKEN ANIMIERT:

        setInterval(() => {                                                                               // Hier werden alle 3 Bilder hintereinander geladen:
            let i = this.currentImage % this.IMAGES_WALKING.length;                                       // let i = 6 % 6 => 1, Rest 1     // i = 0, 1, 2, 3, 4, 5, 0, 0, 1, 2, 3, 4, 5, 0     // Wir kommen nicht an das 7. Bild, welches nicht existiert.
            let path = this.IMAGES_WALKING[i];                                                            // let path soll IMAGES_WALKING an Stelle 0 sein
            this.img = this.imageCache[path];                                                             // Das Bild aus dem IMG soll dem Bild aus dem Cache entsprechen                                                             
            this.currentImage++;                                                                          // "currentImage" wird in jedem durchgang um 1 erhöht
        }, 200);
    }


}