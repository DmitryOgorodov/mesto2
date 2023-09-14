
/**
 * *******************  Форма редактирования профиля formUserInfo   ******************
 */

const formUserInfo = document.querySelector('#formUserInfo');

const popupUserInfo = document.querySelector('#popupUserInfo');

const editButton = document.querySelector('.button__edit-profile');
const closeButton = document.querySelector('.button__close');

const nameInput = formUserInfo.querySelector('#name-field');
const jobInput = formUserInfo.querySelector('#caption-field');

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
 * *******************  Функционал добавления карточки formAddImage  *******************
 */

const formAddCard = document.querySelector('#formAddCard')

const popupAddCard = document.querySelector('#popupAddCard')

const buttonAddCard = document.querySelector('.button__add-image')
const buttonResetCard = document.querySelector('#resetCard')


buttonAddCard.addEventListener('click', () => toglePopup(popupAddCard))
buttonResetCard.addEventListener('click', () => toglePopup(popupAddCard))

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function loadCards (array) {
    array.forEach(function (e) {
      const cardTemplate = document.querySelector('#cardTemplate').content
      const cardElements = document.querySelector('.elements')
      const cardElement = cardTemplate.querySelector('.element').cloneNode(true) 
    
      cardElement.querySelector('.element__image').src = e.link
      cardElement.querySelector('.element__title').textContent = e.name

      cardElement.querySelector('.button__remove').addEventListener('click', function (evt) {
        evt.target.closest('.element').remove();
      });

      cardElement.querySelector('.button__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('button_active');
      });
    
      cardElement.querySelector('.element__image').addEventListener('click', function (evt) {
        document.querySelector('.card__picture').src = e.link
        document.querySelector('.card__caption').textContent = e.name
        document.querySelector('#popupCard').classList.toggle('popup_opened')
      })

    cardElements.prepend(cardElement);    
  }) 
}

loadCards(initialCards)

const newCard = []

function createCard () {
    const obj = {};
    obj.name = formAddCard.querySelector('#place-field').value,
    obj.link = formAddCard.querySelector('#link-field').value
    newCard.pop()
    newCard.push(obj)
}

function submitCard (evt) {
    evt.preventDefault();
    createCard();
    loadCards(newCard)
    toglePopup(popupAddCard)
}

formAddCard.addEventListener('submit', submitCard)

/**
 * Открытие попапа с картинкой */


document.querySelector('#closeCard').addEventListener('click', function () {
    document.querySelector('#popupCard').classList.toggle('popup_opened')
})