import PopupWithForm from "./PopupWithForm.js";
import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        value={name || ''}
        onChange={handleNameChange}
        type="text"
        id="profile-name"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="form__input-error" id="profile-name-error"></span>
      <input
        className="form__input"
        value={description || ''}
        onChange={handleDescriptionChange}
        type="text"
        id="profile-job"
        name="job"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="form__input-error" id="profile-job-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
