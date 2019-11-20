import React from 'react'
import Head from 'next/head'
import Courses from '../components/courses';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <div className="container">
      <div className="main-head">
        <ul className="menu">
          <li className="menu-item"><a href="">Courses</a></li>
          <li className="menu-item"><a href="">Categories</a></li>
        </ul>
      </div>
      <div className="content">
        <div className="content-head">
          <h1>Courses</h1>

          <button className="pure-button pure-button-primary">
              <i className="fa fa-cog"></i>
              NEW COURSE
          </button>
        </div>
        <div className="content-main">
          <Courses />
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
      }
      .main-head {
        width: 100%;
        height: 80px;
        background-color: rgb(61, 79, 93);
        display: flex;
        align-items: center;
      }
      .menu {
        display: flex;
        list-style: none;
      }
      .menu .menu-item {
        width: 5vw;
      }
      .menu > .menu-item > a, .menu > .menu-item {
        color: #FFFFFF;
        text-decoration: none;
      }
      .menu > .menu-item {
        padding: 25px;
      }
      .menu {
        display: flex;
      }
      .content {
        width: 90%;
        padding: 1vw;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
      .content-head {
        display: flex;
        justify-content: space-between;
        height: 40px;
      }
      .content-head h1 {
         width: 10vw;
         font-size: 8vw;
      }
      .content-main {
        padding: 0.5vw;
        padding-top: 3vw;
      }
    `}</style>
  </div>
)

export default Home
