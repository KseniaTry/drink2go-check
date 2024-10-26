/* в этот файл добавляет скрипты*/

// бургер выпадающего меню на версии mobile
const navMain = document.querySelector('.main-header__nav');
const openButton = document.querySelector('.main-header__toggle');

// navMain.classList.remove('main-header__nav--nojs');

openButton.onclick = function() {
  navMain.classList.toggle('main-header__nav--opened');
};

// слайдер выбора цены
const filterSlider = document.querySelector('.filter__slider');

const createSlider = () => {
  noUiSlider.create(filterSlider, {
    range: {
      min: 0,
      max: 900,
    },
    start: [0, 750],
    step: 1,
    connect: true,
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
};

createSlider();
