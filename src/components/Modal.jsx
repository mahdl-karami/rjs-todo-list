const Modal = ({ edit, taskName, setTaskName, editSubmit }) => {
  // if edit == false (not defined), this modal is for create new task
  return (
    <div style={{ background: "#ccc" }}>
      <h2>{edit ? "edit task" : "create new task"}</h2>
      <form onSubmit={(ev) => editSubmit(ev)}>
        <input value={taskName} onChange={({ target }) => setTaskName(target.value)} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Modal;
