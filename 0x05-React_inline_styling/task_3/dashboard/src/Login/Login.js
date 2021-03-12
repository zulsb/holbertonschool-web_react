import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(s.divResponsive)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" className={css(s.inputSpace, s.loginResponsive)} />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" className={css(s.inputSpace, s.loginResponsive)} />
        <button className={css(s.buttonResponsive)}>OK</button>
      </div>
    </React.Fragment>
  );
}

const s = StyleSheet.create({
  inputSpace: {
    marginRight: '1rem'
  },
  divResponsive: {
    '@media screen and (max-width: 900px)': {
      width: '90%',
      padding: '0'
    }
  },
  loginResponsive: {
    '@media screen and (max-width: 900px)': {
      display: 'inline',
      border: 'none',
      margin: '0',
      width: '84%'
    }
  },
  buttonResponsive: {
    '@media screen and (max-width: 900px)': {
      width: '40px',
      display: 'block',
      margin: '0'
    }
  }
});

export default Login;
