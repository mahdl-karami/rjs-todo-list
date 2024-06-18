//! this modal is for create or edit a task
//! if edit == false (not defined) this section is used to create

//* import react icons
import { IoMdClose } from "react-icons/io";

const Modal = (props) => {
  //* edit destructure
  const { edit, taskName, setTaskName, editSubmit } = props;
  //* create destructure
  const { value, formHandle, changeHandle } = props;
  const { setIsOpen } = props;
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
    <div className="modal-box">
      <div className="modal">
        <div className="modal-top">
          <h3 className="modal-title">{edit ? "edit task" : "create new task"}</h3>
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose />
          </button>
        </div>
        <form className="modal-form" onSubmit={(ev) => submitHandle(ev)}>
          <input required type="text" value={edit ? taskName : value} onChange={(ev) => changeHandle2(ev)} placeholder="enter task name" />
          <button type="submit">{edit ? "Edit" : "Add"}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
