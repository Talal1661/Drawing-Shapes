const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(750, 400, 100, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();  