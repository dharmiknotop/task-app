import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import inputValidation from '../validation//inputValidation';

const UpdateTask = (props) => {
  const { id } = useParams();

  const [requestUploadData, setrequestUploadData] = useState({
    loading: false,
    success: '',
    error: '',
  });

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
  });

  const [formDataError, setFormDataError] = useState({
    title: '',
    description: '',
    status: '',
  });

  const saveDetail = async () => {
    if (validateForm()) {
      return;
    }
    console.log('words');
    await uploadDetails();
  };

  const validateForm = () => {
    let hasError = false; // False means the form has no error and it can be submitted

    let tempError = {
      title: '',
      description: '',
      status: '',
    };

    tempError.title = inputValidation.isInputEmpty(formData.title);
    if (tempError.title !== '') {
      hasError = true;
      tempError.title = 'Enter Title for the task';
    }

    tempError.description = inputValidation.isInputEmpty(formData.description);
    if (tempError.description !== '') {
      hasError = true;
      tempError.description = 'Enter description for the task';
    }

    tempError.status = inputValidation.isInputEmpty(formData.status);
    if (tempError.status !== '') {
      hasError = true;
      tempError.status = 'Please select a status for the task';
    }

    setFormDataError({
      ...formDataError,
      ...tempError,
    });

    return hasError;
  };

  const uploadDetails = async () => {
    try {
      setrequestUploadData({
        loading: true,
        success: '',
        error: '',
      });

      console.log({ ...formData });

      await axios.post(
        `http://localhost:8081/api/update`,
        { ...formData, id },
        {
          withCredentials: true,
          'Content-Type': 'application/json',
        }
      );

      setrequestUploadData({
        loading: false,
        success: 'Added Successfully',
        error: '',
      });
    } catch (error) {
      console.error('error: ', error);
      setrequestUploadData({
        loading: false,
        success: '',
        error: error?.response?.data?.message,
      });
    }
  };

  const getTask = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8081/api/readOne`,
        { id },
        {
          withCredentials: true,
          'Content-Type': 'application/json',
        }
      );

      console.log(res.data.data);

      setFormData({
        ...res.data.data.tasks,
      });
    } catch (error) {
      console.error('error: ', error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="containerOuter">
      <div className="containerInner">
        <h1 className="title p-2">Update a task</h1>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 p-2">
              <input
                className="form-control"
                type="text"
                value={formData.title}
                placeholder="Enter your task"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  });
                }}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-6 p-2">
              <select
                className="form-select"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    status: e.target.value,
                  });
                }}
              >
                <option value="remaining">Remaining</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="col-12 p-2">
              <input
                className="form-control"
                type="text"
                value={formData.description}
                placeholder="Enter your description"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  });
                }}
              />
            </div>

            <div className="col-12 p-2">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={() => {
                  saveDetail();
                }}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
