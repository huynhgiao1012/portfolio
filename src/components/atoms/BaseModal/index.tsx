import { type FC, type ReactNode, useEffect, useRef } from "react";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import Modal from "react-modal";

import { cn } from "@src/utils/common";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  className?: string;
}

const BaseModal: FC<Props> = ({
  className = "",
  isOpen,
  onClose,
  children,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const element = document.getElementsByClassName("modal-content")[0];
        disableBodyScroll(element);
      }, 100);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);
  const handleClose = () => {
    if (onClose) {
      clearAllBodyScrollLocks();
      onClose();
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="fixed top-0 size-full z-[99] bg-gray-800/60"
      className={cn("", className)}
      ariaHideApp={false}
    >
      <div ref={targetRef} className="modal-content relative h-full">
        {children}
      </div>
    </Modal>
  );
};

export default BaseModal;
