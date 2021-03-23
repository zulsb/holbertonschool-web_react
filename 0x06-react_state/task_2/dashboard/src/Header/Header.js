import React from "react";
import logo from "../assets/HLogo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={css(s.header)}>
        <img src={logo} className={css(s.logo)} alt="logo" />
        <h1>School dashboard</h1>
        {this.context.user.isLoggedIn ? (
          <p id="logoutSection" className={css(s.logOut)}>
            Welcome {this.context.user.email} (
            <span onClick={this.context.logOut}>logout</span>)
          </p>
        ) : (
          <></>
        )}
      </header>
    );
  }
}

const s = StyleSheet.create({
  header: {
    display: "flex",
    color: "#e0354b",
    borderBottom: "3px solid #e0354b",
    alignItems: "center",
  },
  logo: {
    width: "195px",
  },
  logOut: {
    textAlign: "end",
  },
});

Header.contextType = AppContext;

export default Header;
