import { useEffect } from "react"
import { createPortal } from "react-dom"
import "./Modal.css"

function Modal({ isOpen, onClose, title, children }) {
  const modalRoot = document.getElementById("modal-root")

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {title && <h2 className="modal-title">{title}</h2>}

        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export default Modal
