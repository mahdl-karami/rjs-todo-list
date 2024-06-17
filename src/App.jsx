import * as React from "react";
import TasksForm from "./components/TasksForm";
import Task from "./components/Task";
import { setToLocal } from "./helpers/setLocalstorage";
import { getLocal } from "./helpers/getLocalStorage";
import { Layout } from "./components/Layout";

const App = () => {
  const initialStorage = JSON.parse(getLocal("tasks"));

  const [tasks, setTasks] = React.useState(initialStorage);

  React.useEffect(() => {
    setToLocal("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Layout>
      <TasksForm setTasks={setTasks} />
      {tasks?.map((task, i) => (
        <Task key={i} setTasks={setTasks} tasks={tasks} index={i} />
      ))}
    </Layout>
  );
};

export default App;
