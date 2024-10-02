import { Scene } from 'phaser';

export class Screen2 extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.BitmapText;

    constructor ()
    {
        super('Screen2');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x3300AA);


        this.msg_text = this.add.bitmapText(50, 50, 'pixelFont', 'Screen2');
        this.msg_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
