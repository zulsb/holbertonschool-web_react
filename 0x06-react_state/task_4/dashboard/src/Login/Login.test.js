import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import App from "../App/App";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("Login test", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test("Login exist", (done) => {
    expect(shallow(<Login />).exists());
    done();
  });

  test("App-body", (done) => {
    expect(shallow(<App />).contains(<body className="App-body" />));
    done();
  });

  test("Inputs and labels", (done) => {
    expect(shallow(<Login />).find("input")).to.have.lengthOf(2);
    expect(shallow(<Login />).find("label")).to.have.lengthOf(2);
    done();
  });

  test("Submit button = disabled by default", () => {
    expect(shallow(<Login />).state().enableSubmit).to.equal(false);    
  });

  test("The button = enabled", () => {
    const compo = shallow(<Login />);
    compo.find("input#email").simulate("change", { target: { value: "luz@test.com" } });
    compo.find("input#password").simulate("change", { target: { value: "hello" } });
    expect(compo.state().enableSubmit).to.equal(true);
  });
});
