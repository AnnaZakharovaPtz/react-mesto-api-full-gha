import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  let isOwner = false;
  if (props.card.owner === currentUser._id) {
    isOwner = true;
  }

  const isLiked = props.card.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = (
    `cards__like-button ${isLiked && 'cards__like-button_active'}`
  );

  return (
    <>
      <img onClick={handleClick} className="cards__image" src={props.card.link} alt={props.card.name} />
      {isOwner && <button onClick={handleDeleteClick} className="cards__delete-button" type="button" aria-label="Удалить"></button>}
      <div className="cards__caption">
        <h2 className="cards__name">{props.card.name}</h2>
        <div>
          <button onClick={handleLikeClick} className={cardLikeButtonClassName} type="button" aria-label="Нравится"></button>
          <p className="cards__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
