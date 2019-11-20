import React from 'react'
import CourseCard from './courseCard';

const Courses = () => (
  <>
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <div className="empty-message">Start by adding a new course!</div>
    <style jsx>{`
      .empty-message {
        text-align: center;
        width: 100%;
        font-size: 1vw;
      }
    `}</style>
  </>
)

export default Courses
