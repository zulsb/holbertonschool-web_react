import React from 'react';
import { shallow } from 'enzyme';
import { expect as e } from 'chai';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from "aphrodite";

describe('Notification test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  test('Notification exist', () => {
    e(shallow(<Notifications />).exists());
  });

  test('List items', () => {
    e(shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />).find(NotificationItem)).to.have.lengthOf(3);
  });

  test('Right html', () => {
    const compo = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    e(compo.find(NotificationItem).first().html()).to.equal('<li data-notification-type="default">New course available</li>');
  });

  test('Menu show when displayDrawer = false', () => {
    e(shallow(<Notifications />).find('div#menuItem')).to.have.lengthOf(1);
  });

  test('div#Notifications hide when displayDrawer = false', () => {
    e(shallow(<Notifications />).find('div#Notifications')).to.have.lengthOf(0);
  });

  test('Menu show when displayDrawer = true', () => {
    e(shallow(<Notifications displayDrawer={true} />).find('div#Notifications')).to.have.lengthOf(1);
  });

  test('div.Notifications show when displayDrawer = true', () => {
    e(shallow(<Notifications displayDrawer={true} />).find('div#Notifications')).to.have.lengthOf(1);
  });

  test('Empty array / don’t pass the listNotifications', () => {
    let compo = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    e(compo.find(NotificationItem)).to.have.lengthOf(1);
    compo = shallow(<Notifications displayDrawer={true} />);
    e(compo.find(NotificationItem)).to.have.lengthOf(1);
  });

  test('List of notifications/ Right number of NotificationItem', () => {
    const compo = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    e(compo.find(NotificationItem));
    e(compo.find(NotificationItem)).to.have.lengthOf(3);
  });

  test('ListNotifications empty message', () => {
    e(shallow(<Notifications displayDrawer={true} />).find(NotificationItem).first().html()).to.equal('<li data-notification-type="no-new">No new notification for now</li>');
  });

  test('Check function "markAsRead"', () => {
    const compo = shallow(<Notifications displayDrawer={true} />);
    console.log = jest.fn();
    compo.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalled()
  });

  const NOupdated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  const updated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    { id: 4, type: 'default', value: 'New updates' },
  ];

  test('Updating props same list', () => {
    const compo = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    compo.setProps({ listNotifications: NOupdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
  });

  test('Updating propswith a longer list', () => {
    const compo = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    compo.setProps({ listNotifications: updated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
  });

});
