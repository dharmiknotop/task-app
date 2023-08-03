import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Tasks = () => {
  const [requestUploadData, setrequestGetData] = useState({
    loading: false,
    success: '',
    error: '',
  });

  const getTasks = async () => {
    try {
      setrequestGetData({
        loading: true,
        success: '',
        error: '',
      });

      await axios.get(`http://localhost:8081/api/get`, {
        withCredentials: true,
        'Content-Type': 'application/json',
      });

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

  return <div>Task</div>;
};

export default Tasks;
