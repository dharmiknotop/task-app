import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Task from './container/tasks/Tasks';
import Form from './component/form/Form';
import UpdateTask from './component/updateTask/UpdateTask';

function App() {
  return (
    <div className="App">
      {' '}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="/updateTask/:id" element={<UpdateTask />} />
          <Route path="/addTask" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
