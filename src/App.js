import Login from './components/Login'
import Register from './components/Register'
// import Timer from './components/Timer'

import React, { Component } from 'react';

import {BrowserRouter , Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
              <div>
              <Route path="/login"  component={Login} exact />
              <Route path="/register" component={Register}/>
              {/* <Route path="/timer" component={Timer}/> */}
              </div>
          </BrowserRouter>
{/* <Login /> */}
      </div>
  )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Login />
//       <Register />
//     </div>
//   );
// }

export default App;
