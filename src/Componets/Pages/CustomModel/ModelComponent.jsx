import React, { useEffect } from 'react';

const ModelComponent = ({ modalTitle, modalContent, modalButtons, show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Reset to enable scrolling when unmounting
    };
  }, [show]);

  const handleClose = () => {
    if (onClose) {
      onClose(!show); // Notify parent component about modal state change
    }
  };

  return (
    <>
      {show && (
        <div className="custom-modal-container">
          <div className="custom-modal-overlay">
            <div className="custom-modal-content">
              <div className="modal-header">
                <span className='modal-title'>{modalTitle}</span>
                <span className="close-button" onClick={handleClose}>&times;</span>
              </div>
              <div className="modal-middle-content">
                {modalContent}
              </div>
              <div className="modal-footer">
                {modalButtons && modalButtons.map((buttonText, index) => (
                  <button key={index}>{buttonText}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModelComponent;
