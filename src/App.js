import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './components/StrictAcess';

class App extends Component {
  render() {
    const user = {
      username: 'joao',
      password: '123s4',
    }
    return (
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
        <Link to='/strict-access'>Strict Access</Link>
        <Switch>
          <Route path='/users/:id' render={(props) => <Users {...props} greetingMessage={'Good Morning'} />} />
          <Route path='/about' component={About} />
          <Route path='/strict-access' render={() => <StrictAcess user={user} />} />
          <Route exact path='/' component={Home} />
        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;
