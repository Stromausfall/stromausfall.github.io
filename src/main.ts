import { Boot } from './scenes/Boot';
import { Game as MainGame } from './scenes/Game';

import { Game, Types } from "phaser";
import { Screen2 } from './scenes/Screen2';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 120,
    height: 80,
    parent: 'game-container',
    backgroundColor: '#028af8',
    pixelArt: true,
    antialias: false,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        MainGame,
        Screen2
    ]
};

export default new Game(config);
