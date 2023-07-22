import Card from "./Card.js";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const userContext = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__image-block">
          <img className="profile__image" src={userContext.avatar} alt="Фото пользователя" />
          <button className="profile__edit-image-button" type="button" aria-label="Редактировать"
            onClick={props.onEditAvatar}>
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__name">{userContext.name}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать"
              onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__job">{userContext.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить"
          onClick={props.onAddPlace}></button>
      </section>

      <section>
        <ul className="cards">
          {props.cards.map((card) => {
            return (
              <li className="cards__item" key={card._id}>
                <Card
                  onCardClick={props.onCardClick}
                  onCardLike={props.onCardLike}
                  onCardDelete={props.onCardDelete}
                  card={card}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main >
  );
}

export default Main;
