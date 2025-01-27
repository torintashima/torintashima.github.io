
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// enterKey
		const enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(70, 20, 500, 320);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 15720096;

		// hmb_logo
		this.add.image(320, 80, "hmb-logo");

		// text_1
		const text_1 = this.add.text(320, 140, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Keg-Washing Minigame";
		text_1.setStyle({ "color": "#000", "fontFamily": "Arial", "fontSize": "24px", "stroke": "#000" });

		// text_2
		const text_2 = this.add.text(320, 300, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Press Enter to start game.";
		text_2.setStyle({ "color": "#000", "fontFamily": "Arial", "stroke": "#000" });

		// text_3
		const text_3 = this.add.text(320, 220, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "You have been assigned Keg Cleaning Duty.\nPress Z to shoot water.\nPress Arrow Keys to move.\nMind your water meter. It'll slowly refill itself if you're running low.\nMake sure to clean all kegs before time runs out!";
		text_3.setStyle({ "align": "center", "color": "#000", "fontFamily": "Arial", "stroke": "#000" });

		this.enterKey = enterKey;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	enterKey;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const music = this.sound.add('hmb-game-music', { loop: true });
		music.play();
	}

	update() {
		if (this.enterKey.isDown) {
			this.scene.stop('MainMenu');
			this.scene.launch('Level');
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
