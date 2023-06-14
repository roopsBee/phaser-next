import * as Phaser from 'phaser';
import splashScene from './splashScene';
import titleScene from './titleScene';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	backgroundColor: '#2d2d2d',
	parent: 'game',
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
		},
	},
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
};
const game = new Phaser.Game(config);

game.scene.add('splashScene', splashScene);
game.scene.add('titleScene', titleScene);
game.scene.start('splashScene');

export default game;
