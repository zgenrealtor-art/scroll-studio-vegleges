(function(){
if(window.innerWidth < 768) return;
const cols = document.querySelectorAll('.ribbon-col');
if(!cols.length) return;

let mx = 0.5, my = 0.5;
document.addEventListener('mousemove', e => {
  mx = e.clientX / window.innerWidth;
  my = e.clientY / window.innerHeight;
});

function update(){
  cols.forEach((col, i) => {
    const isLeft = col.closest('.ribbon--left') !== null;
    const factor = isLeft ? mx : (1 - mx);
    const shiftX = (factor - 0.5) * 20 * (1 + i * 0.3);
    const shiftY = (my - 0.5) * 10 * (i % 2 === 0 ? 1 : -1);
    const skew = (factor - 0.5) * 4 * (i % 2 === 0 ? 1 : -1);
    col.style.transform = `translateX(${shiftX}px) translateY(${shiftY}px) skewY(${skew}deg)`;
  });
  requestAnimationFrame(update);
}
requestAnimationFrame(update);
})();
