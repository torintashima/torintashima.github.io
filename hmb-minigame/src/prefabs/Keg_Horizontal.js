
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Keg_Horizontal extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 316, y ?? 107, texture || "hmb-sprites", frame ?? "keg-clean00.png");

		scene.physics.add.existing(this, false);
		this.body.pushable = false;
		this.body.setOffset(4, 17);
		this.body.setSize(24, 14, false);
		this.play("keg-clean-horizontal");

		/* START-USER-CTR-CODE */
		this.direction = "down";
		this.cleanliness = 0;
		this.maxCleanliness = 100;
		this.cleaned = false;
		this.beingCleaned = false;
		this.animationKey = "keg-very-dirty-horizontal";
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	setAnimationKey() {
		if (this.cleanliness === this.maxCleanliness) {
			this.animationKey = "keg-clean-horizontal";
		} else if (this.cleanliness >= this.maxCleanliness * 0.6) {
			this.animationKey = "keg-slightly-dirty-horizontal";
		} else if (this.cleanliness >= this.maxCleanliness * 0.3) {
			this.animationKey = "keg-dirty-horizontal";
		} else {
			this.animationKey = "keg-very-dirty-horizontal";
		}
	}

	setVelocity() {
		if (!this.beingCleaned && !this.cleaned) {
			if (this.direction === "down") {
				this.body.velocity.y = 60;
			} else if (this.direction === "up") {
				this.body.velocity.y = -60;
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
		if (this.direction === "down") {
			this.direction = "up";
		} else if (this.direction === "up") {
			this.direction = "down";
		}

		this.setVelocity();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
