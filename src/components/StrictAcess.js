import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAcess extends Component {
  render() {
    const { user: { username, password } } = this.props;
    return (
      <div>
        <h2>Acesso Restrito</h2>
        {(username === 'joao' && password === '1234') ?
          <p> Welcome {username} </p>
          : (
            alert('Access denied'),
            <Redirect to='/' />
          )
        }
      </div>
    );
  }
}

export default StrictAcess;