'use client';
import * as Phaser from 'phaser';
import { useEffect } from 'react';

const Game = () => {
	useEffect(() => {
		const config: Phaser.Types.Core.GameConfig = {
			type: Phaser.AUTO,
			width: 800,
			height: 600,
			backgroundColor: '#2d2d2d',
			parent: 'game',
		};
		const game = new Phaser.Game(config);
	}, []);

	return (
		<div>
			<h1>Game</h1>
			<div id="game"></div>
		</div>
	);
};

export default Game;
