import React from 'react';

function AddButton({ onClick, children }) {
  return (
    <button onClick={onClick} className="add-button">
      {children}
    </button>
  );
}

export default AddButton;
