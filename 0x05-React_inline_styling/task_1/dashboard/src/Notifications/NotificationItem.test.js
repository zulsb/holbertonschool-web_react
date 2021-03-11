import React from 'react';
import { shallow } from 'enzyme';
import { expect as e } from 'chai';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from "aphrodite";

describe('NotificationItem test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('Notificacionitem exist', () => {
    e(shallow(<NotificationItem id={1} />).exists());
  });

  test('List items', () => {
    const compo = shallow(<NotificationItem type='default' value='test' id={1} />);    
    e(compo.find('li')).to.have.lengthOf(1);
    e(compo.find('li').props()).to.have.property('data-notification-type', 'default');
    e(compo.find('li').text()).to.equal('test');
  });

  test('Inner HTML', () => {
    const compo = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} id={1} />);
    e(compo.html()).to.equal('<li data-notification-type="default"><u>test</u></li>');
  });

  test('markAsRead', () => {
    const compo = shallow(<NotificationItem type='default' value='test' id={1} />);
    const markAsRead = compo.instance().markAsRead = jest.fn();
    compo.find('li').first().simulate('click');
    markAsRead(1);
    expect(markAsRead).toHaveBeenCalled();
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
