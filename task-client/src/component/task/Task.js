import React from 'react';
import './css/task.css';
import DeleteTask from '../deleteTask/DeleteTask';

import { NavLink } from 'react-router-dom';

const Task = (props) => {
  const { _id, title, description, status } = props.item;
  const getTasks = props.getTasks;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 p-2">
          <h2 className="taskTitle">{title}</h2>

          <h3
            className={`
            status
            ${status === 'Remaining' ? 'statusRemaining' : 'statusCompleted'}`}
          >
            {status}
          </h3>
        </div>
        <div className="col-12 col-md-6 col-lg-6 p-2 ">
          <div className="description centerContent">{description}</div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 p-2 ">
          <div className="btnContainer">
            <NavLink
              className="btn btn-sm btn-primary me-3"
              to={`http://localhost:3000/updateTask/${_id}`}
            >
              Update
            </NavLink>
            <DeleteTask getTasks={getTasks} id={_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
