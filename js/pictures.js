import { photoArray, commentArray } from './data.js';

const picturesSection = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');

const pictureFragment = document.createDocumentFragment(); // Складываем сюда

for (let i = 0; i < photoArray.length; i++) {
  const newPicture = newPictureTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = photoArray[i].url;
  newPicture.querySelector('.picture__likes').textContent = photoArray[i].likes;
  newPicture.querySelector('.picture__comments').textContent = commentArray.length;
  pictureFragment.appendChild(newPicture);
}

picturesSection.appendChild(pictureFragment); // вставляем в блок .pictures

export { pictureFragment };
