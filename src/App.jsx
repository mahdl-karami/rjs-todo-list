import * as React from "react";
import TasksForm from "./components/TasksForm";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = React.useState([
    { name: "inital tast 1", done: false },
    { name: "inital tast 2", done: false },
    { name: "inital tast 3", done: false },
  ]);
  return (
    <div>
      <TasksForm setTasks={setTasks}/>
      {tasks?.map((task, i) => (
        <Task key={i} task={task} />
      ))}
    </div>
  );
};

export default App;
