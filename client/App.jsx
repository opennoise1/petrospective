import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './styles.css';
import Login from "./components/Login.jsx";
// import Home from "./components/Home.jsx";
// import Feed from "./containers/Feed.jsx";
import Signup from "./components/Signup.jsx";
import Bucketlist from './components/Bucketlist.jsx'


class App extends Component {
  render() {
    return (
      <div>
        <Login />
        {/* <Bucketlist /> */}
      </div>
    )
  }
}

export default App;

//<Router>
//<Switch>
//  <Route exact path="/login" component={Login} />
//  <Route exact path="/signup" component={Signup} />
//  {/* <Route exact path="/feed" component={Feed} /> */}
//  <Route exact path="/" component={Login} />
//  <div>404, dawg</div>
//</Switch>
//</Router>
