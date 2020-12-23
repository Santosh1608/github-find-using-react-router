import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar/Navbar';
import Search from './containers/Search/Search';
import Users from './containers/Users/Users';
import User from './containers/User/User';
import './assets/github.jpg';
import './assets/users_back.jpg';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/users' component={Users} />
          <Route path='/user/:name' component={User} />
        </Switch>
      </>
    );
  }
}

export default App;
