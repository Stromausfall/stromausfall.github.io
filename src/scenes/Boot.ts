import { Scene } from 'phaser';

export class Boot extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('pixelArt', 'assets/graphic.png');

        this.load.image('button', 'assets/button.png');
        
        this.load.bitmapFont('pixelFont', 'assets/nokia16.png', 'assets/nokia16.xml');
    }

    create ()
    {
        this.scene.start('Game');
    }
}
