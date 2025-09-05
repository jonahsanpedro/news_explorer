import "./ModalWithForm.css";
import { useEffect, useRef } from "react";
import close from "../../images/close.svg";

function ModalWithForm({
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
  buttonText,
  onSwitch,
  activeModal = "",
  hideOr = false,
}) {
  const modalRef = useRef();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleBackdropClick}
    >
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="Close" className="modal__close-icon" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__buttons">
            {!hideOr && <span>or</span>}
            {onSwitch && ["register", "login"].includes(activeModal) && (
              <button
                type="button"
                className="modal__switch"
                onClick={onSwitch}
              >
                {activeModal === "register" ? "Sign in" : "Sign up"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
