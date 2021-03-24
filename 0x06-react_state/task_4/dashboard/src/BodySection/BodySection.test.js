import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from "aphrodite";

describe('BodySection test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('Render exist', () => {
    expect(shallow(<BodySection title='test' />).exists());
  });

  test('h2, title and p', () => {
    const compo = shallow(<BodySection title='test title'><p>test children node</p></BodySection>);
    expect(compo.find('h2')).to.have.lengthOf(1);
    expect(compo.find('h2').text()).to.equal('test title');
    expect(compo.find('p')).to.have.lengthOf(1);
    expect(compo.find('p').text()).to.equal('test children node');
  });
});
