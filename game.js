import {
    moveLeft,
    moveRight,
    shootRequest,
    resetShoot
} from "./input.js";

import {
    drawShip,
    drawBullet,
    drawEnemy
} from "./render.js";

const board = document.getElementById("game-board");
const scoreText = document.getElementById("score");

const gameOverScreen =
document.getElementById("gameOverScreen");

const finalScore =
document.getElementById("finalScore");

const restartBtn =
document.getElementById("restartBtn");

let shipX = 180;
let shipY = 550;

let bullets = [];
let enemies = [];

let score = 0;
let gameOver = false;

restartBtn.addEventListener("click", () => {
    location.reload();
});

function spawnEnemy() {

    if(gameOver) return;

    enemies.push({
        x: Math.random() * 360,
        y: 0
    });

}

setInterval(spawnEnemy, 1500);

function update() {

    if(gameOver){
        return;
    }

    board.innerHTML = "";

    if (moveLeft)
        shipX -= 5;

    if (moveRight)
        shipX += 5;

    if (shipX < 0)
        shipX = 0;

    if (shipX > 360)
        shipX = 360;

    if (shootRequest) {

        bullets.push({
            x: shipX + 17,
            y: shipY
        });

        resetShoot();
    }

    for (let bullet of bullets) {

        bullet.y -= 8;

        drawBullet(
            board,
            bullet.x,
            bullet.y
        );
    }

    for (let enemy of enemies) {

        enemy.y += 3;

        if (
            shipX < enemy.x + 35 &&
            shipX + 40 > enemy.x &&
            shipY < enemy.y + 40 &&
            shipY + 50 > enemy.y
        ) {

            gameOver = true;

            finalScore.innerText =
            "Score: " + score;

            gameOverScreen.style.display =
            "block";

            return;
        }

        drawEnemy(
            board,
            enemy.x,
            enemy.y
        );
    }

    for (let i = bullets.length - 1; i >= 0; i--) {

        for (let j = enemies.length - 1; j >= 0; j--) {

            let bullet = bullets[i];
            let enemy = enemies[j];

            if (
                bullet &&
                enemy &&
                bullet.x < enemy.x + 35 &&
                bullet.x + 6 > enemy.x &&
                bullet.y < enemy.y + 40 &&
                bullet.y + 15 > enemy.y
            ) {

                bullets.splice(i, 1);
                enemies.splice(j, 1);

                score++;

                scoreText.innerText =
                "Score: " + score;

                break;
            }
        }
    }

    bullets = bullets.filter(
        bullet => bullet.y > -20
    );

    enemies = enemies.filter(
        enemy => enemy.y < 650
    );

    drawShip(
        board,
        shipX,
        shipY
    );

    requestAnimationFrame(update);
}

update();