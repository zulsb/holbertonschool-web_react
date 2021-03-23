import React from "react";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.taps = this.taps.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = { displayDrawer: false };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.taps);
  }

  taps(event) {
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.taps);
  }

  render() {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];

    const { displayDrawer } = this.state;

    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
        <div className="App">
          <Header />
          <div className={css(s.body)}>
            {this.props.isLoggedIn ? 
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
             : 
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={css(s.footer)}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

const s = StyleSheet.create({
  body: {
    padding: "30px 50px",
    minHeight: "100%",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    fontStyle: "italic",
    borderTop: "3px solid #e0354b",
    width: "100%",
    position: "absolute",
    bottom: "0",
    left: "0"
  },
});

export default App;
