class Endboss extends MovableObject {

    height = 500;
    width = 300;
    y = -25;

    IMAGES_WALKING = [                                                                                          // Lädt alle Bilder unseres Endboss

    'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png',
    'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G6.png',
    'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G7.png',
    'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G8.png',
    'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G9.png',
    'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G10.png',
    'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G11.png',
    'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G12.png'
];

constructor() {

    super().loadImage(this.IMAGES_WALKING[0]);                                                                  // Hier wird das Bild 1 vom Endboss geladen.

    this.loadImages(this.IMAGES_WALKING);                                                                       // Hier laden wir die restlichen Bilder.

    this.x = 2500;                                                                                              // Hier wird der Endboss platziert.

    this.animate();
}

animate() {
    setInterval(() => {                                                                                          // Hier werden alle Bilder vom Endboss hintereinander geladen:
        this.playAnimation(this.IMAGES_WALKING);
    }, 200);
}


}