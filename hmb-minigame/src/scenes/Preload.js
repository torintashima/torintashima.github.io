
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progressBarBg
		const progressBarBg = this.add.rectangle(192, 176, 256, 32);
		progressBarBg.setOrigin(0, 0);
		progressBarBg.isFilled = true;
		progressBarBg.fillColor = 3355443;

		// progressBar
		const progressBar = this.add.rectangle(192, 176, 256, 32);
		progressBar.setOrigin(0, 0);
		progressBar.isFilled = true;
		progressBar.fillColor = 14540253;

		// loadingText
		const loadingText = this.add.text(192, 144, "", {});
		loadingText.text = "Loading assets...";
		loadingText.setStyle({ "color": "#ddd", "fontFamily": "arial", "fontSize": "20px" });

		this.progressBar = progressBar;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	progressBar;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		const width =  this.progressBar.width;

		this.load.on("progress", (progress) => {

			this.progressBar.width = progress * width;
		});
	}

	create() {

		this.scene.start("MainMenu");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
