import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let titles = undefined;
  let bgColor = undefined;
  const bgColorRow = { backgroundColor: '#f5f5f5ab' };
  const bgColorHeader = { backgroundColor: '#deb5b545' };

  if (isHeader === true) {
    bgColor = bgColorHeader;
    if (textSecondCell === null) {
      titles = <th colSpan='2'>{ textFirstCell }</th>;
    } else {
      titles = (
        <React.Fragment>
          <th>{ textFirstCell }</th>
          <th>{ textSecondCell }</th>
        </React.Fragment>
      );
    }
  } else {
    bgColor = bgColorRow;
    titles = (
      <React.Fragment>
        <td>{ textFirstCell }</td>
        <td>{ textSecondCell }</td>
      </React.Fragment>
    );
  }
  return <tr style={bgColor}>{titles}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
