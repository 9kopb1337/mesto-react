import React from "react";

export default function PopupWithForm({ name, title, children, isOpen, onClickClose }) {
  return (
    <div className={`popup popup_edit_profile popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__button popup__button_act_exit" type="button" value="close" onClick={onClickClose}></button>
        <form method="post" name={`form-${name}`} className={`form popup__form popup__form_${name}`} novalidate>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__button popup__button_act_submit" type="submit" value="save">Сохранить</button>
        </form>
      </div>
    </div>
  );
}
