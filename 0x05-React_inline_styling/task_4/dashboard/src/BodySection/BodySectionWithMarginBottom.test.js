import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from "aphrodite";

describe('BodySectionWithMarginBottom test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('Render exist', () => {
    expect(shallow(<BodySectionWithMarginBottom title='test title' />).exists());
  });

  test('BodySection', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='test title'><p>test children node</p></BodySectionWithMarginBottom>)
    expect(wrapper.contains(<div className='bodySectionWithMargin' />));
    expect(wrapper.children()).to.have.lengthOf(1);
    expect(wrapper.find(BodySection)).to.have.lengthOf(1);
    expect(wrapper.find(BodySection).children()).to.have.lengthOf(1);
    expect(wrapper.find(BodySection).props().title).to.equal('test title');
    expect(wrapper.find('p')).to.have.lengthOf(1);
    expect(wrapper.find('p').text()).to.equal('test children node');
  })
});
