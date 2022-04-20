class Coin extends DrawableObject {
    x = 160;
    y = 300;
    height = 150;
    width = 150;

    constructor(path) {
        super().loadImage(path);
        this.x = Math.random() * 2400;
        this.y = 100 * Math.random();
    }
}