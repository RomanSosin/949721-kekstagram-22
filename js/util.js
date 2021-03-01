// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Диапазон >= 0

const getRandomIntInclusive = function(min, max) {
  if (min >=0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }//Максимум и минимум включаются
  else {
    return false;
  }
};

getRandomIntInclusive(1, 10)

// Функция для проверки максимальной длины строки.

const isStringLengthValid = function(commentString, max) {
  return commentString.length > max
};

isStringLengthValid('Функция для проверки максимальной длины строки', 10);

// Функция для события с клавишей ESC

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export { getRandomIntInclusive };
export { isStringLengthValid };
export { isEscEvent };
