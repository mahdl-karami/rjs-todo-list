import * as React from "react";
//* import components
import Modal from "./Modal";

const TasksForm = ({ setTasks }) => {
  //* tasksForm states (useState hook)
  const [value, setValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  //* tasksForm functions
  const changeHandle = (ev) => {
    setValue(ev.target.value);
  };
  const formHandle = (ev) => {
    ev.preventDefault();
    if (!value) return;
    const input = ev.target[0];
    setTasks((prevS) => [...(prevS || ""), { name: input.value, done: false }]);
    setValue("");
    setIsOpen(false);
  };

  return (
    <div>
      <button className="add-task" onClick={() => setIsOpen(true)}>
        add new task
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} value={value} formHandle={formHandle} changeHandle={changeHandle} />}
    </div>
  );
};

export default TasksForm;
