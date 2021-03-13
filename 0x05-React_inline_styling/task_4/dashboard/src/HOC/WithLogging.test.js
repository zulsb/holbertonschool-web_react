import React from 'react';
import { mount } from 'enzyme';
import { expect as e } from 'chai';
import Login from '../Login/Login';
import WithLogging from './WithLogging';
import { StyleSheetTestUtils } from "aphrodite";


describe('WithLogging test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('console.log call / pure html', () => {
    const HOC = WithLogging(() => <a></a>);
    console.log = jest.fn();
    const compo = mount(<HOC />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    compo.unmount();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  test('console.log called / Login component. ', () => {
    const HOC = WithLogging(Login);
    console.log = jest.fn();
    const compo = mount(<HOC />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    compo.unmount();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
