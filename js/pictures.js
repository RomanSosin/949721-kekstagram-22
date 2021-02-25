import { createCommentsArray, createPhotoArray } from 'data.js';

const pictureFragment = document.createDocumentFragment(); // Складываем сюда

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');

for (let i = 0; i < photoArray.length; i++) {
  const newPicture = newPictureTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = photoArray[i].url;
  newPicture.querySelector('.picture__likes').textContent = photoArray[i].likes;
  newPicture.querySelector('.picture__comments').textContent = photoArray[i].comments;
  pictureFragment.appendChild(newPicture);
}

export { pictureFragment };
