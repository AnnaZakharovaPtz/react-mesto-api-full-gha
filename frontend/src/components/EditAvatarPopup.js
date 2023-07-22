import { useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const inputRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="profile-image"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        ref={inputRef}
        type="url"
        id="profile-image"
        name="link"
        placeholder="Ссылка на картинку"
        required />
      <span
        className="form__input-error"
        id="profile-image-error">
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
