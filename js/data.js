import { getRandomIntInclusive } from 'util.js';

// Создаем рандомные массивы для генерации массивов

const DESCRIPTION  = [
  'солнечный день',
  'отличная прогулка',
  'зимний лес',
  'отдыхаем вместе',
  'лучшая прогулка',
  'вместе с друзьями',
];

const NAMES = [
  'Иван',
  'Хуан',
  'Мария',
  'Ксения',
  'Виктор',
  'Юлия',
  'Люпита',
  'Борис',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createRandomDescription = (elements) => { // Перемешиваем элементы массива
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

const CREATE_PHOTO_COMMENT_COUNT = 2; //Счетчик объектов в массиве с комментариями

const CREATE_PHOTO_ARRAY_COUNT = 25; //Счетчик объектов в массиве с фото

const createCommentsArray = () => {
  const commentArray = [];
  for (let j = 1; j <= CREATE_PHOTO_COMMENT_COUNT; j++) {
    commentArray.push({
      id: j,
      avatar: 'img/avatar-' + getRandomIntInclusive(1, 4) + '.svg',
      message: createRandomDescription(COMMENTS),
      name: createRandomDescription(NAMES),
    });
  }
  return commentArray;
}

const createPhotoArray = () => {
  const photoArray = [];
  for (let i = 1; i <= CREATE_PHOTO_ARRAY_COUNT; i++) {
    photoArray.push({
      id: i,
      url: 'photos/' + i + '.jpg',
      description: createRandomDescription(DESCRIPTION),
      likes: getRandomIntInclusive(15, 200),
      comments: createCommentsArray(),
    });
  }
  return photoArray;
}

createPhotoArray();

export { DESCRIPTION, NAMES, COMMENTS };
export { createRandomDescription };
export { CREATE_PHOTO_COMMENT_COUNT, CREATE_PHOTO_ARRAY_COUNT };
export { createCommentsArray };
export { createPhotoArray };
export { photoArray }
