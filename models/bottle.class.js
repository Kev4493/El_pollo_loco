class Bottle extends DrawableObject {
    x = 160;
    y = 335;
    height = 90;
    width = 80;
    bottle_sound = new Audio('audio/bottle_pop.mp3');

    constructor(path) {
        super().loadImage(path);
        this.x = Math.random() * 2400;
    }
}