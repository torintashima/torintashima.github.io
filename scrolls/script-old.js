const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

class Grid {
    constructor(rows = 4, cols = 4) {
        this.rows = rows;
        this.cols = cols;
        this.tiles = [];
        this.tileLength = rows > cols ? canvas.height / rows: canvas.width / cols;
    }

    drawTile(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, this.tileLength, this.tileLength);
    }

    drawTiles() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const tile = this.tiles[row][col];
                this.drawTile(tile.x, tile.y, tile.color);
            }
        }
    }

    fillGrid() {
        for (let row = 0; row < this.rows; row++) {
            const tileRow = [];
            for (let col = 0; col < this.cols; col++) {
                const value = row*this.cols + col + 1;
                const x = col*this.tileLength;
                const y = row*this.tileLength;
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                const color = `rgb(${red}, ${green}, ${blue})`;
                const newTile = new Tile(value, x, y, row, col, color);
                // Add new tile to the tile row array
                tileRow.push(newTile);
            }
            // Add row of tiles to the grid
            this.tiles.push(tileRow);
        }
    }

    moveTile(row, col, x, y) {
        const tile = this.tiles[row][col];
        tile.x = x;
        tile.y = y;
    }
}

class Tile {
    constructor(value, x, y, row, col, color) {
        this.value = value;
        // Position on the canvas
        this.x = x;
        this.y = y;
        // Position on the logical grid
        this.row = row;
        this.col = col;
        this.color = color;
    }
}

const g = new Grid(4, 4);

const init = () => {
    g.fillGrid();
    g.drawTiles();
    window.requestAnimationFrame(draw);
};

const draw = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    g.drawTiles();
    window.requestAnimationFrame(draw);
}

init();

let dragging = false;

canvas.addEventListener("mousedown", (event) => {
    dragging = true;
});

canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const row = Math.floor(mouseY / g.tileLength);
    const col = Math.floor(mouseX / g.tileLength);

    if (dragging === true) {
        g.moveTile(row, col, mouseX, mouseY);
    }
});

canvas.addEventListener("mouseup", () => {
    dragging = false;
});