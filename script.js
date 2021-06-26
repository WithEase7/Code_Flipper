const colors = [
  'red',
  'green',
  'blue',
  'pink',
  'yellow',
  'purple',
  'lightblue',
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
