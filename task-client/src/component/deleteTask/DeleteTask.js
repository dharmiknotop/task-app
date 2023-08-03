import { MdDeleteOutline } from 'react-icons/md';
import './css/deleteTask.css';
import axios from 'axios';

const DeleteTask = (props) => {
  const getTasks = props.getTasks;
  const id = props.id;

  const deleteTask = async () => {
    try {
      await axios.post(
        `http://localhost:8081/api/delete`,
        { id },
        {
          withCredentials: true,
          'Content-Type': 'application/json',
        }
      );

      getTasks();
    } catch (error) {
      console.error('error: ', error);
    }
  };

  return (
    <MdDeleteOutline
      color="red"
      onClick={() => {
        deleteTask();
      }}
    />
  );
};

export default DeleteTask;
