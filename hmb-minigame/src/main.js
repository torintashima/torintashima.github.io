import MainMenu from "./scenes/MainMenu.js";
import Level from "./scenes/Level.js";
import LevelTwo from "./scenes/LevelTwo.js";
import LevelThree from "./scenes/LevelThree.js";
import LevelComplete from "./scenes/LevelComplete.js";
import GameComplete from "./scenes/GameComplete.js";
import GameOver from "./scenes/GameOver.js";
import Preload from "./scenes/Preload.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 640,
		height: 360,
		type: Phaser.AUTO,
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: false,
				gravity: {
					y: 0
				}
			}
		},
		render: {
			pixelArt: true,
			roundPixels: true
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("MainMenu", MainMenu);
	game.scene.add("Level", Level);
	game.scene.add("LevelTwo", LevelTwo);
	game.scene.add("LevelThree", LevelThree);
	game.scene.add("LevelComplete", LevelComplete);
	game.scene.add("GameComplete", GameComplete);
	game.scene.add("GameOver", GameOver);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}