import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useEffect, useState } from "react";

function Register({
  isOpen,
  onClose,
  handleRegistration,
  handleLoginClick,
  activeModal = "",
  error,
}) {
  const [data, setData] = useState({ email: "", password: "", username: "" });

  const handleEmailChange = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const handleUsernameChange = (e) => {
    setData({ ...data, username: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  const onSwitch = () => {
    onClose();
    handleLoginClick();
  };

  useEffect(() => {
    setData({
      email: "",
      password: "",
      username: "",
    });
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={null}
      onSubmit={handleSubmit}
      buttonText={null}
      onSwitch={onSwitch}
      activeModal={activeModal}
      data={data}
    >
      <div className="register-modal">
        {error && <div className="register-modal__error">{error}</div>}
        <h2 className="register-modal__title">Sign up</h2>
        <label htmlFor="register-email" className="register-modal__input-label">
          Email
        </label>
        <input
          id="register-email"
          required
          name="email"
          type="email"
          value={data.email}
          className="register-modal__input"
          placeholder="Enter email"
          onChange={handleEmailChange}
        />
        <label
          htmlFor="register-password"
          className="register-modal__input-label"
        >
          Password
        </label>
        <input
          id="register-password"
          required
          name="password"
          type="password"
          value={data.password}
          className="register-modal__input"
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />
        <label
          htmlFor="register-username"
          className="register-modal__input-label"
        >
          Username
        </label>
        <input
          id="register-username"
          required
          name="username"
          type="text"
          value={data.username}
          className="register-modal__input"
          placeholder="Enter username"
          onChange={handleUsernameChange}
        />
        <button
          type="submit"
          className={`register-modal__button${
            data.email && data.password && data.username
              ? " register-modal__button--active"
              : ""
          }`}
          disabled={!data.email || !data.password || !data.username}
        >
          Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default Register;
