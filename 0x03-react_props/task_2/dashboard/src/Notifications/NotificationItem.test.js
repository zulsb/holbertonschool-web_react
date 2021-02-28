import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NotificationItem from './NotificationItem';

describe('Test NotificationItem.js', () => {
  test('Notificacionitem exist', () => {
    expect(shallow(<NotificationItem />).exists());
  });

  test('List items', () => {
    const compo = shallow(<NotificationItem type='default' value='test' />);    
    expect(compo.find('li')).to.have.lengthOf(1);
    expect(compo.find('li').props()).to.have.property('data-notification-type', 'default');
    expect(compo.find('li').text()).to.equal('test');
  });

  test('Inner HTML', () => {
    const compo = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(compo.html()).to.equal('<li><u>test</u></li>');
  });
});
