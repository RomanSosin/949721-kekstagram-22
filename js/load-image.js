import { isEscEvent } from './util.js';
import { controlValue, imagePreview } from './edit-picture.js';
import { destroySlider } from './add-effect.js';

const uploadImage = document.querySelector('#upload-file');
const uploadImageOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadWindow();
  }
}

const openUploadWindow = () => {
  uploadImageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeUploadWindow = () => {
  uploadImageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadImage.value = ''; // Сбрасываем на дефолтные значения окно и картинку
  controlValue.value ='100%'; //Как сбросить на дефолт при нажатии на Enter?
  imagePreview.style = '';
  destroySlider();

  document.removeEventListener('keydown', onPopupEscKeydown);
};

uploadImage.addEventListener('change', () => {
  openUploadWindow ();
});

cancelButton.addEventListener('click', () => {
  closeUploadWindow();
});
