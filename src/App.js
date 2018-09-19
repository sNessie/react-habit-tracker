import React, {Component} from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
// import AddHabbit from './components/AddHabbit/AddHabbit'
import {BrowserRouter, Route} from 'react-router-dom'


import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Route exact path='/' component={Home} />
          {/* <Route path='/addhabbit' component={AddHabbit} /> */}
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
