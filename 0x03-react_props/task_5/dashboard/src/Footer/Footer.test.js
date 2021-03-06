import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Footer from './Footer';

describe('Footer test', () => {
  test('Footer exist', (done) => {
    expect(shallow(<Footer />).exists());
    done();
  });

  test('App-footer', (done) => {
    expect(shallow(<App />).contains(<footer className='App-footer' />))
    done();
  });

  test('Copyright', (done) => {
    expect(shallow(<Footer />).text('Copyright')).contain('Copyright');
    done();
  });
});
