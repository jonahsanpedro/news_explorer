import { useEffect, useState } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const Login = ({
  handleLogin,
  onClose,
  isOpen,
  handleRegistrationClick,
  activeModal = "login",
}) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    setData({ email: "", password: "" });
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!isValidEmail(data.email)) {
      setError("Invalid email address");
      return;
    }
    setError("");
    handleLogin(data.email, data.password);
  };

  const onSwitch = () => {
    onClose();
    handleRegistrationClick();
  };

  //regex for email validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
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
          onChange={(e) => {
            const value = e.target.value;
            setData({ ...data, email: value });
            if (value && !isValidEmail(value)) {
              setError("Invalid email address");
            } else {
              setError("");
            }
          }}
        />
        {error && (
          <div
            className="login-modal__error"
            style={{
              color: "#d32f2f",
              marginTop: "4px",
              marginBottom: "8px",
              fontSize: "15px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            {error}
          </div>
        )}
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
