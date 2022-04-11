class Chicken extends MovableObject {                                                         // Alle Eigenschaften von "Movable Object sind in dieser Klasse/Objekt"

    y = 350;                                                                                  // Y-Koordinate an der das Chicken-IMG ausgerichtet wird. (Wert aus MovableObject überschrieben)
    height = 80;                                                                              // Höhe des Chicken-IMG aus MovableObject überschrieben.
    width = 70;                                                                               // Breite des Chicken-IMG aus MovableObject überschrieben.

    constructor() {                                                                           // super() wird verwendet, wenn wir Methoden von einem übergeordneten Element aufrufen wollen.                                                                      

        super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');     // Hier wird das Bild vom Chicken geladen.

        this.x = 200 + Math.random() * 500;                                                   // Math.random = zufällige Zahl zw. 0 & 1 
    }


}