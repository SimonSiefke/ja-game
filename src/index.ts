import * as Phaser from 'phaser'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1500, x: 0 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image('logo', '../crate.png')
}

function create() {
  const logo = this.physics.add.image(400, 100, 'logo')

  logo.setVelocity(100, 200)
  logo.setBounce(1, 0.6)
  logo.setCollideWorldBounds(true)
}
