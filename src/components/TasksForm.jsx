import * as React from "react";

const TasksForm = ({ setTasks }) => {
  const [value, setValue] = React.useState("");

  const changeHandle = (ev) => {
    setValue(ev.target.value);
  };

  const formHandle = (ev) => {
    ev.preventDefault();
    if (!value) return;
    const input = ev.target[0];
    setTasks((prevS) => [...(prevS || ""), { name: input.value, done: false }]);
    setValue("");
  };

  return (
    <form onSubmit={(ev) => formHandle(ev)}>
      <input type="text" value={value} onChange={(ev) => changeHandle(ev)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TasksForm;
