import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useFetch from "../../hooks/useFetch";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTask } = useFetch();
  const createTask = function (taskText, taskData) {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText) => {
    sendTask(
      {
        url: "https://udemy-24192-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: { text: taskText }
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
