var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/mar.png');

    //carregar o logo
    this.load.image('logo', 'assets/logointeli.png');

    //carregar o peixe
    this.load.image('peixe', 'assets/peixeverde.png');

    //carregar o image
    this.load.image('image', 'assets/image.png');
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(400, 100, 'image').setScale(1.5);

    
    //guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    //transformando a variável
    peixinho.setFlip(true, false);
}

function update() {

    //adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}


