class Cloud extends MovableObject {
    y = 15;                                                                          // Y-Koordinate wird auf 100 Pixel abgeändert.
    width = 500;                                                                     // Die Breite der Wolke auf 500 Pixel abgeändert.
    height = 300;                                                                    // Die Höhe der Wolke auf 150 Pixel abgeändert.


    constructor() {                                                                   // super() wird verwendet, wenn wir Methoden von einem übergeordneten Element aufrufen wollen.                                                                      
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500;                                                 // X-Koordinate wird zufällig Pixel abgeändert.  //Math.random = zufällige Zahl zw. 0 & 1 

        this.animate();                                                               // Animationsfunktion für die Cloud wird aufgerufen.
    }

    animate() {
        this.moveLeft();                                                               // Wir rufen die Funktion aus MovableObjects auf und nutzen sie hier.
    }

}