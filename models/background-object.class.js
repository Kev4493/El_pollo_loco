class BackgroundObject extends MovableObject {

    width = 720;                                            // Standartbreite für BackgroundObjects.
    height = 400;                                           // Standarthöhe für die BackgroundObjects.

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }

}