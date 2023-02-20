import { getCssVar, getRandomInt } from './modules/helpers.min.js';

// VARS //
// MAIN //
let canvas = document.getElementById('scene');
let ch = (canvas.height = canvas.getBoundingClientRect().height);
let cw = (canvas.width = canvas.getBoundingClientRect().width);
let sceneBackground = getCssVar('--scene-background');
let context = canvas.getContext('2d');
let previousMouseCoord = { x: 0, y: 0 };
let mouseCoord = { x: 0, y: 0 };
let sceneResize = false;
let particlesCount = 0;
let particles = [];
let colors = [
  getCssVar('--particle-color-1'),
  getCssVar('--particle-color-2'),
  getCssVar('--particle-color-3'),
  getCssVar('--particle-color-4'),
  getCssVar('--particle-color-5'),
];
const dpi = 200;

let Particle = function (x, y) {
  this.x = getRandomInt(cw);
  this.y = getRandomInt(ch);
  this.coord = { x: x, y: y };
  this.r = Math.min(getRandomInt(cw / dpi) + 1, 6);
  this.vx = (Math.random() - 0.5) * 100;
  this.vy = (Math.random() - 0.5) * 100;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random() * 0.05 + 0.9;
  this.color = colors[Math.floor(Math.random() * 6)];
};

Particle.prototype.render = function (isDisableMouse) {
  this.accX = (this.coord.x - this.x) / 100;
  this.accY = (this.coord.y - this.y) / 100;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;
  this.x += this.vx;
  this.y += this.vy;
  if (!isDisableMouse) {
    let a = this.x - mouseCoord.x;
    let b = this.y - mouseCoord.y;
    var distance = Math.sqrt(a * a + b * b);
    if (distance < cw / 15) {
      this.accX = (this.x - mouseCoord.x) / 100;
      this.accY = (this.y - mouseCoord.y) / 100;
      this.vx += this.accX;
      this.vy += this.accY;
    }
  }
  context.fillStyle = this.color;
  context.beginPath();
  context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
  context.fill();
};

function onmouseCoordMove(e) {
  mouseCoord.x = e.clientX;
  mouseCoord.y = e.clientY;
}

function onTouchMove(e) {
  if (e.touches.length > 0) {
    mouseCoord.x = e.touches[0].clientX;
    mouseCoord.y = e.touches[0].clientY;
  }
}

function onTouchEnd() {
  mouseCoord.x = -9999;
  mouseCoord.y = -9999;
}

function initScene() {
  ch = canvas.height = canvas.getBoundingClientRect().height;
  cw = canvas.width = canvas.getBoundingClientRect().width;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = 'bold ' + cw / 5 + 'px sans-serif';
  context.fillStyle = sceneBackground;
  context.textAlign = 'center';
  context.fillText(text404, cw / 2, ch / 2);
  let imageData = context.getImageData(0, 0, cw, ch).data;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = 'screen';
  particles = [];
  for (let y = 0; y < ch; y += Math.round(cw / dpi)) {
    for (let x = 0; x < cw; x += Math.round(cw / dpi)) {
      if (imageData[(x + y * cw) * 4 + 3] > 128) {
        particles.push(new Particle(x, y));
      }
    }
  }
  particlesCount = particles.length;
}

function renderScene() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  let isDisableMouse = false;
  if (
    previousMouseCoord.x === mouseCoord.x &&
    previousMouseCoord.x === mouseCoord.x
  ) {
    isDisableMouse = true;
  } else {
    previousMouseCoord.x = mouseCoord.x;
    previousMouseCoord.x = mouseCoord.x;
    isDisableMouse = false;
  }
  for (let i = 0; i < particlesCount; i++) {
    particles[i].render(isDisableMouse);
  }
  requestAnimationFrame(renderScene);
}

document.addEventListener('DOMContentLoaded', function () {
  initScene();
  requestAnimationFrame(renderScene);
  window.addEventListener('mousemove', onmouseCoordMove);
  window.addEventListener('touchmove', onTouchMove);
  window.addEventListener('touchend', onTouchEnd);
  window.addEventListener('resize', function () {
    if (!sceneResize) {
      requestAnimationFrame(function () {
        initScene();
        sceneResize = false;
      });
      sceneResize = true;
    }
  });
});
