// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Диапазон >= 0

const getRandomIntInclusive = function(min, max) {
  if (min >=0 && max >= co0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }//Максимум и минимум включаются
  else {
    return false;
  }
}

// Функция для проверки максимальной длины строки.

const getCommentStringsLength = function(commentString, max) {
  if (commentString.length > max) {
    return true;
  }
  else {
    return false;
  }
}
