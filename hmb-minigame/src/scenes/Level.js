
// You can write more code here

/* START OF COMPILED CODE */

import Player from "../prefabs/Player.js";
import Keg_Horizontal from "../prefabs/Keg_Horizontal.js";
import Keg_Vertical from "../prefabs/Keg_Vertical.js";
import Water from "../prefabs/Water.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// zKey
		const zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// editabletilemap
		this.cache.tilemap.add("editabletilemap_4ff7a416-fdf7-44cc-88f1-8ee0af697a17", {
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
						data: [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 14, 14, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
					},
				],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_4ff7a416-fdf7-44cc-88f1-8ee0af697a17");
		editabletilemap.addTilesetImage("hmb-tiles");

		// layer
		editabletilemap.createLayer("layer", ["hmb-tiles"], 0, 0);

		// player
		const player = new Player(this, 320, 180);
		this.add.existing(player);

		// keg_Horizontal
		const keg_Horizontal = new Keg_Horizontal(this, 485, 221);
		this.add.existing(keg_Horizontal);

		// keg_Vertical
		const keg_Vertical = new Keg_Vertical(this, 399, 109);
		this.add.existing(keg_Vertical);

		// keg_Horizontal_2
		const keg_Horizontal_2 = new Keg_Horizontal(this, 273, 169);
		this.add.existing(keg_Horizontal_2);

		// keg_Vertical_1
		const keg_Vertical_1 = new Keg_Vertical(this, 239, 275);
		this.add.existing(keg_Vertical_1);

		// keg_Horizontal_1
		const keg_Horizontal_1 = new Keg_Horizontal(this, 131, 105);
		this.add.existing(keg_Horizontal_1);

		// rectangle_1
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_1 = this.add.rectangle(0, 0, 640, 64);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.visible = false;
		this.physics.add.existing(rectangle_1, true);
		rectangle_1.body.moves = false;
		rectangle_1.body.allowGravity = false;
		rectangle_1.body.allowDrag = false;
		rectangle_1.body.allowRotation = false;
		rectangle_1.body.pushable = false;
		rectangle_1.body.setSize(640, 64, false);
		rectangle_1.isFilled = true;

		// rectangle
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle = this.add.rectangle(0, 320, 640, 64);
		rectangle.setInteractive(new Phaser.Geom.Rectangle(0, 0, 640, 64), Phaser.Geom.Rectangle.Contains);
		rectangle.setOrigin(0, 0);
		rectangle.visible = false;
		this.physics.add.existing(rectangle, true);
		rectangle.body.moves = false;
		rectangle.body.allowGravity = false;
		rectangle.body.allowDrag = false;
		rectangle.body.allowRotation = false;
		rectangle.body.pushable = false;
		rectangle.body.setSize(640, 64, false);
		rectangle.isFilled = true;

		// rectangle_2
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_2 = this.add.rectangle(0, 0, 64, 360);
		rectangle_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 360), Phaser.Geom.Rectangle.Contains);
		rectangle_2.setOrigin(0, 0);
		rectangle_2.visible = false;
		this.physics.add.existing(rectangle_2, true);
		rectangle_2.body.moves = false;
		rectangle_2.body.allowGravity = false;
		rectangle_2.body.allowDrag = false;
		rectangle_2.body.allowRotation = false;
		rectangle_2.body.pushable = false;
		rectangle_2.body.setSize(64, 360, false);
		rectangle_2.isFilled = true;

		// rectangle_3
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.StaticBody }} */
		const rectangle_3 = this.add.rectangle(576, 0, 64, 360);
		rectangle_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 360), Phaser.Geom.Rectangle.Contains);
		rectangle_3.setOrigin(0, 0);
		rectangle_3.visible = false;
		this.physics.add.existing(rectangle_3, true);
		rectangle_3.body.moves = false;
		rectangle_3.body.allowGravity = false;
		rectangle_3.body.allowDrag = false;
		rectangle_3.body.allowRotation = false;
		rectangle_3.body.pushable = false;
		rectangle_3.body.setSize(64, 360, false);
		rectangle_3.isFilled = true;

		// water
		const water = new Water(this, 705, 8);
		this.add.existing(water);

		// text_1
		const text_1 = this.add.text(320, 340, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "OOWI BREWY";
		text_1.setStyle({ "fontFamily": "Impact", "fontSize": "24px", "shadow.offsetX": 1, "shadow.offsetY": 1, "shadow.fill": true });

		// lists
		const kegs = [keg_Horizontal, keg_Vertical, keg_Horizontal_2, keg_Horizontal_1, keg_Vertical_1];
		const walls = [rectangle_1, rectangle, rectangle_2, rectangle_3];

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
		this.zKey = zKey;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.downKey = downKey;
		this.editabletilemap = editabletilemap;
		this.kegs = kegs;
		this.walls = walls;

		this.events.emit("scene-awake");
	}

	/** @type {Player} */
	player;
	/** @type {Water} */
	water;
	/** @type {Phaser.Input.Keyboard.Key} */
	zKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	downKey;
	/** @type {Phaser.Tilemaps.Tilemap} */
	editabletilemap;
	/** @type {Array<Keg_Horizontal|Keg_Vertical>} */
	kegs;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	walls;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.registry.set('level', 1);

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
			this.scene.pause('Level');
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

			this.scene.pause('Level');
			this.scene.launch('LevelComplete');
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
