import React, {useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


const App = () => {
  useEffect(()=>{
    // Init Materialize JS
    M.AutoInit();
  })
  return (
    <div className="App">
      
      <nav>
    <div class="nav-wrapper">
      <a href="#test" class="brand-logo">ToDo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>

    </div>
  );
}

export default App;
