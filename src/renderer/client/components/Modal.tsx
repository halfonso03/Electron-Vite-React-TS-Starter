import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { BsX } from 'react-icons/bs';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
};

const Modal = ({ isOpen, onClose, children, title }: Props) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header border-b-gray-700 border-b flex">
          <div>{title && <div className="text-lg">{title}</div>}</div>
          <button onClick={onClose}>
            <BsX className="modal-close-button"></BsX>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.getElementById('portal-root')! // Target DOM node
  );
};

export default Modal;
