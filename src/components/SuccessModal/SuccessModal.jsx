import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, onSignIn }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal success-modal">
        <div style={{ color: "red", fontWeight: "bold" }}>
          DEBUG: SuccessModal is rendering!
        </div>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className="success-modal__title">
          Registration successfully completed!
        </h2>
        <button className="success-modal__signin" onClick={onSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
