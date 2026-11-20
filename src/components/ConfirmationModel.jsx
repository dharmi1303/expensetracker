import '../styles/ConfirmationModel.css'

function ConfirmationModel({
    title = "Confirm Action",
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    oncancel,
}) {

  return (
    <div className="confirmation-overlay" onClick={oncancel}>
      <div className="confirmation-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-title"
      onClick={(event) => event.stopPropagation()}
      >
        <h2 id="confirmation-title">{title}</h2>
        <p>{message}</p>

        <div className="confirmation-buttons">
          <button type="button" className="confirmation-cancel" onClick={oncancel}>
            {cancelText}
          </button>
          <button type="button" className="confirmation-delete" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default ConfirmationModel
