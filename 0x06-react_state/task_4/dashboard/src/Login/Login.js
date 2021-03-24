import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  
  handleLoginSubmit(e) {
    this.props.logIn(this.state.email, this.state.password);
    e.preventDefault();
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    if (e.target.value.length !== 0 && this.state.password.length !== 0)
      this.setState({ enableSubmit: true });
    else
      this.setState({ enableSubmit: false });
  }

  handleChangePassword(e) {
    const { value } = e.target;
    const { email } = this.state;
    if (email !== '' && value !== '') this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(s.divResponsive)}>
          <form action="" onSubmit={this.handleLoginSubmit}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" className={css(s.inputSpace)} value={this.state.email}
              onChange={this.handleChangeEmail} />
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" className={css(s.inputSpace, s.loginResponsive2)} name="password" value={this.state.password}
              onChange={this.handleChangePassword}/>
            <button type="submit" className={css(s.buttonResponsive)} disabled={!this.state.enableSubmit}>OK</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const s = StyleSheet.create({
  inputSpace: {
    marginRight: '1rem',
    '@media screen and (max-width: 900px)': {
      display: 'inline',
      border: 'none',
      margin: '0',
      width: '84%'
    }
  },
  divResponsive: {
    '@media screen and (max-width: 900px)': {
      width: '90%',
      padding: '0'
    }
  },
  loginResponsive2: {
    '@media screen and (max-width: 900px)': {
      display: 'inline',
      border: 'none',
      margin: '0',
      width: '50%'
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
