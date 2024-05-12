import "./Modal.css"

function Modal({ modalContent, cancelForChild, confirmModalForChild }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{modalContent}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={cancelForChild}
          >
            Cancel
          </button>

          <button className="btn" onClick={confirmModalForChild}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
