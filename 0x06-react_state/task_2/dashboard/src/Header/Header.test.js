import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect as e} from 'chai';
import App from '../App/App';
import Header from './Header';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

describe('Header test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const value = { user: user, logOut: logOut };
  
  test('Header exist', (done) => {
    expect(shallow(<AppContext.Provider value={value}><Header /></AppContext.Provider>).exists());
    done();
  });

  test('App-header', (done) => {
    expect(shallow(<App />).contains(<header className='App-header' />))
    done();
  });

  // test('img and h1', (done) => {
  //   expect(shallow(<AppContext.Provider value={value}><Header/></AppContext.Provider>).find('img')).to.have.lengthOf(1);
  //   expect(shallow(<AppContext.Provider value={value}><Header/></AppContext.Provider>).find('h1')).to.have.lengthOf(1);
  //   done();
  // });

  test('LogoutSection is not created', () => {
    const compo = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    e(compo.find('p#logoutSection')).to.have.lengthOf(0);
  });

  test('LogoutSection is created', () => {
    value.user.isLoggedIn = true;
    value.user.email = 'test@test.com';
    value.user.password = 'test';
    const compo = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    e(compo.find('p#logoutSection')).to.have.lengthOf(1);
  });

  test('Clicking on the link is calling the spy', () => {
    value.user.isLoggedIn = true;
    value.user.email = 'test@test.com';
    value.user.password = 'test';
    value.logOut = jest.fn();
    const compo = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    compo.find("#logoutSection span").simulate("click");
    expect(value.logOut).toHaveBeenCalled();
  });
});
