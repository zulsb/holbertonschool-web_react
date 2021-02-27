import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('App', () => {
  test('App without crashing', (done) => {
    expect(shallow(<App />).exists());
    done();
  });
});
