import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from "aphrodite";

describe('CourseList test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  test('CourseList exist', () => {
    expect(shallow(<CourseList />).exists());
  });

  test('Rows', () => {
    expect(shallow(<CourseList listCourses={listCourses}/>).find(CourseListRow)).to.have.lengthOf(5);
  });

  test('CourseList render with an empty array', () => {
    let compo = shallow(<CourseList listCourses={[]}/>);
    expect(compo.find(CourseListRow)).to.have.lengthOf(3);
    compo = shallow(<CourseList />);
    expect(compo.find(CourseListRow)).to.have.lengthOf(3);
  });

  test('List of courses', () => {
    const compo = shallow(<CourseList listCourses={listCourses}/>);
    expect(compo.find(CourseListRow).first().html()).to.equal('<tr style="background-color:#deb5b545"><th colSpan="2">Available courses</th></tr>');
    expect(compo.find(CourseListRow)).to.have.lengthOf(5);
  });

});
