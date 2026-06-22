export let moveLeft = false;
export let moveRight = false;

export let shootRequest = false;

window.addEventListener("load", () => {

    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");
    const fireBtn = document.getElementById("fireBtn");

    leftBtn.addEventListener("touchstart", () => {
        moveLeft = true;
    });

    leftBtn.addEventListener("touchend", () => {
        moveLeft = false;
    });

    rightBtn.addEventListener("touchstart", () => {
        moveRight = true;
    });

    rightBtn.addEventListener("touchend", () => {
        moveRight = false;
    });

    fireBtn.addEventListener("click", () => {
        shootRequest = true;
    });

});

export function resetShoot(){
    shootRequest = false;
}