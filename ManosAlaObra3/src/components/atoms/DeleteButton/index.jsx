import React from 'react';

function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick} className="delete-button">
      🗑️
    </button>
  );
}

export default DeleteButton;
