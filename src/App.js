import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttpRequest from "./hooks/useHttpRequest";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [tasks, setTasks] = useState([]);

  // const fetchTasks = async taskText => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://react-http-4c46f-default-rtdb.firebaseio.com/tasks.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Request failed!");
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong!");
  //   }
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  // const taskAddHandler = task => {
  //   setTasks(prevTasks => prevTasks.concat(task));
  // };
  const [tasks, setTasks] = useState([]);

  const transformTasks = tasksObj => {
    const loadedTasks = [];
    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const { request: fetchTasks, isLoading, error } = useHttpRequest();

  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-http-4c46f-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = task => {
    setTasks(prevTasks => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
