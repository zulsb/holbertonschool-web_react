import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from "./CourseShape";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
  return (
    <div className={css(s.containerTable)}>
      <table id='CourseList' className={css(s.table)}>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
        { listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false} />) : <></> }
        { listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />)) }
        </tbody>
      </table>
    </div>
  );
}


CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const s = StyleSheet.create({
  containerTable: {
    padding: '2rem'
  },
  table: {
    border: '1px solid lightgray',
    width: '100%'
  }
});

export default CourseList;
