import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CourseCard = ()=> {
  return(
    <>
    <div className="course-card">
      <div className="course-icon">
        <span className="icon"><FontAwesomeIcon icon="book" color="#000000" size="lg"/></span>
        <h5>5 Lessons</h5>
      </div>
      <div className="course-card-content">
        <h4>Course Name Would be Here</h4>
        <p>This is the course description, course description, course description. </p>
        <p>Last Updated: Oct 24, 2019 at 8:00 AM</p>
      </div>
    </div>
    <style jsx>{`
      .course-card {
        border: 1px solid #CCC;
        padding: 0.4vw;
        display:flex;
        height: 7vw;
        margin-top: 2vw;
      }
      .course-icon {
        width: 15%;
        text-align: center;
        display: flex;
        flex-direction: column;
        alig-items; center;
        justify-content: center;
        height: 100%;
      }
      .course-icon .icon {
        font-size: 2vw;
      }
      .course-icon h5 {
        font-size: 1vw;
        padding: 0;
        margin:0;
      }
      .course-card-content {
        width: 80%;
        padding: 0.5vw;
      }
      .course-card-content h4 {
        font-size: 1.5vw;
        padding: 0;
        margin: 0;
      }
    `}
    </style>
    </>
  )
}

export default CourseCard;