class Character extends MovableObject{                                                                   // Alle Eigenschaften von "Movable Object sind in dieser Klasse/Objekt"

    constructor() {                                                                                      // Contructor Methode wird immer ausgeführt wenn ich ein Objekt erstelle
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');   // Mit "super().loadImage()" können wir von der übergeordneten Klasse "MovableObject" das "loadImage()" aufrufen.
    }


    jump() {

    }
};