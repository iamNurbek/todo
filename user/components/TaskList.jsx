import React, { Component, useEffect, useState } from 'react';

const TaskList = ({ taskName, id }) => {
  function deleteTask(id) {
    fetch(`/task/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('this task will be deleted', data))
      .catch((err) => console.log('Encountered error in DELETE fetch', err));

    window.location.reload(false);
  }

  return (
    <div id="todoList">
      <p className="taskList">{taskName}</p>
      <button className="deleteBtn" onClick={() => deleteTask(id)}>
        DELETE
      </button>
    </div>
  );
};

export default TaskList;
