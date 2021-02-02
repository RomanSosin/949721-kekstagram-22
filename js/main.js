// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Диапазон >= 0

function getRandomIntInclusive(min, max) {
  if (min >=0 && max >= 0 && max > min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }//Максимум и минимум включаются
  else {
  console.log("Введите диапазон от нуля до ...");
  }
}


// Функция для проверки максимальной длины строки.

let commentString; // Нужно указывать где-то тип данных String?

function getCommentStringsLength(commentString, max) {
	if (commentString.length > max) {
    console.log('Строка больше ' + max + ' символов')
    }
  else {
  	console.log('Строка меньше ' + max + ' символов');
  }
}
