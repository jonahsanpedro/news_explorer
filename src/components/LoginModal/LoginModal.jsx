import { useEffect, useState } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const Login = ({
  handleLogin,
  onClose,
  isOpen,
  handleRegistrationClick,
  activeModal = "login",
  error,
  setError,
}) => {
  const [data, setData] = useState({ email: "", password: "" });

  useEffect(() => {
    setData({ email: "", password: "" });
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data.email, data.password);
  };

  const onSwitch = () => {
    onClose();
    handleRegistrationClick();
  };

  //regex for email validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleClose = () => {
    onClose();
    setError("");
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title={null}
      onSubmit={handleSubmit}
      onSwitch={onSwitch}
      activeModal={activeModal}
    >
      <div className="login-modal">
        <h2 className="login-modal__title">Sign in</h2>
        <label htmlFor="login-email" className="login-modal__input-label">
          Email
        </label>
        <input
          id="login-email"
          required
          name="email"
          type="email"
          value={data.email}
          className="login-modal__input"
          placeholder="Enter email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="login-password" className="login-modal__input-label">
          Password
        </label>
        <input
          id="login-password"
          required
          name="password"
          type="password"
          value={data.password}
          className="login-modal__input"
          placeholder="Enter password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {error && <div className="login-modal__error">{error}</div>}
        <button
          type="submit"
          className={`login-modal__button${
            data.email && data.password && isValidEmail(data.email)
              ? " login-modal__button--active"
              : ""
          }`}
          disabled={!data.email || !data.password || !isValidEmail(data.email)}
        >
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default Login;
