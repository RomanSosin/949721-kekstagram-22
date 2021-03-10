import { imagePreview, controlValue } from './edit-picture.js';

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

// Объявляем переменные для записи значений эффекта на слайдере
let chromeValue = '';
let sepiaValue = '';
let marvinValue = '';
let blurValue = '';
let heatValue = '';

const arraySlider = [
  // Слайдер от 0 до 1 с шагом 0.1
  {
    element: '#effect-chrome',
    class: 'effect__preview--chrome',
    currentSliderValue: chromeValue,
    effect: 'grayscale',
    suffix: '',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  // Слайдер от 0 до 1 с шагом 0.1
  {
    element: '#effect-sepia',
    class: 'effect__preview--sepia',
    currentSliderValue: sepiaValue,
    effect: 'sepia',
    suffix: '',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  // Слайдер от 0 до 100 с шагом 1
  {
    element: '#effect-marvin',
    class: 'effect__preview--marvin',
    currentSliderValue: marvinValue,
    effect: 'invert',
    suffix: '%',
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  // Слайдер от 0 до 3 с шагом 0.1
  {
    element: '#effect-phobos',
    class: 'effect__preview--phobos',
    currentSliderValue: blurValue,
    effect: 'blur',
    suffix: 'px',
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },

  // Слайдер от 1 до 3 с шагом 0.1
  {
    element: '#effect-heat',
    class: 'effect__preview--heat',
    currentSliderValue: heatValue,
    effect: 'brightness',
    suffix: '',
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
];

const destroySlider = () => {
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }
};

// Отсутствие эффекта

document.querySelector('#effect-none').addEventListener('click', () => {
  destroySlider();
  imagePreview.className = '';
  imagePreview.style = '';
  controlValue.value = '100%';
  imagePreview.classList.add('img-upload__preview', 'effect__preview--none');
});

// Обработчики событий для фильтров

arraySlider.forEach((item) => {
  document.querySelector(item.element).addEventListener('click', () => {
    imagePreview.className = '';

    destroySlider();

    // eslint-disable-next-line no-undef
    noUiSlider.create(sliderElement, {
      range: item.range,
      start: item.start,
      step: item.step,
    });

    sliderElement.noUiSlider.on('update', (values, handle) => {
      sliderValue.value = values[handle];
      item.currentSliderValue = sliderValue.value + item.suffix;
      imagePreview.style.filter = item.effect + '(' + item.currentSliderValue + ')';
    });

    imagePreview.classList.add('img-upload__preview', item.class);
  });
});

export { destroySlider };
