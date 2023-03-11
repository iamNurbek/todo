import React, { Component, useState, ReactDOM } from 'react';
import TaskList from '../components/TaskList.jsx';

function Form() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    const bodyObject = {
      task: name,
    };

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(bodyObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('Error has occured in POST Fetch'));
  };

  return (
    <div className="inputBox">
      <form onSubmit={handleSubmit}>
        <labe>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </labe>
        <input type="submit" className="addBtn" />
      </form>
    </div>
  );
}

export default Form;
