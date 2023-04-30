import React from "react";
import { api } from '../utils/Api.js';
import Card from "./Card.js";

export default function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userJob, setUserJob] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [card, setCard] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getCards()])
    .then(([resUser, resCard]) => {
    setUserName(resUser.name);
    setUserJob(resUser.job);
    setUserAvatar(resUser.avatar);
    setCard(resCard);
  })
  .catch((err) => console.log(err));
  }, [])

    return (
        <main className="main">
        <section className="profile">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img className="profile__photo" src={userAvatar} alt={userName} />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__description">{userJob}</p>
            <button className="button profile__button profile__button_act_edit" type="button" onClick={onEditProfile}></button>
          </div>
          <button className="button profile__button profile__button_act_add" type="button" onClick={onAddPlace}></button>
        </section>
    
        <section className="elements">
          {card.map((resCard) => (
            <Card card={resCard} onCardClick={onCardClick} key={resCard._id} />
          ))}
        </section>
    
      </main>
    );
  }