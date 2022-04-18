class Bottle extends DrawableObject {
    x = 160;
    y = 335;
    height = 90;
    width = 80;

    constructor(path) {
        super().loadImage(path);
        this.x = Math.random() * 2400;
    }
}