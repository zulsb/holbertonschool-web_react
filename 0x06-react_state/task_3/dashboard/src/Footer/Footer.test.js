import React from 'react';
import { shallow } from 'enzyme';
import { expect as e } from 'chai';
import App from '../App/App';
import Footer from './Footer';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

describe('Footer test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  test('Footer exist', (done) => {
    e(shallow(<AppContext.Provider value={value}><Footer /></AppContext.Provider>).exists());
    done();
  });

  test('App-footer', (done) => {
    e(shallow(<App />).contains(<footer className='App-footer' />))
    done();
  });

  test('Copyright', () => {
    const compo = shallow(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    e(compo.find(Footer).html()).match(/<footer><p>Copyright*/);
  });

  const value = { user: user, logOut: logOut };
  test('Link is not displayed when the user is logged', () => {
    expect(shallow(<AppContext.Provider value={value}><Footer /></AppContext.Provider>).find("footer a")).toHaveLength(0);
  });

  test('Link is displayed when the user is logged in within the context', () => {
    value.user.isLoggedIn = true;
    const compo = shallow(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    expect(compo.find(Footer).html()).toEqual('<footer><p>Copyright 2021 - Holberton School</p><p><a>Contact us</a></p></footer>');
  });
});
