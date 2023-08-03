import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

import './css/tasks.css';
import Task from '../../component/task/Task';

const Tasks = () => {
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

      const res = await axios.get(`http://localhost:8081/api/read`, {
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
        <h1 className="title p-2">All the tasks</h1>

        {requestUploadData.loading && (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status" />
          </div>
        )}
        {!requestUploadData.loading && (
          <Fragment>
            {tasks?.map((item) => {
              return <Task item={item} getTasks={getTasks} />;
            })}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Tasks;
