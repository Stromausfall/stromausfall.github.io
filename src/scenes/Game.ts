import { Scene } from "phaser";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.BitmapText;

  constructor() {
    super("Game");
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x00ff00);

    this.background = this.add.image(10, 10, "pixelArt");
    this.background.setAlpha(0.5);

    this.msg_text = this.add.bitmapText(50, 50, "pixelFont", "Main Game");
    this.msg_text.setOrigin(0.5);

    // Add the button sprite
    let button = this.add.sprite(40, 20, "button").setInteractive();

    // Add a pointerdown event listener
    button.on("pointerdown", () => {
      this.scene.start("Screen2");
      console.log("Button clicked!");
    });
  }
}
