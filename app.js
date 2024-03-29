// /selecting elements
/*const value = document.querySelector('.value');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const decrease = document.querySelector('.decrease');

let count = 0;

increase.addEventListener('click', function (e) {
  e.preventDefault();
  count++;
  value.textContent = count;
});

reset.addEventListener('click', function (e) {
  e.preventDefault();
  count = 0;
  value.textContent = count;
});

decrease.addEventListener('click', function (e) {
  e.preventDefault();
  if (count <= 0) {
    count = 0;
    value.textContent = count;
  } else {
    count--;
    value.textContent = count;
  }
});
*/

// another approach

count = 0;

// select elements
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const style = e.currentTarget.classList;
    if (style.contains('decrease')) {
      count--;
    } else if (style.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#fff';
    }
    value.textContent = count;
  });
});
