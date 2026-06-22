export function drawShip(board,x,y){

const ship=document.createElement("div");

ship.className="ship";

ship.style.left=x+"px";
ship.style.top=y+"px";

board.appendChild(ship);
}

export function drawBullet(board,x,y){

const bullet=document.createElement("div");

bullet.className="bullet";

bullet.style.left=x+"px";
bullet.style.top=y+"px";

board.appendChild(bullet);
}

export function drawEnemy(board,x,y){

const enemy=document.createElement("div");

enemy.className="enemy";

enemy.style.left=x+"px";
enemy.style.top=y+"px";

board.appendChild(enemy);
}