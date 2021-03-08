const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
let imagePreview = document.querySelector('.img-upload__preview');

// Уменьшаем значение
controlSmaller.addEventListener('click', () => {
  if (controlValue.value !== '25%') {
    let newControlValue = parseInt(controlValue.value);
    controlValue.value = newControlValue - 25 + '%';
    let imageTransform = '0.' + parseInt(controlValue.value);
    imagePreview.style.transform = `scale(${imageTransform})`;
  }
});

// Увеличиваем значение
controlBigger.addEventListener('click', () => {
  if (controlValue.value !== '100%') {
    let newControlValue = parseInt(controlValue.value);
    controlValue.value = newControlValue + 25 + '%';
    let imageTransform = '0.' + parseInt(controlValue.value);
    if (imageTransform  > '0.100') {
      imagePreview.style.transform = `scale(${imageTransform})`;
    } else {
      imagePreview.style.transform = 'scale(1)';
    }
  }
});

export { controlValue, imagePreview };
