class MovableObject {
    x = 120;                                // X-Koordinate auf 120px - Standartwert
    y = 250;                                // Y-Koordinate auf 400px - Standartwert
    img;
    height = 150;
    width = 100;


    loadImage(path) {                       // Eine Funktion um Bilder zu laden.
        this.img = new Image();             // Der Variable "img" wird ein neues Bild zugewiesen. // "this." referenziert das Objekt was erstellt wird. // Von Objekt zu Objekt kann das "img" immer einen anderen Wert enthalten. Je nach dem mit welchem Wert das Objekt erstellt wurde.
        this.img.src = path;
    }


    moveRight() {
        console.log('Moving right')
    };


    moveLeft() {

    }
}