import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let titles = "";

  if (isHeader) {
    if (textSecondCell === null) {
      titles = <th colSpan="2">{ textFirstCell }</th>;
    } else {
      titles = (
        <React.Fragment>
          <th>{ textFirstCell }</th>
          <th>{ textSecondCell }</th>
        </React.Fragment>
      );
    }
  } else {
    titles = (
      <React.Fragment>
        <td>{ textFirstCell }</td>
        <td>{ textSecondCell }</td>
      </React.Fragment>
    );
  }
  return <tr>{titles}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
