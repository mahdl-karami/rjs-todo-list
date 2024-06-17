const TasksForm = () => {
  const formHandle = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={(ev) => formHandle(ev)}>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TasksForm;
