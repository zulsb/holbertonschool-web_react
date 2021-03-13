import React from 'react';
import { shallow } from 'enzyme';
import { expect as e } from 'chai';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from "aphrodite";

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
    const compo = shallow(<App isLoggedIn={true} />);
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
});
