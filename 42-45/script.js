let i = 0;
let slider = document.querySelector('#slider');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let texts = ["Текст номер 1", "Текст номер 2", "Текст номер 3"]; 

left.addEventListener('click', func1)
function func1() {
  i--;
  if (i < 0) { 
    i = texts.length - 1;
  }
  slider.textContent = texts[i];
}

right.addEventListener('click', func2)
function func2() {
  i++;
  if (i >= 3) { 
    i = 0;
  }
  slider.textContent = texts[i];
}