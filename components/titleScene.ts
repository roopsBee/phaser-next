import * as Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
	constructor() {
		super({
			key: 'titleScene',
		});
	}
	init(data) {
		this.cameras.main.setBackgroundColor('#ff2222');
	}
	preload() {
		console.log('titleScene preload');
	}
	create(data) {}

	update(time, delta) {}
}

export default TitleScene;
