import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className="App-login">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" className={css(s.inputSpace)} />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" className={css(s.inputSpace)} />
        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

const s = StyleSheet.create({
  inputSpace: {
    marginRight: '1rem'
  }
});

export default Login;
