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

        this.speed = 0.15 + Math.random() * 0.5;                                                         // Damit die Chicken mit einer random Geschwindigkeit laufen ändern wir hier den Standartwert ab.

        this.animate();
    }


    animate() {                                                                                           // ==> HIER WIRD DAS CHICKEN ANIMIERT:

        this.moveLeft();                                                                                  // Wir rufen die Funktion aus MovableObjects auf und nutzen sie hier.

        setInterval(() => {                                                                               // Hier werden alle 3 Bilder hintereinander geladen:
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }


}