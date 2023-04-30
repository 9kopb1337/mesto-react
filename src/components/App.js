import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import '../pages/index.css';

//Доделать APP 

export default function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isCardOpen, setCardOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setCardOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setCardOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClickClose={closeAllPopups}>
        <label className="popup__form">
        <input id="name-input" name="name" className="popup__input popup__input_type_name" type="text"
          placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="name-input-error popup__item-error"></span>
        <input id="description-input" name="about" className="popup__input popup__input_type_description"
          placeholder="Описание" type="text" minLength="2" maxLength="40" required />
        <span className="description-input-error popup__item-error"></span>
        </label>
      </PopupWithForm> 
      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClickClose={closeAllPopups}>
        <label className="popup__form">
        <input id="text-input" name="name" className="popup__input popup__input_type_name"
          placeholder="Название" type="text" minLength="2" maxLength="30" required />
        <span className="text-input-error popup__item-error"></span>
        <input id="url-input-card" name="link" className="popup__input popup__input_type_description"
          placeholder="Ссылка на картинку" type="url" required />
        <span className="url-input-card-error popup__item-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClickClose={closeAllPopups}>
        <label className="popup__form">
        <input id="avatar-input" name="avatar" className="popup__input popup__input_type_description"
          placeholder="Ссылка на картинку" type="url" required />
        <span className="avatar-input-error popup__item-error"></span>
        </label>
      </PopupWithForm>
      <ImagePopup card={selectedCard} isOpen={isCardOpen} onClickClose={closeAllPopups}/>
    </div>
  );
}


