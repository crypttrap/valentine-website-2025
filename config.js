<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For You ❤️</title>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap" rel="stylesheet">
<style>
/* --- CSS STYLES --- */
:root { --pink: #ff8fa3; --red: #ff4d6d; --bg: #fff0f3; }
body {
  margin: 0; height: 100vh; overflow: hidden;
  font-family: 'Nunito', sans-serif;
  background: radial-gradient(circle at center, var(--bg), #ffccd5);
  display: flex; align-items: center; justify-content: center;
  flex-direction: column;
}
.card {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px; border-radius: 25px;
  box-shadow: 0 10px 30px rgba(255, 77, 109, 0.2);
  text-align: center; max-width: 90%; width: 400px;
  z-index: 2;
}
.gif-container { height: 200px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; }
img { max-height: 100%; max-width: 100%; border-radius: 15px; }
h1 { color: var(--red); font-size: 26px; margin: 10px 0; }
p { color: #590d22; font-size: 18px; margin-bottom: 20px; line-height: 1.5; }
.btn-group { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
button {
  padding: 12px 25px; font-size: 18px; font-weight: 800;
  border: none; border-radius: 50px; cursor: pointer;
  transition: all 0.2s; box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.btn-yes { background: var(--pink); color: white; }
.btn-yes:hover { background: var(--red); transform: scale(1.1); }
.btn-no { background: #fff; color: var(--pink); border: 2px solid var(--pink); position: relative; }
input[type=range] { width: 100%; accent-color: var(--red); margin: 20px 0; }
.heart-trail {
  position: fixed; pointer-events: none; font-size: 20px;
  animation: fadeUp 1s forwards; z-index: 1;
}
@keyframes fadeUp { to { transform: translateY(-40px) scale(1.5); opacity: 0; } }
#overlay {
  position: fixed; inset: 0; background: rgba(255,240,243,0.98);
  z-index: 10; display: flex; align-items: center; justify-content: center;
  flex-direction: column;
}
.start-btn { background: var(--red); color: white; margin-top: 20px; animation: pulse 1.5s infinite; }
@keyframes pulse { 0%{transform:scale(1)} 50%{transform:scale(1.05)} 100%{transform:scale(1)} }
</style>
</head>
<body>

<audio id="bgm" loop>
  <source src="https://res.cloudinary.com/defnk8oak/video/upload/v1769686079/The_1975_-_About_You_Official_-_The1975VEVO_youtube_ux6cqs.mp3" type="audio/mpeg">
</audio>

<div id="overlay">
  <div class="gif-container" style="height:150px">
    <img src="https://media1.tenor.com/m/0u_qxe2d-WkAAAAC/hearts-love-happy-valentines-day.gif" alt="Welcome">
  </div>
  <h2 style="color:var(--red)">Hi <span id="name-placeholder"></span>! 👋</h2>
  <p>I made something for you...</p>
  <button class="start-btn" onclick="startApp()">Tap to Open 💌</button>
</div>

<div class="card" id="app"></div>

<script>
const PERSON_NAME = "Zoe"; 

const gifs = {
  hi: "https://media1.tenor.com/m/_ocDyJ8kXv0AAAAC/hi-hi-there.gif",
  love: "https://media1.tenor.com/m/otxQihuAgMAAAAAC/lowkey-pondering.gif",
  please: "https://media1.tenor.com/m/zGm5acSjHCIAAAAC/cat-begging.gif",
  kiss: "https://media1.tenor.com/m/IBxdvql1Mk0AAAAC/cat-kiss.gif"
};

const app = document.getElementById('app');
const overlay = document.getElementById('overlay');
const bgm = document.getElementById('bgm');
document.getElementById('name-placeholder').innerText = PERSON_NAME;

function startApp() {
  overlay.style.display = 'none';
  bgm.volume = 0.4;
  bgm.play().catch(()=>{});
  screen1();
}

function screen1() {
  app.innerHTML = `
    <div class="gif-container"><img src="${gifs.hi}"></div>
    <h1>Hey ${PERSON_NAME}! 💕</h1>
    <p>I have a very important question...</p>
    <button class="btn-yes" onclick="screen2()">What is it? 🤭</button>
  `;
}

function screen2() {
  app.innerHTML = `
    <div class="gif-container"><img src="${gifs.love}"></div>
    <h1>How much do you love me? 🥺</h1>
    <input type="range" min="1" max="100" value="50" oninput="checkVal(this.value)">
    <p id="slider-text">This much!</p>
    <button class="btn-yes" onclick="screen3()">Next 👉</button>
  `;
}

function checkVal(val) {
  const t = document.getElementById('slider-text');
  if(val<40) t.innerText="Too low! 😢";
  else if(val<80) t.innerText="Higher... 😤";
  else t.innerText="TO THE MOON! 🚀❤️";
}

let noCount = 0;
function screen3() {
  app.innerHTML = `
    <div class="gif-container"><img src="${gifs.please}"></div>
    <h1>Will you be my Valentine? 🌹</h1>
    <div class="btn-group">
      <button class="btn-yes" onclick="celebrate()">YESSS! 💖</button>
      <button class="btn-no" id="noBtn" onmouseover="moveNo()" onclick="moveNo()">No 🙈</button>
    </div>
  `;
}

function moveNo() {
  const btn = document.getElementById('noBtn');
  btn.style.position = 'fixed';
  btn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
  btn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
  if(++noCount > 3) {
    btn.innerText = "Okay YES 🙄❤️";
    btn.classList.add('btn-yes'); btn.classList.remove('btn-no');
    btn.onclick = celebrate;
  }
}

function celebrate() {
  app.innerHTML = `
    <div class="gif-container"><img src="${gifs.kiss}"></div>
    <h1>YAYYY! 🎉</h1>
    <p>You've made me the luckiest boy alive. I can't wait to spend every second of the 14th making you feel as special as you are to me. ❤️</p>
  `;
  setInterval(()=>{
    const h = document.createElement('div');
    h.className = 'heart-trail'; h.innerText = '💝';
    h.style.left = Math.random()*100+'vw'; h.style.top = '100vh';
    h.style.animationDuration = Math.random()*2+1+'s';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }, 200);
}

// Mouse Trail
document.addEventListener('mousemove', (e) => {
  const h = document.createElement('div');
  h.className = 'heart-trail'; h.innerText = '💕';
  h.style.left = e.pageX+'px'; h.style.top = e.pageY+'px';
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),1000);
});
</script>
</body>
</html>
