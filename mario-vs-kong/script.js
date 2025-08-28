const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let mario = { x: 50, y: 300, w: 40, h: 40, color: "red", dy: 0, jump: false };
let kong = { x: 700, y: 300, w: 50, h: 50, color: "brown" };
let gravity = 0.5;

function drawCharacter(char) {
  ctx.fillStyle = char.color;
  ctx.fillRect(char.x, char.y, char.w, char.h);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // chão
  ctx.fillStyle = "green";
  ctx.fillRect(0, 350, canvas.width, 50);

  // Mario física
  if (mario.jump) {
    mario.dy += gravity;
    mario.y += mario.dy;
    if (mario.y >= 300) {
      mario.y = 300;
      mario.jump = false;
      mario.dy = 0;
    }
  }

  // Desenha personagens
  drawCharacter(mario);
  drawCharacter(kong);

  requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !mario.jump) {
    mario.jump = true;
    mario.dy = -10;
  }
});

update();
