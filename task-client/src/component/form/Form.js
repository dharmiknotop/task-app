import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/form.css';

import inputValidation from '../validation//inputValidation';

const Form = () => {
  const navigate = useNavigate();

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
      tempError.title = 'Enter title for the task';
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

  const saveDetail = async () => {
    if (validateForm()) {
      return;
    }
    await uploadDetails();
  };

  const uploadDetails = async () => {
    try {
      setrequestUploadData({
        loading: true,
        success: '',
        error: '',
      });

      await axios.post(
        `http://localhost:8081/api/create`,
        { ...formData },
        {
          withCredentials: true,
          'Content-Type': 'application/json',
        }
      );

      navigate('/');

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
        error: 'Something went wrong',
      });
    }
  };

  return (
    <div className="containerOuter">
      <div className="containerInner">
        {requestUploadData.loading && (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status" />
          </div>
        )}

        {!requestUploadData.loading && (
          <Fragment>
            <h1 className="heading p-2">Add a task</h1>

            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 p-2  mt-3">
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
                  {formDataError.title && (
                    <span className="text-danger">{formDataError.title}</span>
                  )}
                </div>

                <div className="col-12 col-md-6 col-lg-6 p-2  mt-3">
                  <select
                    className="form-select"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        status: e.target.value,
                      });
                    }}
                  >
                    <option value="" selected>
                      Select a status
                    </option>
                    <option value="Remaining">Remaining</option>
                    <option value="Completed">Completed</option>
                  </select>
                  {formDataError.status && (
                    <span className="text-danger">{formDataError.status}</span>
                  )}
                </div>

                <div className="col-12 p-2 mt-3">
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
                  {formDataError.description && (
                    <span className="text-danger">
                      {formDataError.description}
                    </span>
                  )}
                </div>

                {!requestUploadData.loading && requestUploadData.error && (
                  <span className="text-danger">{requestUploadData.error}</span>
                )}

                <div className="col-12 p-2  mt-3">
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
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Form;
