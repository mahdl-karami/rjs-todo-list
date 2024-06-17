import * as React from "react";
import Modal from "./Modal";

const TasksForm = ({ setTasks }) => {
  const [value, setValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

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
    <>
      <button onClick={() => setIsOpen((prevS) => !prevS)}>add new task</button>
      {isOpen && <Modal value={value} formHandle={formHandle} changeHandle={changeHandle} />}
    </>
  );
};

export default TasksForm;
