
/**
 * *******************  Форма редактирования профиля formUserInfo   ******************
 * 
 * функции:
 * - formEditHandler
 * - formSubmitHandler
 */

const formUserInfo = document.querySelector('#formUserInfo');

const popupUserInfo = document.querySelector('#popupUserInfo');

const editButton = document.querySelector('.button__edit-profile');
const closeButton = document.querySelector('.button__close');
//const saveButton = document.querySelector('.button__submit');

const nameInput = document.querySelector('#name-field');
const jobInput = document.querySelector('#caption-field');

function toglePopup (popup) {
    popup.classList.toggle('popup_opened');
}

const profileName = document.querySelector('.profile__title');// Выберите элементы, куда должны быть вставлены значения полей
const profileJob = document.querySelector('.profile__caption');

function formEditHandler () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    toglePopup(popupUserInfo);
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    
    profileName.textContent = nameInput.value;// Вставьте новые значения с помощью textContent
    profileJob.textContent = jobInput.value;
    toglePopup(popupUserInfo);
}

editButton.addEventListener('click', formEditHandler);
closeButton.addEventListener('click', () => toglePopup(popupUserInfo));
//saveButton.addEventListener('click', toglePopup);

formUserInfo.addEventListener('submit', formSubmitHandler); 


/**
 * *******************  Форма добавления карточки formAddImage  *******************
 */

const formAddImage = document.querySelector('#formAddImage')

const popupAddImage = document.querySelector('#popupAddImage')

const buttonAddImage = document.querySelector('.button__add-image')
const buttonResetCard = document.querySelector('#resetCard') 

buttonAddImage.addEventListener('click', () => toglePopup(popupAddImage))
buttonResetCard.addEventListener('click', () => toglePopup(popupAddImage))
