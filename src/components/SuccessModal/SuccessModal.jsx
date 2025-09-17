import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, onSignIn }) {
  if (!isOpen) return null;
  return (
    <section className="success-modal__overlay">
      <section className="modal success-modal">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h1 className="success-modal__title">
          Registration successfully completed!
        </h1>
        <button className="success-modal__signin" onClick={onSignIn}>
          Sign in
        </button>
      </section>
    </section>
  );
}

export default SuccessModal;
