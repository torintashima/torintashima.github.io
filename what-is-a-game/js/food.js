function Food() {
    this.row;
    this.col;
    this.lastRow = 0;
    this.lastCol = 0;

    this.setLocation = function() {
        this.row = Math.floor(Math.random() * rows);
        this.col = Math.floor(Math.random() * cols);

        if (this.lastCol === this.col && this.lastRow === this.row) {
            //console.log("WHAT ARE THE ODDS?!");
            while (this.lastCol === this.col) {
                this.col = Math.floor(Math.random() * cols);
            }
        }

        this.lastRow = this.row;
        this.lastCol = this.col;
    }

    this.draw = function() {
        ctx.fillStyle = "hsl(270, 60%, 40%)";
        ctx.fillRect(this.col * scale, this.row * scale, scale, scale);
    }

    this.getCol = function() {
        return this.col;
    }

    this.getRow = function() {
        return this.row;
    }
}