class BackgroundObject extends MovableObject {

    width = 720;                                            // Standartbreite für BackgroundObjects.
    height = 400;                                           // Standarthöhe für die BackgroundObjects.

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;                                         // Die X-Koordinate, an der das BackgroundObject ausgerichtet wird. (Standartwert übergeben aus World)
        this.y = 480 - this.height;                         // Die Y-Koordinate, an der das BackgroundObject ausgerichtet wird.
    }

}