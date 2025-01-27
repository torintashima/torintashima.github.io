
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(320, 120, 400, 100);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3355443;
		rectangle_1.fillAlpha = 0.75;

		// text_1
		const text_1 = this.add.text(320, 120, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Game Over!\n\nSorry, your time has run out.\nPlease Refresh the page to try again.";
		text_1.setStyle({ "align": "center", "fontFamily": "Arial" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
