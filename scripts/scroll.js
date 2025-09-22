document.querySelectorAll('.scroll-container').forEach(container => {
  const list = container.querySelector('.list');
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




// const list = document.querySelector('.list');
// let scrollInterval;

// document.querySelector('.scroll-left').addEventListener('mouseenter', () => {
//   scrollInterval = setInterval(() => {
//     list.scrollLeft -= 5;
//   }, 10);
// });

// document.querySelector('.scroll-right').addEventListener('mouseenter', () => {
//   scrollInterval = setInterval(() => {
//     list.scrollLeft += 5;
//   }, 10);
// });

// document.querySelector('.scroll-left').addEventListener('mouseleave', () => {
//   clearInterval(scrollInterval);
// });

// document.querySelector('.scroll-right').addEventListener('mouseleave', () => {
//   clearInterval(scrollInterval);
// });
