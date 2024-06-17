const TasksForm = ({ setTasks }) => {
  const formHandle = (ev) => {
    ev.preventDefault();
    const input = ev.target[0];
    setTasks((prevS) => [...prevS, { name: input.value, done: false }]);
  };

  return (
    <form onSubmit={(ev) => formHandle(ev)}>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TasksForm;
