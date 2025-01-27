
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 294, y ?? 108, texture || "hmb-sprites", frame ?? "player-right00.png");

		scene.physics.add.existing(this, false);
		this.body.pushable = false;
		this.body.setOffset(8, 8);
		this.body.setSize(16, 22, false);
		this.play("player-idle-right");

		/* START-USER-CTR-CODE */
		this.direction = "right";
		this.walking = false;
		this.shooting = false;
		this.animationKey = "player-idle-right";
		this.waterMeter = 100;
		this.maxWater = 100;
		this.emptyRate = 0.2;
		this.refillRate = 0.2;
		this.hoseSound = scene.sound.add('hose-sounds', { volume: 0.3, loop: true });
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	setAnimationKey() {
		if (this.direction === "right") {
			this.flipX = false;
			this.animationKey = (this.walking) ? "player-walk-right" : "player-idle-right";
		}

		if (this.direction === "left") {
			this.flipX = true;
			this.animationKey = (this.walking) ? "player-walk-right" : "player-idle-right";
		}

		if (this.direction === "down") {
			this.flipX = false;
			this.animationKey = (this.walking) ? "player-walk-down" : "player-idle-down";
		}

		if (this.direction === "up") {
			this.flipX = false;
			this.animationKey = (this.walking) ? "player-walk-up" : "player-idle-up";
		}
	}

	setDirection(dir) {
		if (!this.shooting) {
			this.direction = dir;
		}
	}

	updateWater() {
		if (this.shooting) {
			if (this.waterMeter > 0) {
				if (this.waterMeter >= this.emptyRate) {
					this.waterMeter -= this.emptyRate;
				} else {
					this.waterMeter = 0;
				}

				if (!this.hoseSound.isPlaying) {
					this.hoseSound.play();
				}
			} else {
				if (this.hoseSound.isPlaying) {
					this.hoseSound.stop();
				}
			}
		} else {
			if (this.waterMeter < this.maxWater) {
				if (this.maxWater-this.waterMeter >= this.refillRate) {
					this.waterMeter += this.refillRate;
				} else {
					this.waterMeter = this.maxWater;
				}
			}

			if (this.hoseSound.isPlaying) {
				this.hoseSound.stop();
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
