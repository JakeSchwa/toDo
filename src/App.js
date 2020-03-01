import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
// components
import AddBtn from "./components/layout/AddBtn";
import AddTaskModal from "./components/tasks/AddTaskModal";
import TaskList from './components/tasks/TaskList'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <a href='#test' className='brand-logo'>
            ToDo
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Sass</a>
            </li>
            <li>
              <a href='badges.html'>Components</a>
            </li>
            <li>
              <a href='collapsible.html'>JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <TaskList/>
        <AddBtn />
        <AddTaskModal />
      </div>
    </>
  );
};

export default App;
