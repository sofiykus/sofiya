const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const zagruzka = document.querySelector('.zagruzka');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
});

setTimeout(() => {
  zagruzka.remove();
}, 2000);
