import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  const name =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class HOC extends Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  HOC.displayName = `WithLogging(${name})`;
  return HOC;
}

export default WithLogging;
