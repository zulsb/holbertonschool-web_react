import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList test', () => {
  test('CourseList exist', () => {
    expect(shallow(<CourseList />).exists());
  });

  test('Rows', () => {
    expect(shallow(<CourseList />).find(CourseListRow)).to.have.lengthOf(5);
  });
});
