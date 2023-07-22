import { Routes, Route, Link } from "react-router-dom";

function Header({ email, loggedIn, handleSignout }) {
  return (
    <header className={loggedIn ? 'header header_reversed' : 'header'}>
      <div className="logo"></div>
      <div className="header__info">
        <Routes>
          <Route path="/sign-up" element={<Link className="header__link" to="/sign-in">Вход</Link>} />
          <Route path="/sign-in" element={<Link className="header__link" to="/sign-up">Регистрация</Link>} />
          <Route path="/" element={
            <>
              <p className="header__email">{email}</p>
              <button className="header__link" type="button" onClick={handleSignout}>Выйти</button>
            </>
          } />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
