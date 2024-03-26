
// Variables
const colors = ['red', 'white', 'blue', 'cyan', 'purple', 'pink'];
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var particleArray = [];

// Functions
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function init() {
  canvas.style.zIndex = "-1";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log(`Canvas Width: ${innerWidth}`);
  console.log(`Canvas Height: ${innerHeight}`);

  particleArray = [];
  for (var i = 0; i < 200; i++) {
    var radius = 1;
    var x = (Math.random() * (innerWidth - (radius * 2))) + radius;
    var y = (Math.random() * (innerHeight - (radius * 2))) + radius;
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() - 0.5) * 1;
    var color = getRandomColor();
    particleArray.push(new Particle(x, y, dx, dy, radius, color));
  }
}

function Particle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.strokeStyle = this.color;
    c.stroke();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    };
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    };

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < particleArray.length; i++) {
    var particle = particleArray[i];
    particle.update();
  }
}

// Event listener for window resize
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init(); // Reinitialize everything
});

// Initialize everything
init();
animate();


