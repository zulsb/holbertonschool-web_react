import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect as e } from 'chai';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

describe('App test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  test('App exist', () => {
    e(shallow(<App />).exists());
  });

  let calls = {};
  beforeEach(() => {
    calls = {}; 
    document.addEventListener = jest.fn((event, callback) => {
      calls[event] = callback;
    });
  });

  test('CourseList hide when isLoggedIn = false', () => {
    e(shallow(<App />).find(CourseList)).to.have.lengthOf(0);
  });

  test('CourseList show and Login hide when isLoggedIn = true', () => {
    const compo = shallow(<App />);
    compo.setState({ user: { isLoggedIn: true } });
    e(compo.find(CourseList)).to.have.lengthOf(1);
    e(compo.find(Login)).to.have.lengthOf(0);
  });

  test('ctrl+h call the "logOut" function', () => {
    const alertMessage = jest.fn(() => void (0));
    shallow(<App />);
    window.alert = alertMessage;
    calls.keydown({ key: 'h', ctrlKey: true });
    expect(alertMessage).toHaveBeenCalled();
  });

  test('displayDrawer = false', () => {
    expect(shallow(<App />).state().displayDrawer).toEqual(false);
  });

  test('Calling handleDisplayDrawer, state should now be true', () => {
    const compo = shallow(<App />);
    e(compo.state().displayDrawer).to.equal(false);
    compo.instance().handleDisplayDrawer();
    e(compo.state().displayDrawer).to.equal(true);    
  });

  test('Calling handleHideDrawer, state is updated to be false', () => {
    const compo = shallow(<App />);
    e(compo.state().displayDrawer).to.equal(false);
    compo.instance().handleDisplayDrawer();
    e(compo.state().displayDrawer).to.equal(true);
    compo.instance().handleHideDrawer();
    e(compo.state().displayDrawer).to.equal(false);    
  });

  const value = { user: user, logOut: logOut };

  test('Verifying if the state is updated', () => {
    const compo = mount(<AppContext.Provider value={value}><App /></AppContext.Provider>);
    compo.instance().logOut;
    e(compo.state().user).to.equals(value.user);
  });

  test('LogIn function updates the state correctly', () => {
    const compo = mount(<AppContext.Provider value={value}><App /></AppContext.Provider>);
    compo.instance().logIn('test@test.com', 'test');
    value.user.isLoggedIn = true;
    value.user.email = 'test@test.com';
    value.user.password = 'test';
    e(compo.state().user.email).to.equals(value.user.email);
    e(compo.state().user.password).to.equals(value.user.password);
    e(compo.state().user.isLoggedIn).to.equals(value.user.isLoggedIn);
  });

  test('LogOut function updates the state correctly', () => {
    value.user.isLoggedIn = true;
    value.user.email = 'test@test.com';
    value.user.password = 'test';
    const compo = mount(<AppContext.Provider value={value}><App /></AppContext.Provider>);
    compo.instance().logOut();
    e(compo.state().user).to.equals(user);
  });
});
