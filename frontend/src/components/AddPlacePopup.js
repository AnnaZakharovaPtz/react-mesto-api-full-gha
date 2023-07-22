import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen])

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      name,
      link
    });
  }

  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        value={name || ''}
        onChange={handleNameChange}
        type="text"
        id="place-name"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="form__input-error" id="place-name-error"></span>
      <input
        className="form__input"
        value={link || ''}
        onChange={handleLinkChange}
        type="url"
        id="place-image"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="form__input-error" id="place-image-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
