//! this modal is for create or edit a task
//! if edit == false (not defined) this section is used to create
const Modal = (props) => {
  //* edit destructure
  const { edit, taskName, setTaskName, editSubmit } = props;
  //* create destructure
  const { value, formHandle, changeHandle } = props;

  //* modal functions
  const submitHandle = (ev) => {
    edit && editSubmit(ev);
    !edit && formHandle(ev);
  };
  const changeHandle2 = (ev) => {
    edit && setTaskName(ev.target.value);
    !edit && changeHandle(ev);
  };

  return (
    <div className="modal">
      <h3 className="modal-title">{edit ? "edit task" : "create new task"}</h3>
      <form onSubmit={(ev) => submitHandle(ev)}>
        <input type="text" value={edit ? taskName : value} onChange={(ev) => changeHandle2(ev)} placeholder="enter task name" />
        <button type="submit">{edit ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
};

export default Modal;
