import React, { useState } from 'react';
import Head from 'next/head';
import CourseForm from '../../components/courses/courseForm';
import ChapterList from '../../components/courses/chapterList';
import TopMenu from '../../components/shared/topMenu';

const NewCourse = () => {
  const [saved, setSaved] = useState(false)
  const [newChapter, setNewChapter] = useState(false)
  return <div>
    <Head>
      <title>New Course</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <div className="container">
      <TopMenu />
      <div className="content">
        <div className="side-menu">

          {saved ? <div className="course-main"><h5>My Awesome Course</h5><a className="pure-button pure-button-primary" onClick={()=> setSaved(false)}>Edit</a></div> : <CourseForm setSaved={setSaved}/>}
          <div className="chapters">
            <div className="course-main"><h5>Chapters</h5>{ saved && !newChapter ? <a className="pure-button pure-button-primary" onClick={()=> setNewChapter(true)}>ADD CHAPTER</a> : null}</div>
            {newChapter ? <div className="new-chapter pure-form">
              <input type="text" placeholder="Chapter Title" />
              <button type="submit" className="pure-button pure-button-primary" onClick={()=> setNewChapter(false)}>SAVE</button>
            </div> : null}
            <ChapterList />
          </div>
        </div>
        <div className="content-main">
          <h5>Let's build your Course!</h5>
          <p>Start by filling the Course details and Adding new Chapters.</p>
        </div>
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
      .content-main {
        width: 65%;
        height: 400px;
      }
      .course-main {
        display: flex;
        width: 100%;
        flex-direction: space-between;
        align-items: center;
      }
      .course-main h5 {
        width: 80%;
      }
      h5 {
        font-size: 1vw;
        border-top: 1px solid #ccc;
        padding: 1vw;
        margin: 0;
      }
      .content-main h5 {
        border: none;
        text-align: center;
      }
      .content-main p {
        text-align: center;
      }
      .new-chapter input {
        width: 70%;
      }
      .new-chapter input {
        margin-right: 10px;
      }
    `}</style>
  </div>
}

export default NewCourse
