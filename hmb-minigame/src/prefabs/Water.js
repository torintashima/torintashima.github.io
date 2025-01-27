
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Water extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 217, y ?? 59, texture || "hmb-sprites", frame ?? "water-stream00.png");

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;
		scene.physics.add.existing(this, false);
		this.body.pushable = false;
		this.body.setOffset(3, 7);
		this.body.setSize(90, 2, false);
		this.play("water-stream-body");

		/* START-USER-CTR-CODE */
		this.shorten = false;
		this.currentLength = 90;
		this.maxLength = 90;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
