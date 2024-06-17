import * as React from "react";

const Task = ({ setTasks, tasks, index }) => {
  const task = tasks[index];
  const initialDone = Boolean(tasks[index].done);
  const newTasks = [...tasks];

  const [taskName, setTaskName] = React.useState(task.name);
  const [isOpen, setIsOpen] = React.useState(false);

  const checkHandle = () => {
    newTasks[index].done = !tasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = () => {
    if (index > -1) {
      // only splice array when item is found
      newTasks.splice(index, 1); // 2nd parameter means remove one item only
    }
    setTasks(newTasks);
  };

  const editTask = () => {
    setIsOpen((prevS) => !prevS);
  };

  const editSubmit = (ev) => {
    ev.preventDefault();
    newTasks[index].name = taskName;
    setTasks(newTasks);
    setIsOpen(false)
  };

  return (
    <div>
      <input type="checkbox" checked={initialDone} onChange={checkHandle} /> {task.name}
      <button onClick={(ev) => deleteTask(ev)}>X</button>
      <button onClick={editTask}>{isOpen ? "X" : "edit"}</button>
      {isOpen && (
        <form onSubmit={(ev) => editSubmit(ev)}>
          <input value={taskName} onChange={({ target }) => setTaskName(target.value)} />
          <button type="submit">submit</button>
        </form>
      )}
    </div>
  );
};

export default Task;
