import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification test", () => {
  test("Notification exist", () => {
    expect(shallow(<Notifications />).exists());
  });

  test("List items", () => {
    expect(shallow(<Notifications />).find(NotificationItem)).to.have.lengthOf(3);
  });

  test("Right html", () => {
    expect(shallow(<Notifications />).find(NotificationItem).first().html()).to.equal(
      '<li noti-style="default">New course available</li>'
    );
  });
});
