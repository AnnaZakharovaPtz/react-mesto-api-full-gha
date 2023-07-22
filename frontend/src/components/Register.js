import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ handleRegister }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleRegister(formValue);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-form__header">Регистрация</h2>
        <input
          className="login-form__input"
          value={formValue.email}
          onChange={handleChange}
          type="email"
          id="user-email"
          name="email"
          placeholder="Email"
          minLength="2"
          maxLength="50"
          required
        />
        <input
          className="login-form__input"
          value={formValue.password}
          onChange={handleChange}
          type="password"
          id="user-password"
          name="password"
          placeholder="Пароль"
          minLength="2"
          maxLength="50"
          required
        />
        <button className="login-form__submit" type="submit">Зарегистрироваться</button>
        <div className="register-info">
          <Link to="/sign-in" className="register-info__link">Уже зарегистрированы? Войти</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
