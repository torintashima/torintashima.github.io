const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const rows = 4;
const cols = 4;
const dragThreshold = 10;
const tiles = [];
let selectedRow = -1;
let selectedCol = -1;
let clickX = 0;
let clickY = 0;
let dragging = false;
let dragAxis = '';
let axisMoved = false;
let solved = false;
let moves = 0;

// Corrected modulo operation function
const mod = (n, m) => {
    return ((n % m) + m) % m;
};

class Tile {
    constructor(value, x, y, row, col, width, height, color) {
        this.value = value;
        this.x = mod(x, canvas.width);
        this.y = mod(y, canvas.height);
        this.row = mod(row, rows);
        this.col = mod(col, cols);
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw = () => {
        ctx.font = `${Math.round(this.width / 2)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.fillText(`${this.value}`, this.x + Math.round(this.width / 2), this.y + Math.round(this.height / 2));

        // Draw rest of the square on the other side of the canvas if part of it goes past the edge
        if (this.x + this.width > canvas.width) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x - canvas.width, this.y, this.width, this.height);
            ctx.fillStyle = "white";
            ctx.fillText(`${this.value}`, this.x - canvas.width + Math.round(this.width / 2), this.y + Math.round(this.height / 2));
        }
        if (this.y + this.height > canvas.height) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y - canvas.height, this.width, this.height);
            ctx.fillStyle = "white";
            ctx.fillText(`${this.value}`, this.x + Math.round(this.width / 2), this.y - canvas.height + Math.round(this.height / 2));
        }
    };

    moveTo = (x, y) => {
        this.x = mod(x, canvas.width);
        this.y = mod(y, canvas.height);
    };

    snapToGrid = () => {
        this.row = mod(Math.floor(Math.round(this.y / this.height)), rows);
        this.col = mod(Math.floor(Math.round(this.x / this.width)), cols);
        this.x = this.col * this.width;
        this.y = this.row * this.height;
    };

    isInRow = (row) => {
        return this.row === row;
    }

    isInCol = (col) => {
        return this.col === col;
    }
}

const fillGrid = () => {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const value = row * cols + col + 1;
            const width = canvas.width / cols;
            const height = canvas.height / rows;
            const x = col * width;
            const y = row * height;
            const red = Math.floor(Math.random() * 180);
            const green = Math.floor(Math.random() * 180);
            const blue = Math.floor(Math.random() * 180);
            const color = `rgb(${red}, ${green}, ${blue})`;
            
            const tile = new Tile(value, x, y, row, col, width, height, color);
            tiles.push(tile);
        }
    }
};

const shiftRow = (row) => {
    tiles.forEach((tile) => {
        if (tile.row === row) {
            tile.moveTo(tile.col * tile.width + tile.width, row * tile.height);
            tile.snapToGrid();
        }
    });
};

const shiftCol = (col) => {
    tiles.forEach((tile) => {
        if (tile.col === col) {
            tile.moveTo(col * tile.width, tile.row * tile.height + tile.height);
            tile.snapToGrid();
        }
    });
};

const shuffleGrid = () => {
    for (let i = 0; i < 50; i++) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);

        shiftRow(row);
        shiftCol(col);
    }
};

// Check if every tile is in order left-to-right then top-to-bottom
// If so, return true for a win
const checkForWin = () => {
    let won = true;

    // Check if grid even has at least one tile
    if (tiles.length > 0) {
        tiles.forEach((tile) => {
            // Check if expected value for a certain grid position matches with the current tile's value
            const expectedValue = tile.row * cols + tile.col + 1;
            if (tile.value !== expectedValue) {
                won = false;
            }
        });
    }

    return won;
};

const draw = () => {
    // Get adjusted tile width and height based on the current canvas size
    const tileHeight = canvas.height / rows;
    const tileWidth = canvas.width / cols;

    // Fill the background with a gray color
    ctx.fillStyle = "rgb(150,150,150)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Draw the tiles
    tiles.forEach((tile) => {
        tile.draw();
    });

    // Draw the row lines
    for (let row = 1; row < rows; row++) {
        ctx.beginPath();
        ctx.moveTo(0, tileHeight * row);
        ctx.lineTo(canvas.width, tileHeight * row);
        ctx.closePath();
        ctx.stroke();
    }

    // Draw the column lines
    for (let col = 1; col < cols; col++) {
        ctx.beginPath();
        ctx.moveTo(tileWidth * col, 0);
        ctx.lineTo(tileWidth * col, canvas.height);
        ctx.closePath();
        ctx.stroke();
    }

    // Update canvas every frame
    window.requestAnimationFrame(draw);
};

const touchStart = (event) => {
    event.preventDefault();

    dragging = true;
    const rect = canvas.getBoundingClientRect();

    // Get current canvas width and height if user resized the window
    const currentWidth = rect.right - rect.left;
    const currentHeight = rect.bottom - rect.top;

    // Get current tile width and height based on current canvas dimensions
    const tileWidth = currentWidth / cols;
    const tileHeight = currentHeight / rows;

    // Get mouse positions relative to the top-left corner of the canvas
    const mouseX = event.touches ? event.touches[0].clientX - rect.left : event.clientX - rect.left;
    const mouseY = event.touches ? event.touches[0].clientY - rect.top : event.clientY - rect.top;

    // Get ratios of assigned canvas dimensions to resized canvas dimensions
    const widthRatio = canvas.width / currentWidth;
    const heightRatio = canvas.height / currentHeight;

    clickX = mouseX * widthRatio;
    clickY = mouseY * heightRatio;

    // Update selected row and column indexes based on mouse position relative to the canvas
    selectedRow = Math.floor(mouseY / tileHeight);
    selectedCol = Math.floor(mouseX / tileWidth);

    // console.log(`Row: ${selectedRow} Col: ${selectedCol}`);
    // console.log(dragging);
};

const touchMove = (event) => {
    event.preventDefault();

    if (dragging) {
        const rect = canvas.getBoundingClientRect();

        // Get current canvas width and height if user resized the window
        const currentWidth = rect.right - rect.left;
        const currentHeight = rect.bottom - rect.top;

        // Get current tile width and height based on current canvas dimensions
        const tileWidth = currentWidth / cols;
        const tileHeight = currentHeight / rows;

        // Get ratios of assigned canvas dimensions to resized canvas dimensions
        const widthRatio = canvas.width / currentWidth;
        const heightRatio = canvas.height / currentHeight;

        // Get mouse positions relative to the top-left corner of the canvas
        const mouseX = event.touches ? (event.touches[0].clientX - rect.left) * widthRatio : (event.clientX - rect.left) * widthRatio;
        const mouseY = event.touches ? (event.touches[0].clientY - rect.top) * heightRatio : (event.clientY - rect.top) * heightRatio;

        // Get distances along both axes from where mouse was when user clicked on the canvas
        const dx = mouseX - clickX;
        const dy = mouseY - clickY;

        if (dragAxis === '') {
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > dragThreshold) {
                dragAxis = 'x';
            } else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > dragThreshold) {
                dragAxis = 'y';
            }
        }

        if (dragAxis === 'x') {
            tiles.forEach((tile) => {
                if (tile.isInRow(selectedRow)) {
                    tile.moveTo(tile.col * tile.width + dx, tile.row * tile.height);
                }
            });

            // Check if x-axis has been moved at least one tile (this is for the move counter)
            if (mod(Math.round(dx / (canvas.width / cols)), cols) !== 0) {
                axisMoved = true;
            } else {
                axisMoved = false;
            }
        }

        if (dragAxis === 'y') {
            tiles.forEach((tile) => {
                if (tile.isInCol(selectedCol)) {
                    tile.moveTo(tile.col * tile.width, tile.row * tile.height + dy);
                }
            });

            // Check if y-axis has been moved at least one tile (this is for the move counter)
            if (mod(Math.round(dy / (canvas.height / rows)), rows) !== 0) {
                axisMoved = true;
            } else {
                axisMoved = false;
            }
        }
    }
};

const touchEnd = (event) => {
    event.preventDefault();

    if (dragging && axisMoved && !solved) {
        moves++;
    }

    tiles.forEach((tile) => {
        tile.snapToGrid();
    });
    // console.log(`${tile.row}, ${tile.col}`);

    // Check if grid is solved
    if (!solved) {
        solved = checkForWin();

        if (dragging && solved) {
            window.alert(`Congratulations! You solved the puzzle in ${moves} moves!`);
        }
    }

    // Reset boolean variables to false
    dragging = false;
    axisMoved = false;

    // Reset selected row and column back to -1
    selectedRow = -1;
    selectedCol = -1;

    // Reset click points back to 0
    clickX = 0;
    clickY = 0;

    // Reset drag axis back to blank
    dragAxis = '';

    // Display number of moves
    const moveDiv = document.getElementById("moves");
    moveDiv.innerText = moves;
};

const init = () => {
    fillGrid();
    shuffleGrid();
    draw();
};

canvas.addEventListener("mousedown", touchStart);
canvas.addEventListener("touchstart", touchStart);

document.addEventListener("mousemove", touchMove);
document.addEventListener("touchmove", touchMove);

document.addEventListener("mouseup", touchEnd);
document.addEventListener("touchend", touchEnd);

init();