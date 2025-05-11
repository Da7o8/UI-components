import React, { useState } from 'react';
import './RejectModal.css';

function RejectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setReason('');
  };

  return (
    <>
      <button onClick={handleOpen}>Từ chối duyệt</button>

      {isOpen && (
        <div className="overlay">
          <div className="popup">
            <div className="popup-header">
              <h2>Từ chối duyệt kết quả</h2>
              <span className="close-btn" onClick={handleClose}>&times;</span>
            </div>

            <div className="popup-body">
              <label htmlFor="reason">
                Mô tả lý do <span style={{ color: 'red' }}>*</span>
              </label>

              <div className="textarea-wrapper">
                <textarea
                  id="reason"
                  placeholder="Nhập nội dung"
                  maxLength="250"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                ></textarea>
                <div className="textarea-footer">{reason.length}\250</div>
              </div>
            </div>

            <div className="popup-footer">
              <button className="btn-cancel" onClick={handleClose}>Hủy</button>
              <button
                className={`btn-confirm ${reason.trim() ? 'enabled' : ''}`}
                disabled={!reason.trim()}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RejectModal;
