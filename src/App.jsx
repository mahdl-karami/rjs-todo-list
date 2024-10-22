import * as React from "react";
//* import components
import TasksForm from "./components/TasksForm";
import Task from "./components/Task";
import Layout from "./components/Layout";
//* import external functions
import { setToLocal } from "./helpers/setLocalstorage";
import { getLocal } from "./helpers/getLocalStorage";

const App = () => {
  //? get initial data from local storage
  const initialStorage = JSON.parse(getLocal("tasks"));
  //* app state (useState hook)
  const [tasks, setTasks] = React.useState(initialStorage);
  //* app side effects
  React.useEffect(() => {
    setToLocal("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Layout>
      <TasksForm setTasks={setTasks} />
      <div className="taskTable">
        {tasks?.length ? (
          <>
            {tasks?.map((task, i) => (
              <Task key={i} setTasks={setTasks} tasks={tasks} index={i} />
            ))}
          </>
        ) : (
          <h2>Nothing here, add new task ...</h2>
        )}
      </div>
    </Layout>
  );
};

export default App;
