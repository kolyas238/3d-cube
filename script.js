
let bubbles = document.querySelector('.bubbles');
let left = document.querySelector('.bubbles1');
let right = document.querySelector('.bubbles2');
let topp = document.querySelector('.bubbles3');
let bottom = document.querySelector('.bubbles4');
let rear = document.querySelector('.bubbles5');
const QTY = getRandom(100, 200); 
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
let drawBubbles = function(qty, parentEl) {
  for (let i = 0; i < qty; i++) {
    let bubble = document.createElement('div');
    let size = 2+Math.random()*27;
    let delay = -1*(2+Math.random()*3);
    bubble.classList.add('bubble');
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.background = `rgba(${getRandom(0,255)}, ${getRandom(0,255)}, ${getRandom(0,255)}, 1)` ;
    bubble.style.borderRadius = '100%';
    bubble.style.left = `${Math.floor(2*Math.random()*46)}%`;
    bubble.style.setProperty('--distance', `${2+Math.random()*100}` + '%');
    bubble.style.setProperty('--size', `${size}` + 'px');
    bubble.style.setProperty('--delay', `${delay}` + 's');
    parentEl.appendChild(bubble);
  }
}
drawBubbles(QTY, bubbles);
// drawBubbles(QTY, topp);
// drawBubbles(QTY, bottom)
drawBubbles(QTY, rear)
drawBubbles(QTY, left)
drawBubbles(QTY, right)