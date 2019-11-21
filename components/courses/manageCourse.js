import React, { useState, useContext } from 'react';
import Head from 'next/head';
import CourseForm from './courseForm';
import ChapterList from './chapterList';
import TopMenu from '../shared/topMenu';
import {observer} from 'mobx-react-lite';
import CourseStore from '../../stores/courseStore';

const NewCourse = observer((props) => {
  const [newChapter, setNewChapter] = useState(false)

  const courseStore = useContext(CourseStore);
  let {currentCourse, setCourse} = courseStore;

  const [saved, setSaved] = useState(currentCourse.name ? true : false)

  return (
    <>
      <div className="container">
        <TopMenu />
        <div className="content">
          <div className="side-menu">

            {saved ? <div className="course-main">
                       <h5>{currentCourse.name}</h5><a className="pure-button pure-button-primary" onClick={()=> setSaved(false)}>Edit</a>
                     </div> : <CourseForm setSaved={setSaved} course={currentCourse} setCourse={setCourse}/>}
            <div className="chapters">
              <div className="course-main"><h5>Chapters</h5>{ saved && !newChapter ? <a className="pure-button pure-button-primary" onClick={()=> setNewChapter(true)}>ADD CHAPTER</a> : null}</div>
              {newChapter ? <div className="new-chapter pure-form">
                <input type="text" placeholder="Chapter Title" />
                <button type="submit" className="pure-button pure-button-primary" onClick={()=> setNewChapter(false)}>ADD</button>
              </div> : null}
              <ChapterList />
            </div>
          </div>
          {props.children}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
        .content {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .side-menu {
          width: 35%;
          background-color: #e8e8e8;
          height: 800px;
          padding: 0.7vw;
        }
        .pure-form {
          padding: 0.5vw 0;
        }
        .course-main {
          display: flex;
          width: 100%;
          flex-direction: space-between;
          align-items: center;
          padding: 10px 0;
        }
        .course-main h5 {
          width: 80%;
        }
        h5 {
          font-size: 1.5vw;
          padding: 1vw;
          margin: 0;
        }
        .new-chapter input {
          width: 70%;
        }
        .new-chapter input {
          margin-right: 10px;
        }
      `}</style>
  </>
  )
})

export default NewCourse