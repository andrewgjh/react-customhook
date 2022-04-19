import { useState } from "react";
import useHttpRequest from "../../hooks/useHttpRequest";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = props => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { isLoading, error, request: sendTaskRequest } = useHttpRequest();

  const enterTaskHandler = async taskText => {
    const config = {
      url: "https://react-http-4c46f-default-rtdb.firebaseio.com/tasks.json",
      headers: {
        "Content-Type": "application/json",
      },
      body: { text: taskText },
      method: "POST",
    };
    const createTask = taskData => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    };
    sendTaskRequest(config, createTask);
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch(
    //     "https://react-http-4c46f-default-rtdb.firebaseio.com/tasks.json",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Request failed!");
    //   }

    //   const data = await response.json();

    //   const generatedId = data.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };

    //   props.onAddTask(createdTask);
    // } catch (err) {
    //   setError(err.message || "Something went wrong!");
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
