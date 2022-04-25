const c = document.getElementById("mainGame");
const ctx = c.getContext("2d");
const scale = 20;
const rows = c.height / scale;
const cols = c.width / scale;

var score = document.getElementById("score");

var interval = 120;

var food = new Food();
var snake = new Snake();
food.setLocation();
food.draw();
snake.draw();

/*for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
        ctx.fillStyle = Math.random() > 0.5 ? "hsl(330, 80%, 40%)" : "hsl(270, 60%, 30%)";
        ctx.fillRect(scale * j, scale * i, scale, scale);
    }
}*/

window.setTimeout(game, interval);

function game() {
    if (snake.checkCollision()) {
        food.setLocation();
    }
    score.innerText = snake.getScore();
    ctx.clearRect(0, 0, c.width, c.height);
    food.draw();
    snake.update();
    snake.draw();

    if (snake.eat(food)) {
        food.setLocation();

        if (interval > 60) {
            interval -= 2;
        }
        //console.log(interval);

        var tail = snake.getTailArray();
        var foodCol = food.getCol();
        var foodRow = food.getRow();
        checkFoodLocation(tail, foodCol, foodRow);

        setTimeout(() => {
            score.style.color = "hsl(56, 90%, 60%)";
        }, 100);
        setTimeout(() => {
            score.style.color = "hsl(0, 100%, 100%)";
        }, 500);

        //score.style.animationName = "scoreUpdate";
        //score.style.animationDuration = "2s";
    }

    function checkFoodLocation(t, fc, fr) {
        for (let i = 0; i < t.length; i++) {
            if (fc * scale === t[i].col && fr * scale === t[i].row) {
                //console.log("WOAH");
                food.setLocation();

                var tail = snake.getTailArray();
                var foodCol = food.getCol();
                var foodRow = food.getRow();
                checkFoodLocation(tail, foodCol, foodRow);
            }
        }
    }

    window.addEventListener("keydown", ((e) => {
        direction = e.key.replace("Arrow", "");
        if (direction === "w") {direction = "Up"};
        if (direction === "a") {direction = "Left"};
        if (direction === "s") {direction = "Down"};
        if (direction === "d") {direction = "Right"};
        if (direction === "Right" || direction === "Down" || direction === "Left" || direction === "Up") {
            snake.changeDirection(direction);
        }
    }));

    window.setTimeout(game, interval);
};