import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegistrationSuccessModal.css";

function RegistrationSuccessModal({ isOpen, onClose, onSignIn }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} title={null} hideOr={true}>
      <div className="registration-success-modal__content">
        <h2 className="registration-success-modal__title">
          Registration successfully completed!
        </h2>
        <button
          type="button"
          className="registration-success-modal__signin"
          onClick={onSignIn}
        >
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegistrationSuccessModal;
