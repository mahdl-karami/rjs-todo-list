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
    <div className="add-task">
      <button onClick={() => setIsOpen(true)}>add new task</button>
      {isOpen && <Modal value={value} formHandle={formHandle} changeHandle={changeHandle} />}
    </div>
  );
};

export default TasksForm;
