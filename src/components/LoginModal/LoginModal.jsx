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
      <div className="login__modal">
        <h2 className="login__modal-title">Sign in</h2>
        <label htmlFor="login-email" className="login__modal-input-label">
          Email
        </label>
        <input
          id="login-email"
          required
          name="email"
          type="email"
          value={data.email}
          className="login__modal-input"
          placeholder="Enter email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="login-password" className="login__modal-input-label">
          Password
        </label>
        <input
          id="login-password"
          required
          name="password"
          type="password"
          value={data.password}
          className="login__modal-input"
          placeholder="Enter password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {error && <div className="login__modal-error">{error}</div>}
        <button
          type="submit"
          className={`login__modal-button${
            data.email && data.password && isValidEmail(data.email)
              ? " login__modal-button_active"
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
