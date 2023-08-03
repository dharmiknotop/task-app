import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './css/taskContainer.css';
import Task from '../../component/task/Task';

import configKey from '../../config/Keys';

const TaskContainer = () => {
  const [requestUploadData, setrequestGetData] = useState({
    loading: false,
    success: '',
    error: '',
  });

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      setrequestGetData({
        loading: true,
        success: '',
        error: '',
      });

      console.log(configKey);

      const res = await axios.get(`${configKey.SERVER_URL}/api/read`, {
        withCredentials: true,
        'Content-Type': 'application/json',
      });

      setTasks(res.data.data.tasks);

      setrequestGetData({
        loading: false,
        success: 'Added Successfully',
        error: '',
      });
    } catch (error) {
      console.error('error: ', error);
      setrequestGetData({
        loading: false,
        success: '',
        error: error?.response?.data?.message,
      });
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="containerOuter">
      <div className="taskContainerInner">
        {requestUploadData.loading && (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status" />
          </div>
        )}
        {!requestUploadData.loading && (
          <Fragment>
            {tasks?.length > 0 && (
              <div className="titleContainer">
                <h1 className="title p-2">All the tasks</h1>
                <NavLink
                  to={`http://localhost:3000/addTask`}
                  className="btn btn-primary addBtn"
                >
                  Add +
                </NavLink>
              </div>
            )}
            {tasks?.length === 0 && (
              <div className="noTaskContainer">
                You have currently no tasks
                <NavLink
                  to={`http://localhost:3000/addTask`}
                  className="btn btn-primary addBtn ms-5"
                >
                  Add +
                </NavLink>
              </div>
            )}
            {tasks?.map((item) => {
              return <Task item={item} getTasks={getTasks} />;
            })}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default TaskContainer;
