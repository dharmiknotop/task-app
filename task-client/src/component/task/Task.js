import React from 'react';
import './css/task.css';

import { MdDeleteOutline } from 'react-icons/md';
const Task = (props) => {
  const { title, description, status } = props.item;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 p-2">
          <h2 className="title">{title}</h2>
          <h3 className="status">{status}</h3>
        </div>
        <div className="col-12 col-md-6 col-lg-6 p-2">
          <h4 className="description">{description}</h4>
        </div>
        <div className="col-12 col-md-6 col-lg-3 p-2">
          <MdDeleteOutline color="red" />
        </div>
      </div>
    </div>
  );
};

export default Task;
