import React from 'react';
import './css/task.css';
import DeleteTask from '../deleteTask/DeleteTask';

import { NavLink } from 'react-router-dom';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';

const Task = (props) => {
  const { _id, title, description, status } = props.item;
  const getTasks = props.getTasks;

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
          <NavLink to={`http://localhost:3000/updateTask/${_id}`}>
            <PiDotsThreeVerticalBold color="black" />
          </NavLink>
          <DeleteTask getTasks={getTasks} id={_id} />
        </div>
      </div>
    </div>
  );
};

export default Task;
