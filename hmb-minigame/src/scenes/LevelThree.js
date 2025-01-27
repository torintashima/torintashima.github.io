
// You can write more code here

/* START OF COMPILED CODE */

import Player from "../prefabs/Player.js";
import Keg_Vertical from "../prefabs/Keg_Vertical.js";
import Keg_Horizontal from "../prefabs/Keg_Horizontal.js";
import Water from "../prefabs/Water.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelThree extends Phaser.Scene {

	constructor() {
		super("LevelThree");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// editabletilemap
		this.cache.tilemap.add("editabletilemap_766d8543-5ce6-474b-9c43-52aabc4e4b4d", {
			format: 1,
			data: {
				width: 20,
				height: 12,
				orientation: "orthogonal",
				tilewidth: 32,
				tileheight: 32,
				tilesets: [
					{
						columns: 5,
						margin: 0,
						spacing: 0,
						tilewidth: 32,
						tileheight: 32,
						tilecount: 15,
						firstgid: 1,
						image: "hmb-tiles",
						name: "hmb-tiles",
						imagewidth: 160,
						imageheight: 96,
					},
				],
				layers: [
					{
						type: "tilelayer",
						name: "layer",
						width: 20,
						height: 12,
						opacity: 1,
						data: [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 14, 14, 14, 14, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 14, 14, 1, 2, 10, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 2, 3, 14, 14, 6, 7, 7, 7, 7, 4, 12, 5, 7, 7, 4, 12, 5, 7, 7, 7, 7, 8, 14, 14, 6, 7, 7, 7, 7, 8, 14, 6, 7, 7, 8, 14, 6, 7, 7, 7, 7, 8, 14, 14, 6, 7, 7, 7, 7, 9, 2, 10, 7, 7, 9, 2, 10, 7, 7, 7, 7, 8, 14, 14, 11, 12, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 12, 13, 14, 14, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 14, 14, 14, 14, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
					},
				],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_766d8543-5ce6-474b-9c43-52aabc4e4b4d");
		editabletilemap.addTilesetImage("hmb-tiles");

		// zKey
		const zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// layer
		editabletilemap.createLayer("layer", ["hmb-tiles"], 0, 0);

		// player
		const player = new Player(this, 320, 172);
		this.add.existing(player);

		// keg_Vertical
		const keg_Vertical = new Keg_Vertical(this, 175, 75);
		this.add.existing(keg_Vertical);

		// keg_Vertical_1
		const keg_Vertical_1 = new Keg_Vertical(this, 428, 237);
		this.add.existing(keg_Vertical_1);

		// keg_Vertical_2
		const keg_Vertical_2 = new Keg_Vertical(this, 101, 156);
		this.add.existing(keg_Vertical_2);

		// keg_Vertical_3
		const keg_Vertical_3 = new Keg_Vertical(this, 479, 177);
		this.add.existing(keg_Vertical_3);

		// keg_Horizontal
		const keg_Horizontal = new Keg_Horizontal(this, 159, 211);
		this.add.existing(keg_Horizontal);

		// keg_Horizontal_1
		const keg_Horizontal_1 = new Keg_Horizontal(this, 473, 83);
		this.add.existing(keg_Horizontal_1);

		// keg_Vertical_4
		const keg_Vertical_4 = new Keg_Vertical(this, 211, 269);
		this.add.existing(keg_Vertical_4);

		// keg_Vertical_5
		const keg_Vertical_5 = new Keg_Vertical(this, 356, 108);
		this.add.existing(keg_Vertical_5);

		// rectangle_1
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_1 = this.add.rectangle(0, 0, 128, 128);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.visible = false;
		this.physics.add.existing(rectangle_1, true);
		rectangle_1.body.setSize(128, 128, false);
		rectangle_1.isFilled = true;

		// rectangle
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle = this.add.rectangle(512, 0, 128, 128);
		rectangle.setOrigin(0, 0);
		rectangle.visible = false;
		this.physics.add.existing(rectangle, true);
		rectangle.body.setSize(128, 128, false);
		rectangle.isFilled = true;

		// rectangle_2
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_2 = this.add.rectangle(0, 224, 128, 128);
		rectangle_2.setOrigin(0, 0);
		rectangle_2.visible = false;
		this.physics.add.existing(rectangle_2, true);
		rectangle_2.body.setSize(128, 128, false);
		rectangle_2.isFilled = true;

		// rectangle_3
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_3 = this.add.rectangle(512, 224, 128, 128);
		rectangle_3.setOrigin(0, 0);
		rectangle_3.visible = false;
		this.physics.add.existing(rectangle_3, true);
		rectangle_3.body.setSize(128, 128, false);
		rectangle_3.isFilled = true;

		// rectangle_4
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_4 = this.add.rectangle(0, 0, 640, 64);
		rectangle_4.setOrigin(0, 0);
		rectangle_4.visible = false;
		this.physics.add.existing(rectangle_4, true);
		rectangle_4.body.setSize(640, 64, false);
		rectangle_4.isFilled = true;

		// rectangle_5
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_5 = this.add.rectangle(0, 288, 640, 64);
		rectangle_5.setOrigin(0, 0);
		rectangle_5.visible = false;
		this.physics.add.existing(rectangle_5, true);
		rectangle_5.body.setSize(640, 64, false);
		rectangle_5.isFilled = true;

		// rectangle_6
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_6 = this.add.rectangle(0, 0, 64, 360);
		rectangle_6.setOrigin(0, 0);
		rectangle_6.visible = false;
		this.physics.add.existing(rectangle_6, true);
		rectangle_6.body.setSize(64, 360, false);
		rectangle_6.isFilled = true;

		// rectangle_7
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_7 = this.add.rectangle(576, 0, 64, 360);
		rectangle_7.setOrigin(0, 0);
		rectangle_7.visible = false;
		this.physics.add.existing(rectangle_7, true);
		rectangle_7.body.setSize(64, 360, false);
		rectangle_7.isFilled = true;

		// rectangle_8
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_8 = this.add.rectangle(192, 128, 96, 96);
		rectangle_8.setOrigin(0, 0);
		rectangle_8.visible = false;
		this.physics.add.existing(rectangle_8, true);
		rectangle_8.body.setSize(96, 96, false);
		rectangle_8.isFilled = true;

		// rectangle_9
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_9 = this.add.rectangle(352, 128, 96, 96);
		rectangle_9.setOrigin(0, 0);
		rectangle_9.visible = false;
		this.physics.add.existing(rectangle_9, true);
		rectangle_9.body.setSize(96, 96, false);
		rectangle_9.isFilled = true;

		// water
		const water = new Water(this, 725, 23);
		this.add.existing(water);

		// text_1
		const text_1 = this.add.text(320, 340, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "OOWI BREWY";
		text_1.setStyle({ "fontFamily": "Impact", "fontSize": "24px", "shadow.offsetX": 1, "shadow.offsetY": 1, "shadow.fill": true });

		// lists
		const kegs = [keg_Horizontal_1, keg_Vertical_3, keg_Vertical_1, keg_Vertical_5, keg_Vertical, keg_Vertical_4, keg_Horizontal, keg_Vertical_2];
		const walls = [rectangle_1, rectangle, rectangle_2, rectangle_3, rectangle_4, rectangle_7, rectangle_5, rectangle_6, rectangle_8, rectangle_9];

		// colliderKegsAgainstWalls
		this.physics.add.collider(kegs, walls, (keg) => { this.makeKegBounce(keg) });

		// colliderPlayerAgainstWalls
		this.physics.add.collider(player, walls);

		// colliderPlayerAgainstKegs
		this.physics.add.collider(player, kegs, (player, keg) => { this.makeKegBounce(keg); });

		// colliderKegsAgainstKegs
		this.physics.add.collider(kegs, kegs, (keg1, keg2) => { this.makeKegBounce(keg1); this.makeKegBounce(keg2); });

		// overlapWaterAgainstKegs
		this.physics.add.overlap(water, kegs, (water, keg) => { this.shortenWater(water, keg); this.cleanKeg(keg); });

		this.player = player;
		this.water = water;
		this.editabletilemap = editabletilemap;
		this.zKey = zKey;
		this.downKey = downKey;
		this.rightKey = rightKey;
		this.leftKey = leftKey;
		this.upKey = upKey;
		this.kegs = kegs;
		this.walls = walls;

		this.events.emit("scene-awake");
	}

	/** @type {Player} */
	player;
	/** @type {Water} */
	water;
	/** @type {Phaser.Tilemaps.Tilemap} */
	editabletilemap;
	/** @type {Phaser.Input.Keyboard.Key} */
	zKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	downKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey;
	/** @type {Array<Keg_Horizontal|Keg_Vertical>} */
	kegs;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	walls;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.registry.set('level', 3);

		const waterText = this.add.text(360, 20, `Water: `);
		this.waterText = waterText;

		const waterMeterBarContainer = this.add.rectangle(430, 20, 160, 20, 0x222233, 1);
		waterMeterBarContainer.setOrigin(0, 0);
		this.waterMeterBarContainer = waterMeterBarContainer;

		const waterMeterBar = this.add.rectangle(430, 20, 160, 20, 0x00bbff, 1);
		waterMeterBar.setOrigin(0, 0);
		this.waterMeterBar = waterMeterBar;

		this.timer = 60;
		this.time.addEvent({
			delay: 1000,
			callback: this.countdown,
			callbackScope: this,
			loop: true
		});

		const timerText = this.add.text(60, 20, `Time Remaining: ${this.timer}`);
		this.timerText = timerText;

		// Set initial velocities for each keg
		this.kegs.forEach(keg => {
			keg.setVelocity();
		});

		const waterMaskRect = this.add.graphics();
		waterMaskRect.fillStyle(0xffffff, 0);
		waterMaskRect.fillRect(0, 0, 96, 16);
		this.waterMaskRect = waterMaskRect;

		const waterMask = waterMaskRect.createGeometryMask();
		this.water.setMask(waterMask);

		this.everyKegCleaned = false;
	}

	countdown() {
		if (this.timer > 0) {
			this.timer--;
		} else {
			this.scene.pause('LevelThree');
			this.scene.launch('GameOver');
		}
	}

	makeKegBounce(keg) {
		if (keg.body.touching.up && keg.direction === "up") {
			keg.bounce();
		}
		if (keg.body.touching.down && keg.direction === "down") {
			keg.bounce();
		}
		if (keg.body.touching.left && keg.direction === "left") {
			keg.bounce();
		}
		if (keg.body.touching.right && keg.direction === "right") {
			keg.bounce();
		}
	}

	shortenWater(water, keg) {
		let newLength = 90;

		if (this.player.direction === "right") {
			newLength = keg.body.x-water.body.x+2;
		} else if (this.player.direction === "left") {
			newLength = (water.body.x+water.body.width)-(keg.body.x+keg.body.width)+2;
		} else if (this.player.direction === "down") {
			newLength = keg.body.y-water.body.y+2;
		} else if (this.player.direction === "up") {
			newLength = (water.body.y+water.body.height)-(keg.body.y+keg.body.height)+2;
		}

		water.currentLength = newLength;

		if (water.currentLength < water.maxLength) {
			water.shorten = true;
		} else {
			water.shorten = false;
		}
	}

	cleanKeg(keg) {
		keg.beingCleaned = true;

		if (keg.cleanliness < keg.maxCleanliness) {
			if (keg.maxCleanliness-keg.cleanliness <= 0.5) {
				keg.cleanliness = keg.maxCleanliness;
			} else {
				keg.cleanliness += 0.5;
			}
		}
	}

	update() {
		let kegsCleaned = 0;

		this.kegs.forEach(keg => {
			if (keg.cleaned) {
				kegsCleaned++;
			}
		});

		this.everyKegCleaned = kegsCleaned === this.kegs.length;

		this.kegs.forEach(keg => {
			if (!this.physics.world.overlap(this.water, keg)) {
				keg.beingCleaned = false;
			}
		});

		if (!this.physics.world.overlap(this.water, this.kegs)) {
			this.water.shorten = false;
		}

		this.waterMeterBar.scaleX = this.player.waterMeter / 100;
		this.timerText.setText(`Time Remaining: ${this.timer}`);

		if (this.everyKegCleaned) {
			if (this.player.hoseSound.isPlaying) {
				this.player.hoseSound.stop();
			}

			this.scene.pause('LevelThree');
			this.scene.launch('GameComplete');
		}

		if (this.zKey.isDown && !this.everyKegCleaned) {
			this.player.shooting = true;
		} else {
			this.player.shooting = false;
		}

		if (this.player.shooting && this.player.waterMeter > 0) {
			if (this.player.direction === "right") {
				this.waterMaskRect.clear();
				this.waterMaskRect.fillStyle(0xffffff, 0);
				if (this.water.shorten) {
					this.waterMaskRect.fillRect(this.player.x+12, this.player.y-2, this.water.currentLength+2, 16);
				} else {
					this.waterMaskRect.fillRect(this.player.x+12, this.player.y-2, 96, 16);
				}

				this.water.setPosition(this.player.x+60, this.player.y+6);
				this.water.setAngle(0);
				this.water.flipX = false;

				this.water.body.setOffset(3, 7);
				if (this.water.shorten) {
					this.water.body.setSize(this.water.currentLength, 2, false);
				} else {
					this.water.body.setSize(this.water.maxLength, 2, false);
				}
			} else if (this.player.direction === "left") {
				this.waterMaskRect.clear();
				this.waterMaskRect.fillStyle(0xffffff, 0);
				if (this.water.shorten) {
					this.waterMaskRect.fillRect(this.player.x-108+(this.water.maxLength-this.water.currentLength), this.player.y-2, this.water.currentLength+2, 16);
				} else {
					this.waterMaskRect.fillRect(this.player.x-108, this.player.y-2, 96, 16);
				}

				this.water.setPosition(this.player.x-60, this.player.y+6);
				this.water.setAngle(0);
				this.water.flipX = true;

				if (this.water.shorten) {
					this.water.body.setOffset(3+(this.water.maxLength-this.water.currentLength), 7);
					this.water.body.setSize(this.water.currentLength, 2, false);
				} else {
					this.water.body.setOffset(3, 7);
					this.water.body.setSize(this.water.maxLength, 2, false);
				}
			} else if (this.player.direction === "down") {
				this.waterMaskRect.clear();
				this.waterMaskRect.fillStyle(0xffffff, 0);
				if (this.water.shorten) {
					this.waterMaskRect.fillRect(this.player.x-8, this.player.y+12, 16, this.water.currentLength+2);
				} else {
					this.waterMaskRect.fillRect(this.player.x-8, this.player.y+12, 16, 96);
				}

				this.water.setPosition(this.player.x, this.player.y+60);
				this.water.setAngle(90);
				this.water.flipX = false;

				this.water.body.setOffset(48, -37);
				if (this.water.shorten) {
					this.water.body.setSize(2, this.water.currentLength, false);
				} else {
					this.water.body.setSize(2, this.water.maxLength, false);
				}
			} else if (this.player.direction === "up") {
				this.waterMaskRect.clear();
				this.waterMaskRect.fillStyle(0xffffff, 0);
				if (this.water.shorten) {
					this.waterMaskRect.fillRect(this.player.x-8, this.player.y-104+(this.water.maxLength-this.water.currentLength), 16, this.water.currentLength+2);
				} else {
					this.waterMaskRect.fillRect(this.player.x-8, this.player.y-104, 16, 96);
				}

				this.water.setPosition(this.player.x, this.player.y-56);
				this.water.setAngle(-90);
				this.water.flipX = false;

				if (this.water.shorten) {
					this.water.body.setOffset(48, -37+(this.water.maxLength-this.water.currentLength));
					this.water.body.setSize(2, this.water.currentLength, false);
				} else {
					this.water.body.setOffset(48, -37);
					this.water.body.setSize(2, this.water.maxLength, false);
				}
			}
		} else {
			this.water.setPosition(705, 8);
		}

		if (!(this.leftKey.isDown || this.rightKey.isDown || this.upKey.isDown || this.downKey.isDown)) {
			this.player.walking = false;
		}

		if (this.leftKey.isDown || this.rightKey.isDown) {
			if (this.leftKey.isDown && this.rightKey.isDown) {
				this.player.walking = false;
				this.player.body.velocity.x = 0;
			} else if (this.leftKey.isDown) {
				this.player.setDirection("left");
				this.player.walking = true;
				this.player.body.velocity.x = -80;
			} else if (this.rightKey.isDown) {
				this.player.setDirection("right");
				this.player.walking = true;
				this.player.body.velocity.x = 80;
			}
		} else {
			this.player.body.velocity.x = 0;
		}

		if (this.upKey.isDown || this.downKey.isDown) {
			if (this.upKey.isDown && this.downKey.isDown) {
				this.player.walking = false;
				this.player.body.velocity.y = 0;
			} else if (this.upKey.isDown) {
				this.player.setDirection("up");
				this.player.walking = true;
				this.player.body.velocity.y = -80;
			} else if (this.downKey.isDown) {
				this.player.setDirection("down");
				this.player.walking = true;
				this.player.body.velocity.y = 80;
			}
		} else {
			this.player.body.velocity.y = 0;
		}

		// Change animation key based on direction and walking properties
		this.player.updateWater();
		this.player.setAnimationKey();
		this.player.play(this.player.animationKey, true);

		// Change animation keys for kegs
		this.kegs.forEach(keg => {
			keg.setCleanedStatus();
			keg.setVelocity();
			keg.setAnimationKey();
			keg.play(keg.animationKey, true);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
