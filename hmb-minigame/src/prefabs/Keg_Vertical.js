
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Keg_Vertical extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 294, y ?? 88, texture || "hmb-sprites", frame ?? "keg-clean05.png");

		scene.physics.add.existing(this, false);
		this.body.pushable = false;
		this.body.setOffset(8, 12);
		this.body.setSize(16, 20, false);
		this.play("keg-clean-vertical");

		/* START-USER-CTR-CODE */
		this.direction = "right";
		this.cleanliness = 0;
		this.maxCleanliness = 100;
		this.cleaned = false;
		this.beingCleaned = false;
		this.animationKey = "keg-very-dirty-vertical";
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	setAnimationKey() {
		if (this.cleanliness === this.maxCleanliness) {
			this.animationKey = "keg-clean-vertical";
		} else if (this.cleanliness >= this.maxCleanliness * 0.6) {
			this.animationKey = "keg-slightly-dirty-vertical";
		} else if (this.cleanliness >= this.maxCleanliness * 0.3) {
			this.animationKey = "keg-dirty-vertical";
		} else {
			this.animationKey = "keg-very-dirty-vertical";
		}
	}

	setVelocity() {
		if (!this.beingCleaned && !this.cleaned) {
			if (this.direction === "right") {
				this.body.velocity.x = 60;
			} else if (this.direction === "left") {
				this.body.velocity.x = -60;
			}
		} else {
			this.body.velocity.y = 0;
			this.body.velocity.x = 0;
		}
	}

	setCleanedStatus() {
		if (this.cleanliness === this.maxCleanliness) {
			this.cleaned = true;
		} else {
			this.cleaned = false;
		}
	}

	bounce() {
		if (this.direction === "right") {
			this.direction = "left";
		} else if (this.direction === "left") {
			this.direction = "right";
		}

		this.setVelocity();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
