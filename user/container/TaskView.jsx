// const { useState, useEffect } = require('react');

import React, { Component, useState, useEffect } from 'react';
import Form from '../form/Form';
import TaskList from '../components/TaskList';

const taskView = ({ taskName }) => {
  const [taskState, setTaskState] = useState([]);

  useEffect(() => {
    fetch('/get')
      .then((res) => res.json())
      .then((data) => {
        setTaskState(data);
      })
      .catch((err) =>
        console.log(`Error has occured in the event cycle: ${err}`)
      );
  }, []);

  const taskArr = [];

  for (let i = 0; i < taskState.length; i++) {
    taskArr.push(
      <TaskList taskName={todoState[i].todo} id={todoState[i]._id} key={i} />
    );
  }

  return (
    <div id="taskView">
      <h1> My Task List</h1>
      <Form />
      {taskArr}
    </div>
  );
};

export default taskView;
