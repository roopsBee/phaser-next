import * as Phaser from 'phaser';

class SplashScene extends Phaser.Scene {
	constructor() {
		super({
			key: 'splashScene',
		});
	}
	init(data) {
		this.cameras.main.setBackgroundColor('#ff2222');
	}
	preload() {
		console.log('splashScene preload');
	}
	create(data) {}

	update(time, delta) {}
}

export default SplashScene;
