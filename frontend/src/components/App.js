import Login from "./Login.js";
import Register from "./Register.js";
import { ProtectedRoute } from "./ProtectedRoute.js";
import { MainPage } from "./MainPage.js";
import Header from "./Header.js";
import InfoToolTip from "./InfoToolTip.js";
import * as auth from "../utils/auth.js";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [infoToolTipState, setInfoToolTipState] = useState({
    'status': false,
    'message': ''
  });
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, []);

  function closeToolTip() {
    setIsInfoToolTipOpen(false);
  }

  function handleRegister({ email, password }) {
    auth.register(email, password)
      .then(() => {
        setInfoToolTipState({
          'status': true,
          'message': "Вы успешно зарегистрировались!"
        });
        setIsInfoToolTipOpen(true);
        navigate('/sign-in');
      })
      .catch(() => {
        setInfoToolTipState({
          'status': false,
          'message': "Что-то пошло не так! Попробуйте ещё раз."
        });
        setIsInfoToolTipOpen(true);
      });
  }

  function handleLogin({ email, password }) {
    auth.authorize(email, password)
      .then(data => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setUserEmail(email);
          setLoggedIn(true);
          navigate('/');
        }
      })
      .catch(() => {
        setInfoToolTipState({
          'status': false,
          'message': "Что-то пошло не так! Попробуйте ещё раз."
        });
        setIsInfoToolTipOpen(true);
      });
  }

  function handleSignout() {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      setLoggedIn(false);
      navigate('/sign-in');
    }
  }

  function checkToken() {
    const jwt = auth.getToken();
    if (jwt) {
      auth.getContent(jwt)
        .then(res => {
          if (res) {
            setUserEmail(res.email);
            setLoggedIn(true);
            navigate('/');
          }
        })
        .catch(() => {
          setInfoToolTipState({
            'status': false,
            'message': "Что-то пошло не так! Попробуйте ещё раз."
          });
          setIsInfoToolTipOpen(true);
          navigate('/sign-in');
        });
    }
  }


  return (
    <>
      <Header email={userEmail} loggedIn={loggedIn} handleSignout={handleSignout} />
      <Routes>
        <Route path="/sign-up" element={<Register handleRegister={handleRegister} />} />
        <Route path="/sign-in" element={<Login handleLogin={handleLogin} />} />
        <Route path="/" element={<ProtectedRoute loggedIn={loggedIn} element={MainPage} />} />
      </Routes>
      <InfoToolTip state={infoToolTipState} isOpen={isInfoToolTipOpen} onClose={closeToolTip} />
    </>
  );
}

export default App;
