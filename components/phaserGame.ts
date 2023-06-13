import * as Phaser from 'phaser';
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

export default game;
