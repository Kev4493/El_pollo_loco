class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundObjects) {                                       // Ich übergebe 3 Arrays aus der level.js datei und binde sie hier in den Constructor mit ein.
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}