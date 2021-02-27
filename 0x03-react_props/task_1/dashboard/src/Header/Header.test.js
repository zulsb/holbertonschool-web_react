import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Header from './Header';

describe('Header test', () => {
  test('Header exist', (done) => {
    expect(shallow(<Header />).exists());
    done();
  });

  test('App-header', (done) => {
    expect(shallow(<App />).contains(<header className='App-header' />))
    done();
  });

  test('img and h1', (done) => {
    expect(shallow(<Header />).find('img')).to.have.lengthOf(1);
    expect(shallow(<Header />).find('h1')).to.have.lengthOf(1);
    done();
  });
});
