import './css/deleteTask.css';
import axios from 'axios';

import configKey from '../../config/Keys';

const DeleteTask = (props) => {
  const getTasks = props.getTasks;
  const id = props.id;

  const deleteTask = async () => {
    try {
      await axios.post(
        `${configKey.SERVER_URL}/api/delete`,
        { id },
        {
          'Content-Type': 'application/json',
        }
      );

      getTasks();
    } catch (error) {
      console.error('error: ', error);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-sm btn-danger "
      onClick={() => {
        deleteTask();
      }}
    >
      Delete
    </button>
  );
};

export default DeleteTask;
