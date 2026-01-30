<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Will You Be My Valentine? 💝</title>

<style>
body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(135deg, #ffafbd, #ffc3a0);
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #ff4757;
  text-align: center;
  touch-action: manipulation;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 22px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  max-width: 92%;
}

h1, h2 {
  margin-bottom: 15px;
}

button {
  padding: 14px 28px;
  margin: 10px;
  font-size: 18px;
  border-radius: 999px;
  border: none;
  background: #ff6b6b;
  color: white;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
  transform: scale(1.08);
  box-shadow: 0 0 15px rgba(255,107,107,0.6);
}

button:active {
  transform: scale(0.95);
}

.no-btn {
  position: absolute;
}

input[type=range] {
  width: 100%;
}

.floating {
  position: fixed;
  bottom: -30px;
  font-size: 26px;
  animation: floatUp linear forwards;
  pointer-events: none;
}

@keyframes floatUp {
  to {
    transform: translateY(-110vh);
    opacity: 0;
  }
}

.confetti {
  position: fixed;
  top: -10px;
  font-size: 24px;
  animation: fall linear forwards;
  pointer-events: none;
}

@keyframes fall {
  to {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}

.hug {
  animation: hug 0.6s ease-in-out infinite alternate;
}

@keyframes hug {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}
</style>
</head>

<body>

<div class="card" id="app"></div>

<script>
const NAME = "Zoe";
const MUSIC_URL = "https://res.cloudinary.com/defnk8oak/video/upload/v1769686079/The_1975_-_About_You_Official_-_The1975VEVO_youtube_ux6cqs.mp3";
const app = document.getElementById("app");
const music = new Audio(MUSIC_URL);
music.volume = 0.5;

document.addEventListener("click", () => {
  music.play().catch(()=>{});
}, { once: true });

/* Floating hearts */
setInterval(() => {
  const e = document.createElement("div");
  e.className = "floating";
  e.textContent = Math.random() > 0.5 ? "💖" : "❤️";
  e.style.left = Math.random() * 100 + "vw";
  e.style.animationDuration = 10 + Math.random() * 10 + "s";
  document.body.appendChild(e);
  setTimeout(() => e.remove(), 20000);
}, 700);

/* Confetti */
function celebrate() {
  for (let i = 0; i < 90; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.textContent = Math.random() > 0.5 ? "💖" : "🎉";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* Evasive button */
function evasive(btn) {
  const move = () => {
    btn.style.left = Math.random() * (window.innerWidth - btn.offsetWidth) + "px";
    btn.style.top = Math.random() * (window.innerHeight - btn.offsetHeight) + "px";
  };
  btn.addEventListener("mouseenter", move);
  btn.addEventListener("touchstart", move);
}

/* Countdown */
function countdown() {
  const valentine = new Date(new Date().getFullYear(), 1, 14);
  const diff = valentine - new Date();
  const days = Math.max(0, Math.ceil(diff / (1000*60*60*24)));
  return `${days} days until Valentine’s Day 💘`;
}

/* Screens */
function screen1() {
  app.innerHTML = `
    <h1>Do you like me? 💕</h1>
    <button onclick="screen2()">Yes 😊</button>
    <button onclick="alert('I don’t like you… I LOVE you ❤️')">No 😢</button>
  `;
}

function screen2() {
  app.innerHTML = `
    <h1>How much do you love me? 💖</h1>
    <input type="range" min="0" max="100" value="50" id="range">
    <p id="text">Thisssss muchhhhh 🥰</p>
    <button onclick="screen3()">Next ❤️</button>
  `;

  const r = document.getElementById("range");
  const t = document.getElementById("text");

  r.oninput = () => {
    if (r.value > 90) t.textContent = "WOOOOW THAT MUCH?? 🚀💝";
    else if (r.value > 60) t.textContent = "To infinity and beyond 💖";
    else t.textContent = "And beyond 🥰";
  };
}

let noClicks = 0;

function screen3() {
  app.innerHTML = `
    <h1>Will you be my Valentine, baby? 💗🌹</h1>
    <button onclick="finalYes()">Yes! 💘</button>
    <button class="no-btn">No 🙈</button>
  `;

  const noBtn = document.querySelector(".no-btn");
  evasive(noBtn);

  noBtn.onclick = () => {
    noClicks++;
    if (noClicks > 2) {
      noBtn.textContent = "Yes 😳💘";
      noBtn.onclick = finalYes;
    }
  };
}

function finalYes() {
  celebrate();
  app.innerHTML = `
    <h1 class="hug">YAYYYYY 💖💖💖</h1>
    <h2>I'm the luckiest boy in the world!</h2>
    <p>Now come get your gift — a big warm hug and a huge kiss 😘</p>
    <p>${countdown()}</p>
    <div style="font-size:40px">🎁💖🤗💝💋❤️💕</div>
  `;
}

/* Start */
screen1();
</script>

</body>
</html>
