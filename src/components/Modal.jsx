const Modal = ({ edit, taskName, setTaskName, editSubmit, formHandle, value, changeHandle }) => {
  // if edit == false (not defined), this modal is for create new task
  return (
    <div style={{ background: "#ccc" }}>
      <h2>{edit ? "edit task" : "create new task"}</h2>
      {edit && (
        <form onSubmit={(ev) => editSubmit(ev)}>
          <input value={taskName} onChange={({ target }) => setTaskName(target.value)} />
          <button type="submit">submit</button>
        </form>
      )}
      {!edit && (
        <form onSubmit={(ev) => formHandle(ev)}>
          <input type="text" value={value} onChange={(ev) => changeHandle(ev)} />
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
};

export default Modal;
