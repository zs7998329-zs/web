function showSurprise() {
  document.getElementById('surprise').classList.toggle('hidden');
  startConfetti();
}

// Simple confetti effect using canvas
function startConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const confetti = Array.from({length: 150}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    dx: Math.random() - 0.5,
    dy: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  }));
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.x += c.dx;
      c.y += c.dy;
      if (c.y > canvas.height) c.y = -10;
    });
    requestAnimationFrame(draw);
  }
  
  draw();
}
