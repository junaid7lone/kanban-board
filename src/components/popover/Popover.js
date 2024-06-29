import React, { useRef, useState, useEffect } from "react";
import { PopoverContainer, PopoverButton } from "./Popover.styled";

const Popover = ({ trigger, content, children }) => {
  const nodeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleTriggerClick = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 500);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        clearTimeout(timeoutId);
      };
    }
  }, [isOpen]);

  return (
    <>
      <PopoverButton onClick={handleTriggerClick}>{trigger}</PopoverButton>
      {isOpen && (
        <PopoverContainer ref={nodeRef}>
          {children ? children : content}
        </PopoverContainer>
      )}
    </>
  );
};

export default Popover;
