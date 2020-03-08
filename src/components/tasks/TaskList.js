import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const res = await fetch("/tasks");
    const data = await res.json();
    setData(data);
  };

  const displayTasks = () => {
    return data.map(item => <li key={item.id}>{item.description}</li>);
  };

  return (
    <div id='taskList'>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>Tasks</h4>
        </li>
        {displayTasks()}
      </ul>
    </div>
  );
};

export default TaskList;
