import React, { useState } from 'react';
import Head from 'next/head';
import ManageCourse from '../../components/courses/manageCourse';

const NewCourse = () => {
  return (
    <div>
      <Head>
        <title>New Course</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <ManageCourse>
        <div className="content-main">
          <h5>Let's build your Course!</h5>
          <p>Start by filling the Course details and Adding new Chapters.</p>
        </div>
      </ManageCourse>
      <style jsx>{`
        .content-main h5 {
          border: none;
          text-align: center;
        }
        .content-main p {
          text-align: center;
        }
        .content-main {
          width: 65%;
          height: 400px;
        }
        h5 {
          font-size: 1vw;
          border-top: 1px solid #ccc;
          padding: 1vw;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default NewCourse
