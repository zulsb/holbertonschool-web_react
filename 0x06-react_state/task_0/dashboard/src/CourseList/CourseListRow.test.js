import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from "aphrodite";

describe('CourseListRow test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  test('CourseListRow exist', () => {
    expect(shallow(<CourseListRow textFirstCell='test' />).exists());
  });

  test('isHeader = True and with one th', () => {
    const compo = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);
    expect(compo.find('th')).to.have.lengthOf(1);
    expect(compo.find('th').props()).to.have.property('colSpan', '2');
  });

  test('isHeader = True and with two th', () => {
    const compo = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test' />);
    expect(compo.find('th')).to.have.lengthOf(2);
  });

  test('isHeader = False and with two td', () => {
    const compo = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);
    expect(compo.find('td')).to.have.lengthOf(2);
  });
});
