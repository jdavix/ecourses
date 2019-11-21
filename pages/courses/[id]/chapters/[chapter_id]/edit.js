import React, { useState } from 'react';
import Head from 'next/head';
import ManageCourse from '../../../../../components/courses/manageCourse';
import ManageChapter from '../../../../../components/chapters/manageChapter';

const EditChapter = () => {
  return (
    <div>
      <Head>
        <title>Chapter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta charset="utf-8" />
      </Head>
      <ManageCourse>
        <ManageChapter />
      </ManageCourse>
    </div>
  )
}

export default EditChapter