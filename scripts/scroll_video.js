document.querySelectorAll('.scroll-container').forEach(container => {
  const list = container.querySelector('.list-vid');
  const leftBtn = container.querySelector('.scroll-left');
  const rightBtn = container.querySelector('.scroll-right');

  let scrollInterval;

  function startScroll(direction) {
    clearInterval(scrollInterval); // reset if already scrolling
    scrollInterval = setInterval(() => {
      list.scrollLeft += direction * 5; // speed control
    }, 10);
  }

  function stopScroll() {
    clearInterval(scrollInterval);
  }

  leftBtn.addEventListener('mouseenter', () => startScroll(-1));
  rightBtn.addEventListener('mouseenter', () => startScroll(1));

  leftBtn.addEventListener('mouseleave', stopScroll);
  rightBtn.addEventListener('mouseleave', stopScroll);
});