import { imagePreview } from './edit-picture.js';

const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

// Объявляем переменные для записи значений эффекта на слайдере
let chromeValue = '';
let sepiaValue = '';
let marvinValue = '';
let blurValue = '';
let heatValue = '';

// Слайдер от 0 до 1 с шагом 0.1
const createSlider1 = () => {
  // eslint-disable-next-line no-undef
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0); // Выводим только целую часть, 0 знаков после запятой.
        }
        return value.toFixed(1); // Если дробное число, 1 знак после запятой
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

// Слайдер от 0 до 100 с шагом 1
const createSlider2 = () => {
  // eslint-disable-next-line no-undef
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    format: {
      to: function (value) {
        return value.toFixed(0); // Выводим только целую часть, 0 знаков после запятой.
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

// Слайдер от 0 до 3 с шагом 0.1
const createSlider3 = () => {
  // eslint-disable-next-line no-undef
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0); // Выводим только целую часть, 0 знаков после запятой.
        }
        return value.toFixed(1); // Если дробное число, 1 знак после запятой
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

// Слайдер от 1 до 3 с шагом 0.1
const createSlider4 = () => {
  // eslint-disable-next-line no-undef
  noUiSlider.create(sliderElement, {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0); // Выводим только целую часть, 0 знаков после запятой.
        }
        return value.toFixed(1); // Если дробное число, 1 знак после запятой
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
}

const destroySlider = () => {
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }
};

// Обработчики событий для фильтров

effectNone.addEventListener('click', () => {
  destroySlider();
  imagePreview.classList = '';
  imagePreview.style = '';
  imagePreview.classList.add('img-upload__preview', 'effect__preview--none');
});

effectChrome.addEventListener('click', () => {
  imagePreview.classList = '';

  destroySlider();

  createSlider1();

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    chromeValue = sliderValue.value;
    imagePreview.style.filter = `grayscale(${chromeValue})`;
  });

  imagePreview.classList.add('img-upload__preview', 'effect__preview--chrome');
});

effectSepia.addEventListener('click', () => {
  imagePreview.classList = '';

  destroySlider();

  createSlider1();

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    sepiaValue = sliderValue.value;
    imagePreview.style.filter = `sepia(${sepiaValue})`;
  });


  imagePreview.classList.add('img-upload__preview', 'effect__preview--sepia');
});

effectMarvin.addEventListener('click', () => {
  imagePreview.classList = '';

  destroySlider();

  createSlider2();

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    marvinValue = sliderValue.value + '%';
    imagePreview.style.filter = `invert(${marvinValue})`;
  });

  imagePreview.classList.add('img-upload__preview', 'effect__preview--marvin');
});

effectPhobos.addEventListener('click', () => {
  imagePreview.classList = '';

  destroySlider();

  createSlider3();

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    blurValue = sliderValue.value + 'px';
    imagePreview.style.filter = `blur(${blurValue})`;
  });

  imagePreview.classList.add('img-upload__preview', 'effect__preview--phobos');
});

effectHeat.addEventListener('click', () => {
  imagePreview.classList = '';

  destroySlider();

  createSlider4();

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    heatValue = sliderValue.value;
    imagePreview.style.filter = `brightness(${heatValue})`;
  });

  imagePreview.classList.add('img-upload__preview', 'effect__preview--heat');
});

export { destroySlider };

