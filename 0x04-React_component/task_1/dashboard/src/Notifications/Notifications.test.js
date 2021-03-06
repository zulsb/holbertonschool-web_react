import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notification test', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  test('Notification exist', () => {
    expect(shallow(<Notifications />).exists());
  });

  test('List items', () => {
    expect(shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />).find(NotificationItem)).to.have.lengthOf(3);
  });

  test('Right html', () => {
    const compo = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expect(compo.find(NotificationItem).first().html()).to.equal('<li data-notification-type="default">New course available</li>');
  });

  test('Menu show when displayDrawer = false', () => {
    expect(shallow(<Notifications />).find('.menuItem')).to.have.lengthOf(1);
  });

  test('div.Notifications hide when displayDrawer = false', () => {
    expect(shallow(<Notifications />).find('.Notifications')).to.have.lengthOf(0);
  });

  test('Menu show when displayDrawer = true', () => {
    expect(shallow(<Notifications displayDrawer={true} />).find('.Notifications')).to.have.lengthOf(1);
  });

  test('div.Notifications show when displayDrawer = true', () => {
    expect(shallow(<Notifications displayDrawer={true} />).find('.Notifications')).to.have.lengthOf(1);
  });

  test('Empty array / don’t pass the listNotifications', () => {
    let compo = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(compo.find(NotificationItem)).to.have.lengthOf(1);
    compo = shallow(<Notifications displayDrawer={true} />);
    expect(compo.find(NotificationItem)).to.have.lengthOf(1);
  });

  test('List of notifications/ Right number of NotificationItem', () => {
    const compo = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expect(compo.find(NotificationItem));
    expect(compo.find(NotificationItem)).to.have.lengthOf(3);
  });

  test('ListNotifications empty message', () => {
    expect(shallow(<Notifications displayDrawer={true} />).find(NotificationItem).first().html()).to.equal('<li data-notification-type="no-new">No new notification for now</li>');
  });

});
