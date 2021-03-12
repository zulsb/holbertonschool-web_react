import React from "react";
import logo from "../assets/HLogo.jpg";
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(style.header)}>
      <img src={logo} className={css(style.logo)} alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

const style = StyleSheet.create({
  header: {
    display: 'flex',
    color: '#e0354b',
    borderBottom: '3px solid #e0354b',
    alignItems: 'center'
  },
  logo: {
    width: '195px'
  }
});

export default Header;
