import * as React from "react";
//* import components
import Modal from "./Modal";

const Task = ({ setTasks, tasks, index }) => {
  //* task components constants
  const task = tasks[index];
  const initialDone = Boolean(task.done);
  const newTasks = [...tasks];
  //* task components states (useState hook)
  const [taskName, setTaskName] = React.useState(task.name);
  const [isOpen, setIsOpen] = React.useState(false);
  //* task component functions
  const checkHandle = () => {
    newTasks[index].done = !task.done;
    setTasks(newTasks);
  };
  const deleteTask = () => {
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const editSubmit = (ev) => {
    ev.preventDefault();
    newTasks[index].name = taskName;
    setTasks(newTasks);
    setIsOpen(false);
  };

  return (
    <div>
      <input type="checkbox" checked={initialDone} onChange={checkHandle} /> {task.name}
      <button onClick={(ev) => deleteTask(ev)}>X</button>
      <button onClick={() => setIsOpen((prevS) => !prevS)}>{isOpen ? "X" : "edit"}</button>
      {isOpen && <Modal edit taskName={taskName} setTaskName={setTaskName} editSubmit={editSubmit} />}
    </div>
  );
};

export default Task;
