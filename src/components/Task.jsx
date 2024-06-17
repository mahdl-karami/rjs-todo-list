const Task = ({ setTasks, tasks, index }) => {
  const task = tasks[index];
  const initialDone = Boolean(tasks[index].done);
  const newTasks = [...tasks];
  
  const changeHandle = () => {
    newTasks[index].done = !tasks[index].done;
    setTasks(newTasks);
  };

  return (
    <div>
      <input type="checkbox" checked={initialDone} onChange={(ev) => changeHandle(ev)} /> {task.name}
    </div>
  );
};

export default Task;
