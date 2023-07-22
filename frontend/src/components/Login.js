import * as auth from "../utils/auth.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ handleLogin }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleLogin(formValue);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-form__header">Вход
        </h2>
        <input
          className="login-form__input"
          value={formValue.email}
          onChange={handleChange}
          type="email"
          id="login-email"
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
          id="login-password"
          name="password"
          placeholder="Пароль"
          minLength="2"
          maxLength="50"
          required
        />
        <button className="login-form__submit" type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;
