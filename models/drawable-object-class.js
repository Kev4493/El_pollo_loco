class DrawableObject {
    img;                                                                                          // Variable um das aktuelle Bild von Character, Chicken und Cloud zu laden.
    imageCache = {};
    currentImage = 0;                                                                             // Dient dazu um die Objekte zu animieren ==> siehe animate()
    x = 120;                                                                                      // X-Koordinate auf dem Canvas - Standartwert
    y = 250;                                                                                      // Y-Koordinate auf dem Canvas - Standartwert
    height = 150;
    width = 100;


    loadImage(path) {                                                                             // Eine Funktion um Bilder zu laden.
        this.img = new Image();                                                                   // Der Variable "img" wird ein neues Bild zugewiesen. // "this." referenziert das Objekt was erstellt wird. // Von Objekt zu Objekt kann das "img" immer einen anderen Wert enthalten. Je nach dem mit welchem Wert das Objekt erstellt wurde.
        this.img.src = path;                                                                      // Wir laden "path" in die Variable (wird dann aus der Klasse Character, Chicken, Clouds... übergeben)
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);                         // Diese Zeile wird für JEDES ELEMENT aus dem jeweiligen Array ausgeführt und zeichnet die IMG's auf das Canvas
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {              // Funktion wird nur für die 3 Klassen angewendet
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    loadImages(arr) {                                                                             // Wir bekommen das Array aus loadImages übergeben (bspw. aus Character)
        arr.forEach((path) => {                                                                   // Wir iterrieren durch das Array und bekommen im ersten Durchlauf den ersten Pfad übergeben
            let img = new Image();                                                                // Wir legen eine Variable an mit einem neuen Bild an                                                               // Variable wird hier innerhalb der Funktion  definiert. Daher kein "this"
            img.src = path;                                                                       // Wir laden den Pfad in das IMG Objekt
            this.imageCache[path] = img;                                                          // ImageCache wird geuptdatet und das erste Bild aus dem Array ist nun im ersten Durchlauf im ImageCache           // "this" weil wir auf DIESE Variable oben von dem Objekt zugreifen. Nur mit "this" kann man auf Variablen außerhalb der Funktion zugreifen.
        });
    }
}