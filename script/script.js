console.log('test');
// переменные
const conteinerElements = document.querySelector('.content__photos');
const templateElement = document.querySelector('.teplate__card');
//модальные окна
const popupCards = document.querySelector('.popup_type_zoom-card');
const popupCardsImage = popupCards.querySelector('.popup__container-img');
const popupCardsText = popupCards.querySelector('.popup__container-text');
// Все кнопки закрытия модальных окон
const closeButtons = document.querySelectorAll('.popup__close');

// массив
const arrayImages = [
  {
    name: 'Первый день дома',
    link: './images/первы_день.jpg',
  },
  {
    name: 'Кокос изучает обстановку',
    link: './images/котмесяц.jpg',
  },
  {
    name: 'Любопытный взгляд',
    link: './images/кот_в_домике.jpg',
  },
  {
    name: 'Сны о рыбке',
    link: './images/кот_спит.jpg',
  },
  {
    name: '5 месяцев',
    link: './images/коту_3_месяца.jpg',
  },
  {
    name: 'Новый год',
    link: './images/photo_2022-04-03_22-48-28.jpg',
  },
  {
    name: 'Хэллуин',
    link: './images/cat.jpg',
  },
  {
    name: 'Много букетов',
    link: './images/flowers.jpg',
  },
  {
    name: 'Купаться мы любим',
    link: './images/кот_в_ванной.jpg',
  },
  {
    name: '40 оттенков серого',
    link: './images/кот_в_ванной_2.jpg',
  },
  {
    name: 'Загораем',
    link: './images/кот_загорает.jpg',
  },
  {
    name: 'Большая стирка',
    link: './images/кот_в_стрильной_машине.jpg',
  },
  {
    name: 'Очень удобно!',
    link: './images/кот_спит_3.jpg',
  },
  {
    name: 'Рабочий перерыв',
    link: './images/кот_спит_4.jpg',
  },
  {
    name: 'Ландыши',
    link: './images/element__img-cat-7.jpg',
  },
  {
    name: 'Полевые цветы',
    link: './images/element__img-cat-3.jpg',
  },
  {
    name: 'Незабудки',
    link: './images/element__img-cat-8.jpg',
  },
  {
    name: 'Розы',
    link: './images/element__img-cat-4.jpg',
  },
  {
    name: 'Пионы',
    link: './images/element__img-cat-5.jpg',
  },

  {
    name: 'Ромашки',
    link: './images/element__img-cat-6.jpg',
  },
];



//  функции
//  функция рендеринга карточек
 function renderCards(addCard) {
   const newCards = arrayImages.map(addCard);
   conteinerElements.append(...newCards);
 }
 renderCards(addCard)
function addCard(item) {
  const newItem = templateElement.content.cloneNode(true);
  const newImage = newItem.querySelector('.content__photo-image');
  newImage.src = item.link;
  newImage.alt = item.name;
  const textNewImage = newItem.querySelector('.content__photo-text');
  textNewImage.textContent = item.name;
  // функция удаления карточки
  const deleteButtonElement = newItem.querySelector('.photo__delete-button');
  deleteButtonElement.addEventListener('click', deleteCard);
  function deleteCard(evt) {
    const targetEl = evt.target;
    const targetItem = targetEl.closest('.photo');
    targetItem.remove();
  }
 // функция лайка карточки
 const likeButtonElement = newItem.querySelector('.photo__like-button');
 likeButtonElement.addEventListener('click', toggleLikeElement);
 function toggleLikeElement(evt) {
  evt.target.classList.toggle('photo__like-button_activ');
 }
 // фунция открытия попапа при клике на фотографию
 function handleClicckImage() {
   popupCardsImage.src = item.link;
   popupCardsImage.alt = item.name;
   popupCardsText.textContent = item.name;
   openPopup(popupCards);
 }
 newImage.addEventListener('click', handleClicckImage);

  return newItem;
}
// функция открытия модального окна и закрытия
// функции закрытия
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
// функции открытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});
