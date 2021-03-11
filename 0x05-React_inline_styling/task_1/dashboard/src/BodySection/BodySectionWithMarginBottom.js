import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(s.bodySectionWithMargin)}>
        <BodySection title={this.props.title} children={this.props.children} />
      </div>
    );
  }
}
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}
BodySectionWithMarginBottom.defaultProps = {
  title: ''
}
const s = StyleSheet.create({
  bodySectionWithMargin: {
    marginTop: '40px'
  }
});

export default BodySectionWithMarginBottom;
