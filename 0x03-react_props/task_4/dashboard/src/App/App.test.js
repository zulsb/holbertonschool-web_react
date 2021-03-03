import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

describe('App test', () => {
  test('App exist', () => {
    expect(shallow(<App />).exists());
  });

  test('CourseList hide when isLoggedIn = false', () => {
    expect(shallow(<App />).find(CourseList)).to.have.lengthOf(0);
  });

  test('CourseList show and Login hide when isLoggedIn = true', () => {
    const compo = shallow(<App isLoggedIn={true} />);
    expect(compo.find(CourseList)).to.have.lengthOf(1);
    expect(compo.find(Login)).to.have.lengthOf(0);
  });
});
