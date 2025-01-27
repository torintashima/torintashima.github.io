
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelComplete extends Phaser.Scene {

	constructor() {
		super("LevelComplete");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// enterKey
		const enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(320, 120, 400, 80);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3355443;
		rectangle_1.fillAlpha = 0.75;

		// text_1
		const text_1 = this.add.text(320, 120, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "LEVEL COMPLETE!\n\nPress Enter to move to the next level.";
		text_1.setStyle({ "align": "center", "fontFamily": "Arial" });

		this.enterKey = enterKey;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	enterKey;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.currentLevelNumber = this.registry.get('level');
	}

	update() {
		if (this.enterKey.isDown) {
			if (this.currentLevelNumber === 1) {
				this.scene.stop('Level');
				this.scene.stop('LevelComplete');
				this.scene.launch('LevelTwo');
			} else if (this.currentLevelNumber === 2) {
				this.scene.stop('LevelTwo');
				this.scene.stop('LevelComplete');
				this.scene.launch('LevelThree');
			} else {
				this.scene.stop('LevelThree');
				this.scene.stop('LevelComplete');
				this.scene.launch('LevelThree');
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
