console.log('JS Connected!');

const swing = document.getElementById('swing');
const sword = document.getElementById('sword');
const swing2 = document.getElementById('swing2');

const menu = document.getElementById('menu');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');

const swordCoordinateX = 0;
const swordCoordinateY = 0;

let hitRunning = false;
let menuRunning = false;

const openMenu = () => {
  if (menuRunning) {
    return;
  }
  menuRunning = true;
  menu2.style.transition = '0.1s';
  menu2.style.opacity = '1';
  setTimeout(() => {
    menu1.style.transition = '0.1s';
    menu1.style.opacity = '1';
  }, 100);
  setTimeout(() => {
    menu3.style.transition = '0.1s';
    menu3.style.opacity = '1';
  }, 200);
  setTimeout(() => {
    menu4.style.transition = '0.1s';
    menu4.style.opacity = '1';
  }, 30);
  menuRunning = false;
};

const closeMenu = () => {
  setTimeout(() => {
    menu2.style.opacity = '0';
    menu1.style.opacity = '0';
    menu3.style.opacity = '0';
    menu4.style.opacity = '0';
  }, 500);
};

const moveSword = (startCoordX, endCoordX, startCoordY, endCoordY) => {
  let moveX = endCoordX + startCoordX;
  let moveY = endCoordY + startCoordY;
  sword.style.left = moveX + 'rem';
  sword.style.top = moveY + 'rem';
};

const rotateSword = (value) => {
  sword.style.transform = `rotate(${value})`;
};

const swordRadius = (value) => {
  sword.style.transformOrigin = `1rem 15rem`;
  sword.style.transform = `rotateZ(${value})`;
};

const resetSword = () => {
  sword.style.transform = `rotate(0)`;
  sword.style.transformOrigin = ``;
};

const throwSword = () => {
  if (hitRunning) {
    return;
  }
  hitRunning = true;
  moveSword(0, 5, 0, 25);
  rotateSword('50deg');
  setTimeout(function () {
    moveSword(0, 55, 0, 25);
    rotateSword('1890deg');
  }, 2000);
  setTimeout(function () {
    moveSword(0, 5, 0, 25);
  }, 4000);
  setTimeout(() => {
    sword.style.transition = '0s';
    rotateSword('90deg');
  }, 4050)
  setTimeout(function () {
    sword.style.transition = '2s';
    moveSword(4, 0, 4, 0);
    rotateSword('0deg');
    hitRunning = false;
    resetSword();
  }, 6000);
};

const swingSword = () => {
  if (hitRunning) {
    return;
  }
  hitRunning = true;
  moveSword(0, 5, 0, 20);
  setTimeout(function () {
    sword.style.transition = '0.05s';
    swordRadius('90deg');
  }, 1000);
  setTimeout(function () {
    sword.style.transition = '0.05s';
    swordRadius('0deg');
  }, 1500);
  setTimeout(function () {
    sword.style.transition = '0.05s';
    swordRadius('90deg');
  }, 2000);
  setTimeout(function () {
    sword.style.transition = '0.05s';
    swordRadius('0deg');
  }, 2500);
  setTimeout(function () {
    sword.style.transition = '2s';
    moveSword(4, 0, 4, 0);
    swordRadius('0deg');
    hitRunning = false;
    resetSword();
  }, 3000);
};

swing.addEventListener('click', (e) => {
  sword.style.transition = '2s';
  throwSword();
});
swing2.addEventListener('click', (e) => {
  sword.style.transition = '2s';
  swingSword();
});

menu.addEventListener('mouseenter', (e) => {
  openMenu();
});

menu.addEventListener('mouseleave', (e) => {
  closeMenu();
});
