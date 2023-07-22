function ImagePopup(props) {
  return (
    <div className={props.card.name
      ? 'popup popup_dark popup_opened'
      : 'popup popup_dark'}>
      <div className="popup__container">
        <button
          className="popup__close"
          onClick={props.onClose}
          type="button"
          aria-label="Закрыть">
        </button>
        <div className="fullscreen-mode">
          <img className="fullscreen-mode__image" src={props.card.link} alt={props.card.name} />
          <p className="fullscreen-mode__caption">{props.card.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
