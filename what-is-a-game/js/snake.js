function Snake() {
    this.row = 0;
    this.col = 0;
    this.direction = "Right";
    this.tail = [];
    this.score = 0;
    this.displayRow;
    this.displayCol;

    this.draw = function() {
        this.displayRow = this.row < 0 ? rows - Math.abs((this.row + 1) % rows) - 1 : this.row % rows;
        this.displayCol = this.col < 0 ? cols - Math.abs((this.col + 1) % cols) - 1 : this.col % cols;
        //console.log("(" + this.displayCol + ", " + this.displayRow + ")");

        ctx.fillStyle = "hsl(330, 80%, 40%)";

        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].col, this.tail[i].row, scale, scale);
        }

        ctx.fillRect(this.displayCol * scale, this.displayRow * scale, scale, scale);
    }

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.score - 1] = { col: this.displayCol * scale, row: this.displayRow * scale };

        if (this.direction === "Right") {
            this.col++;
        }
        if (this.direction === "Down") {
            this.row++;
        }
        if (this.direction === "Left") {
            this.col--;
        }
        if (this.direction === "Up") {
            this.row--;
        }
    }

    this.changeDirection = function(d) {
        if (this.direction === "Right" && d !== "Left") {
            this.direction = d;
        }
        if (this.direction === "Down" && d !== "Up") {
            this.direction = d;
        }
        if (this.direction === "Left" && d !== "Right") {
            this.direction = d;
        }
        if (this.direction === "Up" && d !== "Down") {
            this.direction = d;
        }
        console.log(direction);
    }

    this.eat = function(food) {
        if (this.displayCol === food.col && this.displayRow === food.row) {
            this.score++;
            return true;
        }
        return false;
    }

    this.checkCollision = function() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.displayCol * scale === this.tail[i].col && this.displayRow * scale === this.tail[i].row) {
                interval = 120;
                this.row = 0;
                this.col = 0;
                this.direction = "Right";
                this.tail = [];
                this.score = 0;

                return true;
            }
        }
    }

    this.getTailArray = function() {
        return this.tail;
    }

    this.getScore = function() {
        return this.score;
    }

    /*window.addEventListener("keydown", function(key) {
        switch(key) {
            case 37:
                this.direction = "Left";
                break;
            case 38:
                this.direction = "Up";
                break;
            case 39:
                this.direction = "Right";
                break;
            case 40:
                this.direction = "Down";
                break;
        }
    });*/
}