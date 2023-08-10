const form = document.querySelector('.form');
const editButton = document.querySelector('.button__edit-profile');
const closeButton = document.querySelector('.button__close');
const saveButton = document.querySelector('.button__submit');
const popup = document.querySelector('.popup');
const nameInput = document.querySelector('#name-field');
const jobInput = document.querySelector('#caption-field');

function toglePopup () {
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    const profileName = document.querySelector('.profile__title');// Выберите элементы, куда должны быть вставлены значения полей
    const profileJob = document.querySelector('.profile__caption');
    
    profileName.textContent = nameInput.value;// Вставьте новые значения с помощью textContent
    profileJob.textContent = jobInput.value;
}

form.addEventListener('submit', formSubmitHandler); 

editButton.addEventListener('click', toglePopup);
closeButton.addEventListener('click', toglePopup);
saveButton.addEventListener('click', toglePopup);


