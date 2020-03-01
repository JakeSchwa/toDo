import React from "react";

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-task-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='material-icons large'>add</i>
      </a>
    </div>
  );
};

export default AddBtn;
