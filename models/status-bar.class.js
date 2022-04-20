class Statusbar extends DrawableObject {
    IMAGES;

    percentage = 100;

    constructor(images, x, y, percentage) {
        super();
        this.IMAGES = images;
        this.loadImages(this.IMAGES)
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 60;
        this.setPercentage(percentage);
    }

    // setPercentage(50);
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];                                                         // Das Bild aus dem IMG soll dem Bild aus dem Cache entsprechen
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
