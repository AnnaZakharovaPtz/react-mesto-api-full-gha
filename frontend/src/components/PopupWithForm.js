function PopupWithForm({ isOpen, onClose, onSubmit, name, title, children, buttonText }) {

  return (
    <div className={
      isOpen
        ? `popup popup_type_${name} popup_opened`
        : `popup popup_type_${name}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close"
          type="button"
          aria-label="Закрыть">
        </button>
        <form className="form" name={name} onSubmit={onSubmit}>
          <h2 className="form__header">{title}</h2>
          {children}
          <button className="form__save" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
