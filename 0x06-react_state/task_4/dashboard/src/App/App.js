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
import AppContext, { user, logOut } from './AppContext';

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.taps = this.taps.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = { 
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: listNotifications
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.taps);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.taps);
  }

  taps(event) {
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.state.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({ user: { email: email, password: password, isLoggedIn: true } })
  }

  logOut() {
    this.setState({ user: user });
  }

  markNotificationAsRead(id) {
    const newListNotification = this.state.listNotifications.filter(notification => { return notification.id !== id; });
    this.setState({ listNotifications: this.state.listNotifications.filter(notification => { return notification.id !== id }) });
  }; 

  render() {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <Notifications listNotifications={this.state.listNotifications} displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}></Notifications>
        <div className="App">
          <Header />
          <div className={css(s.body)}>
            {this.state.user.isLoggedIn ? 
              (
                <BodySectionWithMarginBottom title='Course list'>
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title='Log in to continue'>
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
              )}
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
      </AppContext.Provider>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

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
