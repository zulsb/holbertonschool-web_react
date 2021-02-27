import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import App from "../App/App";
import Login from "./Login";

describe("Login test", () => {
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
});
