import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checkBox, setCheckbox] = React.useState(false);
  const handleTaps = () => {
    setCheckbox(!checkbox);
  };
  let titles = undefined;
  let bgColor = undefined;
  const bgColorRow = { backgroundColor: '#f5f5f5ab' };
  const bgColorHeader = { backgroundColor: '#deb5b545' };

  if (isHeader === true) {
    bgColor = bgColorHeader;
    if (textSecondCell === null) {
      titles = (
        <th className={css(s.thHeader)} colSpan='2'>
          {textFirstCell}
        </th>
      );
    } else {
      titles = (
        <React.Fragment>
          <th className={css(s.thSubHeader)}>{textFirstCell}</th>
          <th className={css(s.thSubHeader)}>{textSecondCell}</th>
        </React.Fragment>
      );
    }
  } if (isHeader === false) {
    bgColor = bgColorRow;
    titles = (
      <React.Fragment>
        <td>
          <input className={css(s.rowChecked)} type="checkbox" onClick={handleTaps}></input>{textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </React.Fragment>
    );
  }
  return <tr style={bgColor}>{titles}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const s = StyleSheet.create({
  thHeader: {
    textAlign: 'center',
    borderBottom: '1px solid lightgray',
    padding: '3px'
  },
  thSubHeader: {
    borderBottom: '1px solid lightgray',
    textAlign: 'left',
    padding: '3px'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

export default CourseListRow;
