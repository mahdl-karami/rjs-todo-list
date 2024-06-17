const Task = ({ setTasks, tasks, index }) => {
  const task = tasks[index];
  const initialDone = Boolean(tasks[index].done);
  const newTasks = [...tasks];

  const changeHandle = () => {
    newTasks[index].done = !tasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (ev) => {
    if (index > -1) {
      // only splice array when item is found
      newTasks.splice(index, 1); // 2nd parameter means remove one item only
    }
    setTasks(newTasks);
  };

  return (
    <div>
      <input type="checkbox" checked={initialDone} onChange={(ev) => changeHandle(ev)} /> {task.name}
      <button onClick={(ev) => deleteTask(ev)}>X</button>
    </div>
  );
};

export default Task;
