const canvas = document.getElementById('smileyCanvas');
const ctx = canvas.getContext('2d');
document.body.style.backgroundColor = 'lightgreen';  // 设置整个页面背景颜色为浅蓝色

// Draw face (circle)
ctx.beginPath();
ctx.arc(200, 200, 150, 0, Math.PI * 2, true);  // Outer circle
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();

// Draw eyes
ctx.beginPath();
ctx.arc(140, 150, 20, 0, Math.PI * 2, true);  // Left eye
ctx.moveTo(260, 150);
ctx.arc(260, 150, 20, 0, Math.PI * 2, true);  // Right eye
ctx.fillStyle = 'black';
ctx.fill();


// Draw mouth
ctx.beginPath();
ctx.arc(200, 220, 100, 0, Math.PI, false);  // Mouth (smile)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,250);
ctx.lineTo(200, 170);
ctx.stroke();

// Add text
ctx.font = '20px Arial';
ctx.fillText('The canvas brought me to life!', 70, 380);
